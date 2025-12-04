import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// @ts-ignore - this package has no TS types by default
import allCountries from "world-countries";

type Country = {
  name: string;
  lat: number;
  lon: number;
  details: string;
  url: string;
};

type TooltipState = {
  visible: boolean;
  x: number;
  y: number;
  country: Country | null;
};

// Turn country name into URL slug: "United States" -> "united-states"
const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Build ALL countries list from world-countries dataset
const countries: Country[] = (allCountries as any[])
  .map((c) => {
    const lat = c.latlng?.[0];
    const lon = c.latlng?.[1];

    if (typeof lat !== "number" || typeof lon !== "number") return null;

    const name: string = c.name?.common ?? "Unknown";
    const capital: string =
      Array.isArray(c.capital) && c.capital.length > 0
        ? c.capital[0]
        : "N/A";
    const region: string = c.region ?? "Unknown region";

    return {
      name,
      lat,
      lon,
      details: `${region} · Capital: ${capital}`,
      url: `/coverage/${slugify(region)}/${slugify(name)}`,
    } satisfies Country;
  })
  .filter((c): c is Country => c !== null);

export default function WorldGlobe() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    country: null,
  });

  // Shared refs
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const raycasterRef = useRef(new THREE.Raycaster());
  const pointerRef = useRef(new THREE.Vector2());
  const markersRef = useRef<THREE.Object3D[]>([]);
  const pointerPosRef = useRef<{ x: number; y: number } | null>(null);
  const pointerInsideRef = useRef(false);
  const stickyRef = useRef(false); // true when tooltip is pinned by click
  const controlsRef = useRef<OrbitControls | null>(null);
  const keysPressedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const div = containerRef.current;
    if (!div) return;

    // ===== SCENE / CAMERA / RENDERER =====
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      div.clientWidth / div.clientHeight,
      0.1,
      1000
    );
    // initial camera will be overwritten by cinematic spline, but set a safe default
    camera.position.set(0, 0, 3.5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(div.clientWidth, div.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    div.appendChild(renderer.domElement);

    // lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.4);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    // ===== STARS / BACKDROP =====
    const starGeo = new THREE.BufferGeometry();
    const starCount = 2000;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 40;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      size: 0.04,
      color: "#a8c4ff",
      transparent: true,
      depthWrite: false,
    });
    const stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);

    // ===== GLOBE GROUP (Earth + markers) =====
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const loader = new THREE.TextureLoader();
    const earthTexture = loader.load(
      // Change to local /public path if CORS blocks this
      "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
    );

    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshPhongMaterial({
        map: earthTexture,
        shininess: 12,
      })
    );
    globeGroup.add(earth);

    // ===== MARKERS (emoji sprite) =====
    const markerCanvas = document.createElement("canvas");
    markerCanvas.width = markerCanvas.height = 64;
    const ctx = markerCanvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, 64, 64);
      ctx.font = "48px system-ui";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("📍", 32, 32);
    }
    const markerTexture = new THREE.CanvasTexture(markerCanvas);
    markerTexture.needsUpdate = true;

    const markerMaterial = new THREE.SpriteMaterial({
      map: markerTexture,
      transparent: true,
      depthTest: true,
      depthWrite: false,
    });

    markersRef.current = [];
    countries.forEach((c) => {
      const marker = new THREE.Sprite(markerMaterial);
      marker.position.copy(latLonToVector3(c.lat, c.lon, 1.05));
      marker.scale.set(0.08, 0.08, 0.08);
      (marker as any).userData = { country: c };

      globeGroup.add(marker);
      markersRef.current.push(marker);
    });

    // ===== CINEMATIC SOLAR BACKDROP + CAMERA SPLINE =====
    // Note: these are intentionally lightweight — swap textures and tweak sizes for cinematic polish
    const solarGroup = new THREE.Group();
    scene.add(solarGroup);

    // Sun (emissive)
    const sunMesh = new THREE.Mesh(
      new THREE.SphereGeometry(12, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xffcc66, toneMapped: false })
    );
    sunMesh.position.set(0, 0, -140);
    solarGroup.add(sunMesh);

    // Two simple planets for parallax
    const planet1 = new THREE.Mesh(
      new THREE.SphereGeometry(2.4, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0xb5651d })
    );
    planet1.position.set(30, 6, -80);
    solarGroup.add(planet1);

    const planet2 = new THREE.Mesh(
      new THREE.SphereGeometry(5.2, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0x8899ff })
    );
    planet2.position.set(-45, -4, -110);
    solarGroup.add(planet2);

    // Camera spline (far -> mid -> near -> final orbit position)
    const spline = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 40, 220), // far start (solar-system)
      new THREE.Vector3(0, 18, 90), // approach
      new THREE.Vector3(0, 6, 22), // near earth
      new THREE.Vector3(2, 3.2, 1.5), // final orbit mount - CHANGED FROM 2.3 TO 1.5 FOR MORE ZOOM
    ]);

    // flight config
    const FLY_DURATION = 7; // seconds, tweak to taste
    let flyStartTime: number | null = null;
    let flyDone = false;

    function easeInOutCubic(t: number) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    // ===== ORBIT CONTROLS =====
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // Disabled during intro
    controls.enablePan = false;
    controls.rotateSpeed = 0.55;
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.55;
    // keep rotate disabled until fly completes to avoid jump
    controls.enableRotate = false;
    
    // Set zoom speed
    controls.zoomSpeed = 0.8;
    
    // Store controls reference
    controlsRef.current = controls;

    const clock = new THREE.Clock();

    // Custom wheel handler for zoom with modifier key
    const handleWheel = (event: WheelEvent) => {
      // Only zoom if Ctrl or Shift is pressed
      if (event.ctrlKey || event.shiftKey || event.metaKey) {
        event.preventDefault();
        
        // Manually implement zoom since OrbitControls zoom is disabled
        if (flyDone && camera) {
          const zoomSpeed = 0.001;
          const delta = event.deltaY;
          
          // Move camera closer/further
          const direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
          camera.position.add(direction.multiplyScalar(delta * zoomSpeed));
          
          // Clamp zoom distance
          const minDistance = 0.8;
          const maxDistance = 5;
          const distance = camera.position.length();
          
          if (distance < minDistance) {
            camera.position.normalize().multiplyScalar(minDistance);
          } else if (distance > maxDistance) {
            camera.position.normalize().multiplyScalar(maxDistance);
          }
        }
      }
    };

    // Add custom wheel event listener
    renderer.domElement.addEventListener('wheel', handleWheel, { passive: false });

    // Key event handlers for modifier keys
    const handleKeyDown = (event: KeyboardEvent) => {
      keysPressedRef.current.add(event.key.toLowerCase());
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      keysPressedRef.current.delete(event.key.toLowerCase());
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Raycasting & tooltip/hit detection handled in animate
    function animate() {
      requestAnimationFrame(animate);

      const t = clock.getElapsedTime();

      // Stars twinkle & drift
      starMaterial.size = 0.035 + 0.015 * (1 + Math.sin(t * 4));
      stars.rotation.y += 0.0005;
      stars.rotation.x += 0.0002;

      // Planet parallax / slow orbits for cinematic depth
      planet1.rotation.y += 0.002;
      planet2.rotation.y -= 0.0012;
      planet1.position.x = 30 + Math.sin(t * 0.12) * 1.6;
      planet2.position.z = -110 + Math.cos(t * 0.09) * 2.2;

      // Earth rotation:
      if (pointerInsideRef.current) {
        controls.autoRotate = false;
      } else {
        // During fly, we keep globeGroup static; after flyDone we allow auto-rotate + small globe spin
        if (!flyDone) {
          controls.autoRotate = false;
        } else {
          controls.autoRotate = true;
          globeGroup.rotation.y += 0.0008;
        }
      }

      // --- Camera flight logic ---
      if (!flyDone) {
        if (flyStartTime === null) flyStartTime = t;
        const elapsed = t - flyStartTime;
        const raw = Math.min(1, Math.max(0, elapsed / FLY_DURATION));
        const eased = easeInOutCubic(raw);

        const pos = spline.getPoint(eased);
        camera.position.copy(pos);

        // look slightly above center for cinematic framing
        camera.lookAt(new THREE.Vector3(0, 1.8, 0));

        if (raw >= 1) {
          flyDone = true;
          // handshake: enable controls fully for user interaction
          controls.enableRotate = true;
          // Keep enableZoom = false for normal scroll, but our custom handler will work with modifier keys
          controls.enableZoom = false;
          controls.autoRotate = true;
          controls.update();
        }
      }

      // Hover tooltips ONLY when not sticky
      if (pointerPosRef.current && !stickyRef.current) {
        const raycaster = raycasterRef.current;
        const pointer = pointerRef.current;
        raycaster.setFromCamera(pointer, camera);

        const hit = raycaster.intersectObjects(markersRef.current);
        if (hit.length > 0) {
          const hitObj = hit[0].object as any;
          const country = hitObj.userData.country as Country;
          const { x, y } = pointerPosRef.current;
          setTooltip({
            visible: true,
            x,
            y,
            country,
          });
        } else {
          setTooltip((prev) =>
            prev.visible ? { ...prev, visible: false, country: null } : prev
          );
        }
      }

      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    // ===== RESIZE =====
    const handleResize = () => {
      const divNow = containerRef.current;
      if (!divNow) return;
      camera.aspect = divNow.clientWidth / divNow.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(divNow.clientWidth, divNow.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      renderer.domElement.removeEventListener('wheel', handleWheel);
      controls.dispose();
      renderer.dispose();
      markerTexture.dispose();
      markerMaterial.dispose();
      earthTexture.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Pointer move → hover behavior (only when not sticky)
  const handlePointerMove = (e: React.PointerEvent) => {
    const div = containerRef.current;
    if (!div) return;

    const rect = div.getBoundingClientRect();
    pointerRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointerRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    pointerPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerEnter = () => {
    pointerInsideRef.current = true;
  };

  const handlePointerLeave = () => {
    pointerInsideRef.current = false;
    pointerPosRef.current = null;
    // Only hide tooltip if it's not sticky
    if (!stickyRef.current) {
      setTooltip((prev) =>
        prev.visible ? { ...prev, visible: false, country: null } : prev
      );
    }
  };

  // Click: pin/unpin tooltip
  const handleClick = (e: React.MouseEvent) => {
    const camera = cameraRef.current;
    const div = containerRef.current;
    if (!camera || !div) return;

    const rect = div.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    const localPointer = pointerRef.current;
    localPointer.x = x;
    localPointer.y = y;

    const raycaster = raycasterRef.current;
    raycaster.setFromCamera(localPointer, camera);
    const hit = raycaster.intersectObjects(markersRef.current);

    if (hit.length > 0) {
      // Clicked on a marker → sticky tooltip
      const hitObj = hit[0].object as any;
      const country = hitObj.userData.country as Country;
      stickyRef.current = true;
      pointerPosRef.current = null; // stop hover updates
      setTooltip({
        visible: true,
        x: e.clientX,
        y: e.clientY,
        country,
      });
    } else {
      // Clicked on empty space → clear sticky + hide
      stickyRef.current = false;
      setTooltip((prev) =>
        prev.visible ? { ...prev, visible: false, country: null } : prev
      );
    }
  };

  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black text-white">
      {/* GLOBE SIZE — slightly reduced but still dominant */}
      <div
        ref={containerRef}
        className="absolute inset-0 m-auto left-25px
    translate-x-[-2.5%]
      w-[100vw] h-[100vw]          /* ORIGINAL FILL FEEL */
      max-w-[100vw] max-h-[80vh] /* Reduced ~15% so text fits better */
    "
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={handleClick}
      />

      {/* TEXT — placed using % so it never crashes into globe */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* LEFT TEXT */}
        <div
          className="absolute
      left-[7%] sm:left-[8%] md:left-[10%] lg:left-[11%]
      text-left uppercase tracking-[0.22em]
    "
        >
          <span
            className="block font-light opacity-80 leading-none
        text-[clamp(2.5rem,6vw,4.5rem)]
      "
          >
            we
          </span>
          <span
            className="block font-extrabold leading-none
        text-[clamp(2.2rem,3.2vw,5.5rem)]
      "
          >
            are
          </span>
        </div>

        {/* RIGHT TEXT */}
        <div
          className="absolute
      right-[7%] sm:right-[25%] md:right-[10%] lg:right-[11%]
      text-right uppercase tracking-[0.22em]
    "
        >
          <span
            className="block font-bold leading-none whitespace-nowrap
        text-[clamp(2.2rem,3.3vw,5.5rem)]
      "
          >
            everywhere
          </span>
        </div>
      </div>

      {/* SUBTEXT - updated with zoom instructions */}
      <p
        className="absolute bottom-8 w-full text-center
    text-[10px] sm:text-[11px] tracking-[0.3em] text-gray-300/80
  "
      >
        drag to rotate • Ctrl+scroll to zoom • hover to explore • click to pin
      </p>

      {/* TOOLTIP */}
      {tooltip.visible && tooltip.country && (
        <div
          className="fixed z-[9999] min-w-[200px] max-w-[260px] rounded-xl border border-blue-400/40 bg-slate-950/95 px-3 py-2 text-xs backdrop-blur shadow-xl"
          style={{
            left: tooltip.x + 10,
            top: tooltip.y - 10,
            transform: "translate(-50%, -120%)",
          }}
        >
          <h3 className="mb-1 text-sm font-semibold">
            {tooltip.country.name}
          </h3>
          <p className="mb-2 text-[11px] text-gray-200/90">
            {tooltip.country.details}
          </p>
          <a
            href={tooltip.country.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold text-sky-300 hover:underline"
          >
            Open page →
          </a>
        </div>
      )}
    </section>
  );
}

// Convert latitude + longitude into 3D sphere coordinate
function latLonToVector3(lat: number, lon: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}