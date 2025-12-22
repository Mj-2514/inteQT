// src/pages/WorldGlobe.tsx
import React, { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
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
  continent: string;
};

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const MAP_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg";
const EARTH_TEXTURE = "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg";

const mapRegionToContinent = (region: string, subregion?: string): string => {
  switch (region) {
    case "Asia": return "asia";
    case "Europe": return "europe";
    case "Africa": return "africa";
    case "Oceania": return "oceania";
    case "Americas":
      if (subregion === "North America" || subregion === "Central America") return "north-america";
      if (subregion === "South America" || subregion === "Caribbean") return "south-america";
      return "americas";
    default: return "world";
  }
};

// Build countries list
const countries: Country[] = (allCountries as any[])
  .map((c) => {
    const lat = c.latlng?.[0];
    const lon = c.latlng?.[1];
    if (typeof lat !== "number" || typeof lon !== "number") return null;
    const name: string = c.name?.common ?? "Unknown";
    const capital: string = Array.isArray(c.capital) && c.capital.length > 0 ? c.capital[0] : "N/A";
    const region: string = c.region ?? "Unknown";
    const subregion: string = c.subregion ?? "";
    const continent = mapRegionToContinent(region, subregion);

    return {
      name,
      lat,
      lon,
      details: `${region} · Capital: ${capital}`,
      url: `/coverage/${continent}/${slugify(name)}`,
      continent,
    } as Country;
  })
  .filter(Boolean) as Country[];

function latLonToVector3(lat: number, lon: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

// --- 3D Globe Component (For Mobile/Tablet) ---
const InteractiveGlobe3D: React.FC<{
  pinpointCountry: Country | null;
}> = ({ pinpointCountry }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const pinpointMarkerRef = useRef<THREE.Sprite | null>(null);
  const earthMeshRef = useRef<THREE.Mesh | null>(null);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const sceneRef = useRef<THREE.Scene | null>(null); // Add scene reference

  // Create pinpoint marker
  const createPinpointMarker = (country: Country) => {
    const markerCanvas = document.createElement("canvas");
    markerCanvas.width = markerCanvas.height = 128;
    const ctx = markerCanvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, markerCanvas.width, markerCanvas.height);
      ctx.font = "100px system-ui, apple-color-emoji, Segoe UI Emoji, Noto Color Emoji";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("📍", markerCanvas.width / 2, markerCanvas.height / 2);
    }
    const markerTexture = new THREE.CanvasTexture(markerCanvas);
    const markerMaterial = new THREE.SpriteMaterial({
      map: markerTexture,
      transparent: true,
      depthWrite: false,
    });
    
    const sprite = new THREE.Sprite(markerMaterial);
    sprite.position.copy(latLonToVector3(country.lat, country.lon, 1.15));
    sprite.scale.setScalar(0.12);
    return sprite;
  };

  // Update pinpoint marker - FIXED ERROR
  useEffect(() => {
    // Don't proceed if scene isn't initialized yet
    if (!sceneRef.current || !cameraRef.current || !controlsRef.current) {
      
    }
    
    // Remove old pinpoint marker
    if (pinpointMarkerRef.current && pinpointMarkerRef.current.parent) {
      pinpointMarkerRef.current.parent.remove(pinpointMarkerRef.current);
      const material = pinpointMarkerRef.current.material as THREE.SpriteMaterial;
      material.map?.dispose();
      material.dispose();
      pinpointMarkerRef.current = null;
    }
    
    // Add new pinpoint marker if country is selected
    if (pinpointCountry) {
      
      const newMarker = createPinpointMarker(pinpointCountry);
      sceneRef.current.add(newMarker); // Use sceneRef instead of camera.parent
      pinpointMarkerRef.current = newMarker;
      
      // Fly to country
      const targetDistance = 4.5;
      const targetPosition = latLonToVector3(pinpointCountry.lat, pinpointCountry.lon, targetDistance);
      
      controlsRef.current.enableRotate = true;
      controlsRef.current.autoRotate = false;
      
      const startPosition = cameraRef.current.position.clone();
      const startTime = performance.now();
      const duration = 1500;
      
      const animateCamera = () => {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeProgress = 1 - Math.pow(1 - progress, 3);
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
  }, [pinpointCountry]);

  // Check if touch is on earth
  const isTouchOnEarth = (clientX: number, clientY: number): boolean => {
    if (!containerRef.current || !cameraRef.current || !earthMeshRef.current) return false;
    
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    
    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    const intersects = raycasterRef.current.intersectObject(earthMeshRef.current, true);
    
    return intersects.length > 0;
  };

  useEffect(() => {
    const mount = containerRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene; // Store scene reference
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5.5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.domElement.style.touchAction = "none";
    renderer.domElement.style.pointerEvents = "none";
    mount.appendChild(renderer.domElement);

    // Earth
    const loader = new THREE.TextureLoader();
    const earthTexture = loader.load(
      EARTH_TEXTURE,
      undefined,
      undefined,
    
    );
    
    const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.8,
      metalness: 0.2,
    });
    
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earthMeshRef.current = earth;
    scene.add(earth);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.rotateSpeed = 0.5;
    controls.enableDamping = true;
    controls.dampingFactor = 0.07;
    controls.autoRotate = false;
    controls.enableRotate = true;
    controls.minDistance = 2.5;
    controls.maxDistance = 8;
    (controls as any).enableTouch = false;
    controlsRef.current = controls;

    // Touch handling
    let isTouchingEarth = false;
    let isDragging = false;
    const DRAG_THRESHOLD = 5;
    
    const handleTouchStart = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      const touch = e.touches[0];
      
      isTouchingEarth = isTouchOnEarth(touch.clientX, touch.clientY);
      isDragging = false;
      
      if (isTouchingEarth) {
        e.preventDefault();
        controls.enableRotate = true;
      } else {
        controls.enableRotate = false;
      }
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      
      if (!isDragging) {
        isDragging = true;
        if (isTouchingEarth) {
          e.preventDefault();
        }
      } else if (isDragging && isTouchingEarth) {
        e.preventDefault();
      }
    };
    
    const handleTouchEnd = () => {
      isDragging = false;
      isTouchingEarth = false;
      controls.enableRotate = true;
    };
    
    mount.addEventListener('touchstart', handleTouchStart, { passive: false });
    mount.addEventListener('touchmove', handleTouchMove, { passive: false });
    mount.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mount || !camera || !renderer) return;
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeEventListener('touchstart', handleTouchStart);
      mount.removeEventListener('touchmove', handleTouchMove);
      mount.removeEventListener('touchend', handleTouchEnd);
      controls.dispose();
      earthTexture.dispose();
      earthMaterial.dispose();
      earthGeometry.dispose();
      if (pinpointMarkerRef.current) {
        const material = pinpointMarkerRef.current.material as THREE.SpriteMaterial;
        material.map?.dispose();
        material.dispose();
      }
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      // Clear refs on cleanup
      sceneRef.current = null;
      cameraRef.current = null;
      controlsRef.current = null;
      earthMeshRef.current = null;
      pinpointMarkerRef.current = null;
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full" style={{ touchAction: "pan-y" }} />
    
    
  );
};

