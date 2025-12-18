// src/pages/WorldGlobe.tsx
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// @ts-ignore - world-countries has no TS types
import allCountries from "world-countries";

type Country = {
  name: string;
  lat: number;
  lon: number;
  details: string;
  url: string;
  region: string;
};

type TooltipState = {
  visible: boolean;
  x: number;
  y: number;
  country: Country | null;
};

// Slug helper
const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Build countries list
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
      region: region,
    } as Country;
  })
  .filter(Boolean) as Country[];

export default function WorldGlobe(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    country: null,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Country[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  // Refs used in animation loop
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const raycasterRef = useRef(new THREE.Raycaster());
  const pointerRef = useRef(new THREE.Vector2());
  const markersRef = useRef<THREE.Object3D[]>([]);
  const pointerPosRef = useRef<{ x: number; y: number } | null>(null);
  const pointerInsideRef = useRef(false);
  const stickyRef = useRef(false);
  const controlsRef = useRef<OrbitControls | null>(null);

  // Search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      setSelectedCountry(null);
      return;
    }

    const results = countries.filter(country =>
      country.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5); // Limit to 5 results

    setSearchResults(results);
    setShowResults(true);
  };

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
    setSearchQuery(country.name);
    setShowResults(false);
    
    // Fly to country (gentle zoom, not too close)
    if (cameraRef.current && controlsRef.current) {
      const targetPosition = latLonToVector3(country.lat, country.lon, 3.2);
      controlsRef.current.enableRotate = true;
      controlsRef.current.autoRotate = false;
      
      // Animate to position
      const startPosition = cameraRef.current.position.clone();
      const startTime = performance.now();
      const duration = 1000; // 1 second animation
      
      const animateCamera = () => {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease function for smooth animation
        const easeProgress = easeOutCubic(progress);
        
        // Interpolate position
        cameraRef.current!.position.lerpVectors(startPosition, targetPosition, easeProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animateCamera);
        } else {
          cameraRef.current!.lookAt(0, 0, 0);
          controlsRef.current!.update();
        }
      };
      
      requestAnimationFrame(animateCamera);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      e.preventDefault();
      const exactMatch = countries.find(
        country => country.name.toLowerCase() === searchQuery.toLowerCase()
      );
      if (exactMatch) {
        handleSelectCountry(exactMatch);
      } else if (searchResults.length > 0) {
        handleSelectCountry(searchResults[0]);
      }
    } else if (e.key === 'Escape') {
      setShowResults(false);
    }
  };

  // Easing function for smooth camera animation
  const easeOutCubic = (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  };

  useEffect(() => {
    const mount = containerRef.current;
    if (!mount) return;

    // ----- Scene setup -----
    const scene = new THREE.Scene();

    const width = mount.clientWidth;
    const height = mount.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 3.5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.display = "block";
    mount.appendChild(renderer.domElement);

    // lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    // star backdrop
    const starGeo = new THREE.BufferGeometry();
    const starCount = 1600;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 60;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0xa8c4ff,
      transparent: true,
      depthWrite: false,
    });
    const stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);

    // globe group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // earth texture
    const loader = new THREE.TextureLoader();
    const earthTexture = loader.load(
      "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg",
      undefined,
      undefined,
      (err) => {
        // Load error: you may want to replace with a local texture in /public if CORS blocks it
        // console.warn("Earth texture load failed", err);
      }
    );

    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshPhongMaterial({
        map: earthTexture,
        shininess: 10,
      })
    );
    globeGroup.add(earth);

    // markers using CanvasTexture (emoji)
    const markerCanvas = document.createElement("canvas");
    markerCanvas.width = markerCanvas.height = 128;
    const ctx = markerCanvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, 128, 128);
      ctx.font = "92px system-ui, apple-color-emoji,Segoe UI Emoji, Noto Color Emoji";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("📍", 64, 64);
    }
    const markerTexture = new THREE.CanvasTexture(markerCanvas);
    markerTexture.encoding = THREE.sRGBEncoding;
    const markerMaterial = new THREE.SpriteMaterial({
      map: markerTexture,
      transparent: true,
      depthWrite: false,
    });

    markersRef.current = [];
    // limit markers to a subset for performance if needed (here we keep all)
    countries.forEach((c) => {
      const sprite = new THREE.Sprite(markerMaterial);
      sprite.position.copy(latLonToVector3(c.lat, c.lon, 1.05));
      sprite.scale.setScalar(0.08);
      (sprite as any).userData = { country: c };
      globeGroup.add(sprite);
      markersRef.current.push(sprite);
    });

    // REMOVED: Sun and solar system completely

    // camera spline
    const spline = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 40, 220),
      new THREE.Vector3(0, 18, 90),
      new THREE.Vector3(0, 6, 22),
      new THREE.Vector3(2, 3.2, 1.5),
    ]);

    // flight config
    const FLY_DURATION = 7; // seconds
    let flyStartTime: number | null = null;
    let flyDone = false;

    function easeInOutCubic(t: number) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.rotateSpeed = 0.55;
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.55;
    controls.enableRotate = false; // until fly completes
    controlsRef.current = controls;

    const clock = new THREE.Clock();

    // custom wheel handler — only zoom when Ctrl/Shift/Meta pressed
    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.shiftKey || event.metaKey) {
        event.preventDefault();
        if (flyDone && camera) {
          const zoomSpeed = 0.0032;
          const delta = event.deltaY;
          const dir = new THREE.Vector3();
          camera.getWorldDirection(dir);
          camera.position.add(dir.multiplyScalar(delta * zoomSpeed));
          const minDistance = 0.8;
          const maxDistance = 5;
          const distance = camera.position.length();
          if (distance < minDistance) camera.position.normalize().multiplyScalar(minDistance);
          if (distance > maxDistance) camera.position.normalize().multiplyScalar(maxDistance);
        }
      }
    };

    // add wheel listener on renderer.domElement (not passive because we call preventDefault)
    renderer.domElement.addEventListener("wheel", handleWheel, { passive: false });

    // key handlers to track modifier keys (if you want to use them elsewhere)
    const keysPressed = new Set<string>();
    const handleKeyDownGlobal = (ev: KeyboardEvent) => keysPressed.add(ev.key.toLowerCase());
    const handleKeyUpGlobal = (ev: KeyboardEvent) => keysPressed.delete(ev.key.toLowerCase());
    window.addEventListener("keydown", handleKeyDownGlobal);
    window.addEventListener("keyup", handleKeyUpGlobal);

    // animation loop
    const raycaster = raycasterRef.current;
    const pointer = pointerRef.current;

    function animate() {
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // stars animation
      (starMaterial as any).size = 0.03 + 0.015 * (1 + Math.sin(t * 4));
      stars.rotation.y += 0.0005;
      stars.rotation.x += 0.0002;

      // earth rotation vs controls
      if (pointerInsideRef.current) {
        controls.autoRotate = false;
      } else {
        controls.autoRotate = flyDone;
        if (flyDone) globeGroup.rotation.y += 0.0008;
      }

      // camera flight
      if (!flyDone) {
        if (flyStartTime === null) flyStartTime = t;
        const elapsed = t - flyStartTime;
        const raw = Math.min(1, Math.max(0, elapsed / FLY_DURATION));
        const eased = easeInOutCubic(raw);
        const pos = spline.getPoint(eased);
        camera.position.copy(pos);
        camera.lookAt(new THREE.Vector3(0, 1.8, 0));
        if (raw >= 1) {
          flyDone = true;
          controls.enableRotate = true;
          controls.enableZoom = false;
          controls.autoRotate = true;
          controls.update();
        }
      }

      // hover tooltips (only when not sticky)
      if (pointerPosRef.current && !stickyRef.current) {
        raycaster.setFromCamera(pointer, camera);
        const hits = raycaster.intersectObjects(markersRef.current, true);
        if (hits.length > 0) {
          const hitObj: any = hits[0].object;
          const country = hitObj.userData?.country as Country | undefined;
          if (country) {
            const { x, y } = pointerPosRef.current!;
            setTooltip({ visible: true, x, y, country });
          }
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

    // pointer handling (attached to mount container)
    const handlePointerMove = (ev: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
      pointerRef.current.set(x, y);
      pointerPosRef.current = { x: ev.clientX, y: ev.clientY };
    };

    const handlePointerEnter = () => {
      pointerInsideRef.current = true;
    };
    const handlePointerLeave = () => {
      pointerInsideRef.current = false;
      pointerPosRef.current = null;
      if (!stickyRef.current) {
        setTooltip((prev) => (prev.visible ? { ...prev, visible: false, country: null } : prev));
      }
    };

    const handleClick = (ev: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
      pointerRef.current.set(x, y);
      raycaster.setFromCamera(pointerRef.current, camera);
      const hits = raycaster.intersectObjects(markersRef.current, true);
      if (hits.length > 0) {
        const hitObj: any = hits[0].object;
        const country = hitObj.userData?.country as Country | undefined;
        if (country) {
          stickyRef.current = true;
          pointerPosRef.current = null;
          setTooltip({ visible: true, x: ev.clientX, y: ev.clientY, country });
        }
      } else {
        stickyRef.current = false;
        setTooltip((prev) => (prev.visible ? { ...prev, visible: false, country: null } : prev));
      }
    };

    mount.addEventListener("pointermove", handlePointerMove, { passive: true });
    mount.addEventListener("pointerenter", handlePointerEnter);
    mount.addEventListener("pointerleave", handlePointerLeave);
    mount.addEventListener("click", handleClick);

    // resize handler
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDownGlobal);
      window.removeEventListener("keyup", handleKeyUpGlobal);
      renderer.domElement.removeEventListener("wheel", handleWheel);
      mount.removeEventListener("pointermove", handlePointerMove);
      mount.removeEventListener("pointerenter", handlePointerEnter);
      mount.removeEventListener("pointerleave", handlePointerLeave);
      mount.removeEventListener("click", handleClick);

      controls.dispose();

      // dispose textures/materials/geometries
      markerTexture.dispose();
      markerMaterial.dispose();
      earthTexture.dispose();
      starGeo.dispose();
      starMaterial.dispose();

      // remove renderer DOM
      if (renderer && renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }

      // stop any animation frames via removing references (requestAnimationFrame will naturally stop when component unmounts)
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pointer event handlers for the overlay container (React events)
  const onPointerMove = (e: React.PointerEvent) => {
    // keep React pointer events in sync with mounted DOM listeners
    const div = containerRef.current;
    if (!div) return;
    const rect = div.getBoundingClientRect();
    pointerRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointerRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    pointerPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerEnter = () => (pointerInsideRef.current = true);
  const onPointerLeave = () => {
    pointerInsideRef.current = false;
    pointerPosRef.current = null;
    if (!stickyRef.current) setTooltip((prev) => (prev.visible ? { ...prev, visible: false, country: null } : prev));
  };

  // Render
  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Canvas mount point */}
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
        onPointerMove={onPointerMove}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      />

      {/* Search Bar */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 sm:px-6 pointer-events-auto z-10">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => searchQuery.trim() && setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
            placeholder="Search for a country..."
            className="w-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-full py-3 px-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm sm:text-base"
          />
          
          {/* Search Results Dropdown */}
          {showResults && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900/95 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden z-20">
              {searchResults.map((country, index) => (
                <a
                  key={index}
                  href={country.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 text-left hover:bg-slate-800/50 transition-colors border-b border-slate-700/30 last:border-b-0"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelectCountry(country);
                    // Navigate to country page
                    window.open(country.url, '_blank');
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-white">{country.name}</h3>
                      <p className="text-xs text-gray-300 mt-1">{country.details}</p>
                    </div>
                    <span className="text-xs text-sky-300 font-medium">Visit page</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Selected Country Info */}
      {selectedCountry && (
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-slate-900/80 backdrop-blur-sm border border-sky-600/30 rounded-lg px-4 py-3 text-center pointer-events-auto z-10 max-w-md w-[90%] sm:w-auto">
          <h3 className="text-sm font-semibold text-white mb-1">{selectedCountry.name}</h3>
          <p className="text-xs text-gray-300 mb-2">{selectedCountry.details}</p>
          <a
            href={selectedCountry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-semibold text-sky-300 hover:text-sky-200 bg-sky-900/30 hover:bg-sky-800/40 px-4 py-2 rounded-lg transition-colors"
          >
            Visit {selectedCountry.name} Page →
          </a>
        </div>
      )}

      {/* Subtext / instructions */}
      <p className="absolute bottom-5 w-full text-center text-xs md:text-sm text-gray-300/80 pointer-events-none px-4">
        drag to rotate • Ctrl/Shift (or Cmd) + scroll to zoom • hover to explore • click to pin
      </p>

      {/* Tooltip (outside canvas as DOM) */}
      {tooltip.visible && tooltip.country && (
        <div
          className="fixed z-50 min-w-[200px] max-w-[300px] rounded-lg border border-sky-600/30 bg-slate-900/95 px-3 py-2 text-xs shadow-lg"
          style={{
            left: Math.min(Math.max(12, tooltip.x), window.innerWidth - 12),
            top: Math.min(Math.max(12, tooltip.y - 10), window.innerHeight - 12),
            transform: "translate(-50%, -120%)",
          }}
        >
          <h3 className="mb-1 text-sm font-semibold">{tooltip.country.name}</h3>
          <p className="mb-2 text-[11px] text-gray-200/90">{tooltip.country.details}</p>
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

// Convert lat/lon to 3D point on sphere radius r
function latLonToVector3(lat: number, lon: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}