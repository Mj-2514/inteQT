// src/components/Navbar.tsx
import React, { useEffect, useState, useRef } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";

/**
 * Accessible, responsive navbar with heroic-page visibility fix:
 * - If we're on home ("/") and user is at top (not scrolled) then
 *   the navbar forces a light-on-dark style so it's readable on a dark hero.
 */

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Coverage", path: "/coverage" },
  { name: "Services", path: "/services" },
  { name: "Partner Center", path: "/partner-center" },
  { name: "Cases", path: "/cases" },
  { name: "Events", path: "/events" },
  { name: "Blogs", path: "/blogs" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      lastScrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial check
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      setTimeout(() => firstLinkRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      // Refocus on menu button when drawer closes
      setTimeout(() => menuButtonRef.current?.focus(), 50);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // When true, navbar should render as light-on-dark (white text + light logo)
  const isHomeHeroVisible = location.pathname === "/" && !isScrolled;
  
  const isPrivacyPolicy = location.pathname === "/privacy-policy" && !isScrolled;
    
  // Logo selection
  const logoSrc = (() => {
    if (isHomeHeroVisible) return "/logo1.png";
    if (isPrivacyPolicy) return "/logo1.png";
    return theme === "dark" ? "/logo1.png" : "/logo-dark.png";
  })();

  // Determine icon color for mobile menu button
  const getMenuIconColor = () => {
    if (isHomeHeroVisible) return "text-white";
    if (isScrolled) {
      return theme === "dark" ? "text-white" : "text-gray-900";
    }
    return theme === "dark" ? "text-white" : "text-gray-900";
  };

  // Force re-render on scroll to ensure button is clickable
  useEffect(() => {
    // This forces re-render when scroll position changes
    const forceUpdate = () => {
      // Just accessing the state to force re-render
      setIsScrolled(prev => prev);
    };
    
    window.addEventListener('scroll', forceUpdate);
    return () => window.removeEventListener('scroll', forceUpdate);
  }, []);

  // Handle menu button click - with better event handling
  const handleMenuClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setOpen(prev => {
      
      return !prev;
    });
  };

  // Add this to ensure the button is always clickable
  useEffect(() => {
    if (menuButtonRef.current) {
      // Add touch event listeners directly to ensure they work
      const button = menuButtonRef.current;
      const handleTouchStart = (e: TouchEvent) => {
        e.stopPropagation();
        
      };
      
      const handleTouchEnd = (e: TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        
        setOpen(prev => !prev);
      };

      button.addEventListener('touchstart', handleTouchStart, { passive: true });
      button.addEventListener('touchend', handleTouchEnd, { passive: false });

      return () => {
        button.removeEventListener('touchstart', handleTouchStart);
        button.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, []);

  return (
    <>
      {/* Debug overlay - shows when button should be clickable */}
      <div 
        className="lg:hidden fixed top-0 right-0 w-16 h-16 bg-red-500/10 z-[9999] pointer-events-none"
        style={{ display: isScrolled ? '' : 'none' }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-xl shadow-md" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group" aria-label="inte-QT home">
              <img
                src={logoSrc}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/logo.png";
                }}
                alt="inte-QT logo"
                className="w-13 h-12 object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.path} to={link.path} className={({ isActive }) => 
                  isHomeHeroVisible 
                    ? `px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        isActive ? "text-white bg-white/10" : "text-white/95 hover:text-white"
                      }`
                    : `px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        isActive ? "text-primary bg-primary/10" : "text-foreground hover:text-primary"
                      }`
                }>
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button asChild className={isHomeHeroVisible ? "gradient-primary shadow-glow text-white" : "gradient-primary shadow-glow"}>
                <Link to="/contact">Contact Us</Link>
              </Button>

              <button
                onClick={toggleTheme}
                className={isHomeHeroVisible 
                  ? "p-2 rounded-full border border-white/20 bg-black/20 text-white hover:bg-black/30 transition-colors"
                  : "p-2 rounded-full border hover:bg-muted transition-colors"
                }
                aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile menu button - CRITICAL FIX */}
            <button
  ref={menuButtonRef}
  onClick={handleMenuClick}
  className="lg:hidden relative z-[101] flex items-center justify-center
             w-11 h-11 rounded-full
             bg-transparent
             hover:bg-transparent
             active:bg-transparent
             focus:bg-transparent
             focus:outline-none
             focus:ring-0
             focus-visible:ring-0"
  style={{
    WebkitTapHighlightColor: "transparent",
  }}
  aria-label={open ? "Close menu" : "Open menu"}
>

              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
  <span
    className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transform transition-all duration-300 ${
      open ? "rotate-45" : "-translate-y-2"
    }`}
  />
  <span
    className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-all duration-300 ${
      open ? "opacity-0" : ""
    }`}
  />
  <span
    className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transform transition-all duration-300 ${
      open ? "-rotate-45" : "translate-y-2"
    }`}
  />
</div>


            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed top-20 left-0 right-0 bottom-0 z-[105] transition-opacity duration-300 ${
            open 
              ? "opacity-100 pointer-events-auto" 
              : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!open}
        >
          {/* overlay */}
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm ${
              open ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* drawer */}
          <div
            id="mobile-drawer"
            ref={drawerRef}
            className={`absolute top-0 right-0 h-full w-72 bg-background shadow-2xl p-6 transition-transform duration-300 ease-out flex flex-col ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="flex items-center justify-between mb-6">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
                <img 
                  src={theme === "dark" ? "/logo1.png" : "/logo-dark.png"} 
                  alt="inte-QT" 
                  className="w-12 h-10 object-contain" 
                />
              </Link>

              
            </div>

            <nav className="flex-1 overflow-auto" aria-label="Mobile primary">
              <div className="flex flex-col space-y-2">
                {NAV_LINKS.map((link, idx) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-md text-sm font-medium transition-all ${
                        isActive ? "text-primary bg-primary/10" : "text-foreground hover:text-primary"
                      }`
                    }
                    ref={idx === 0 ? firstLinkRef : undefined}
                  >
                    {link.name}
                  </NavLink>
                ))}

                <div className="mt-4">
                  <Button asChild className="gradient-primary w-full">
                    <Link to="/contact" onClick={() => setOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>

                <button
                  onClick={() => {
                    toggleTheme();
                    setOpen(false);
                  }}
                  className="flex items-center justify-center px-4 py-3 rounded-md border text-sm mt-4 hover:bg-muted transition-colors"
                  aria-label="Toggle theme and close menu"
                >
                  {theme === "light" ? (
                    <>
                      <Moon className="w-5 h-5 mr-2" /> Dark Mode
                    </>
                  ) : (
                    <>
                      <Sun className="w-5 h-5 mr-2" /> Light Mode
                    </>
                  )}
                </button>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;