// --- 2D Map Component (For Desktop/Laptop) ---
const InteractiveMap2D: React.FC<{
  pinpointCountry: Country | null;
}> = ({ pinpointCountry }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const navigate = useNavigate();

  const latLonToXY = (lat: number, lon: number, width: number, height: number) => {
    const x = ((lon + 180) / 360) * width;
    const y = ((90 - lat) / 180) * height;
    return { x, y };
  };

  const drawPin = (country: Country) => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;

    const rect = img.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);

    if (pinpointCountry) {
      const { x, y } = latLonToXY(pinpointCountry.lat, pinpointCountry.lon, rect.width, rect.height);
      const pinpointSize = Math.max(24, rect.width * 0.035);
      
      ctx.save();
      ctx.font = `${pinpointSize}px system-ui, Apple Color Emoji, Segoe UI Emoji`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("📍", x, y - pinpointSize * 0.3);
      ctx.restore();
    }
  };

  useEffect(() => {
    if (pinpointCountry) {
      drawPin(pinpointCountry);
    } else {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, [pinpointCountry]);

  useEffect(() => {
    const onResize = () => {
      if (pinpointCountry) {
        drawPin(pinpointCountry);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [pinpointCountry]);

  const handleMapClick = () => {
    if (pinpointCountry) {
      navigate(pinpointCountry.url);
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 cursor-pointer" onClick={handleMapClick}>
        <img
          ref={imgRef}
          src={MAP_IMAGE}
          alt="World Map"
          className="w-full h-full object-cover"
          onLoad={() => pinpointCountry && drawPin(pinpointCountry)}
        />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
        />
      </div>
      
    </div>
  );
};

// --- Main Component with PROPER SEARCH ---
export default function WorldGlobe(): JSX.Element {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Country[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [pinpointCountry, setPinpointCountry] = useState<Country | null>(null);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // SEARCH FUNCTION
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    
    if (query.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      setPinpointCountry(null);
      return;
    }
    
    const results = countries.filter(country =>
      country.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
    
    setSearchResults(results);
    setShowResults(true);
    
    // Auto-select after typing stops
    const timeout = setTimeout(() => {
      const exactMatch = countries.find(
        country => country.name.toLowerCase() === query.toLowerCase().trim()
      );
      if (exactMatch) {
        setPinpointCountry(exactMatch);
      } else if (results.length > 0) {
        setPinpointCountry(results[0]);
      }
    }, 500);
    
    setTypingTimeout(timeout);
  };

  const handleSelectCountry = (country: Country) => {
    setPinpointCountry(country);
    setSearchQuery(country.name);
    setShowResults(false);
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
      setPinpointCountry(null);
    }
  };

  const handleCountryLinkClick = (country: Country) => {
    navigate(country.url);
  };

  const clearPinpoint = () => {
    setPinpointCountry(null);
    setSearchQuery("");
    setShowResults(false);
    setSearchResults([]);
  };

  const getContinentDisplayName = (continent: string): string => {
    switch (continent) {
      case "asia": return "Asia";
      case "europe": return "Europe";
      case "africa": return "Africa";
      case "oceania": return "Oceania";
      case "north-america": return "North America";
      case "south-america": return "South America";
      default: return continent;
    }
  };

  return (
    <section className="relative w-full min-h-[100svh] bg-black text-white overflow-hidden">
      {/* SEARCH BAR */}
      <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 w-full max-w-xl px-4 z-50">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => searchQuery.trim() && setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
            placeholder="Search for a country..."
            className="w-full rounded-full bg-slate-900/80 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base outline-none border border-slate-700/50 pr-10"
          />
          
          {pinpointCountry && (
            <button
              onClick={clearPinpoint}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              title="Clear pinpoint"
            >
              ✕
            </button>
          )}
          
          {/* Search Results Dropdown */}
          {showResults && searchResults.length > 0 && (
            <div className="absolute mt-1 w-full rounded-xl bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 overflow-hidden max-h-60 overflow-y-auto">
              {searchResults.map((country, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-4 md:px-6 py-2 md:py-3 hover:bg-slate-800 border-b border-slate-800 last:border-b-0"
                  onClick={() => handleSelectCountry(country)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center">
                        <span className="mr-2">📍</span>
                        <h3 className="font-medium text-white truncate">{country.name}</h3>
                      </div>
                      <p className="text-xs text-gray-300 mt-0.5 truncate ml-6">
                        {getContinentDisplayName(country.continent)} • {country.details.split("·")[1]?.trim() || "N/A"}
                      </p>
                    </div>
                    <span className="text-xs text-sky-300 font-medium ml-2 whitespace-nowrap">
                      {pinpointCountry?.name === country.name ? "Pinned" : "Select"}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Interactive Area */}
      <div className="absolute inset-0">
        {isMobile ? (
          <InteractiveGlobe3D pinpointCountry={pinpointCountry} />
        ) : (
          <InteractiveMap2D pinpointCountry={pinpointCountry} />
        )}
      </div>

      {/* Selected Country Info */}
      {pinpointCountry && (
        <div className={`absolute ${isMobile ? 'bottom-16' : 'bottom-24'} left-1/2 transform -translate-x-1/2 bg-slate-900/80 backdrop-blur-sm border border-sky-600/30 rounded-lg px-4 py-3 text-center pointer-events-auto z-10 w-[90%] max-w-md`}>
          <div className="flex items-center justify-center mb-2">
            <span className="mr-2">📍</span>
            <h3 className="text-sm font-semibold text-white">{pinpointCountry.name}</h3>
          </div>
          <p className="text-xs text-gray-300 mb-2 truncate">
            {getContinentDisplayName(pinpointCountry.continent)} • {pinpointCountry.details.split("·")[1]?.trim() || "N/A"}
          </p>
          <button
            onClick={() => handleCountryLinkClick(pinpointCountry)}
            className="inline-block text-xs font-semibold text-sky-300 hover:text-sky-200 bg-sky-900/30 hover:bg-sky-800/40 px-4 py-2 rounded-lg transition-colors"
          >
            Visit {pinpointCountry.name} Page →
          </button>
        </div>
      )}

      {/* Instructions */}
      <p className="absolute bottom-3 md:bottom-5 w-full text-center text-xs text-gray-300/80 pointer-events-none px-4">
        {isMobile ? (
          <>Type country name above to pinpoint • Touch Earth to rotate • Touch space to scroll</>
        ) : (
          <>Type country name above to pinpoint • Click map to visit page</>
        )}
      </p>
      
    </section>
    
  );
}