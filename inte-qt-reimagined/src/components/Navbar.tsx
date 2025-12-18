// src/components/Navbar.tsx
import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
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

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
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
      setTimeout(() => firstLinkRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
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
    

  // Logo selection: prefer explicit hero logo when on home top
  const logoSrc = (() => {
    if (isHomeHeroVisible) return "/logo1.png"; // ensure you have this asset
     
     if (isPrivacyPolicy) return "/logo1.png";
     
    // fallback by theme
    return theme === "dark" ? "/logo1.png" : "/logo-dark.png";
  })();

  // Utility for NavLink classes (keeps your existing look, but adapts for hero)
  const navLinkClass = (isActive: boolean) => {
    if (isHomeHeroVisible) {
      // light-on-dark variant
      return `px-4 py-2 rounded-md text-sm font-medium transition-all ${
        isActive ? "text-white bg-white/10" : "text-white/95 hover:text-white"
      }`;
    }
    // normal site variant
    return `px-4 py-2 rounded-md text-sm font-medium transition-all ${
      isActive ? "text-primary bg-primary/10" : "text-foreground hover:text-primary"
    }`;
  };

  // Contact button variant when on hero: lighten border/text accordingly
  const contactBtnClass = isHomeHeroVisible
    ? "gradient-primary shadow-glow text-white"
    : "gradient-primary shadow-glow";

  // Theme toggle button variant for visibility
  const themeToggleClass = isHomeHeroVisible
    ? "p-2 rounded-full border border-white/20 bg-black/20 text-white hover:bg-black/30 transition-colors"
    : "p-2 rounded-full border hover:bg-muted transition-colors";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
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
                // fallback if file not found
                (e.currentTarget as HTMLImageElement).src = "/logo.png";
              }}
              alt="inte-QT logo"
              className="w-13 h-12 object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.path} to={link.path} className={({ isActive }) => navLinkClass(isActive)}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild className={contactBtnClass}>
              <Link to="/contact">Contact Us</Link>
            </Button>

            <button
              onClick={toggleTheme}
              className={themeToggleClass}
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
          >
            <Menu className={`w-6 h-6 ${isHomeHeroVisible ? "text-white" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[70]" aria-hidden={false}>
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* drawer */}
          <div
            id="mobile-drawer"
            ref={drawerRef}
            className="absolute top-0 right-0 h-full w-72 bg-background shadow-2xl p-6 animate-slide-left flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="flex items-center justify-between mb-6">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
                <img src={logoSrc} alt="inte-QT" className="w-12 h-10 object-contain" />
              </Link>

              <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-muted" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
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
                        isActive ? (isHomeHeroVisible ? "text-white bg-white/10" : "text-primary bg-primary/10") : (isHomeHeroVisible ? "text-white" : "text-foreground hover:text-primary")
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
                  className="flex items-center justify-center px-4 py-3 rounded-md border text-sm mt-4"
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
      )}
    </nav>
  );
};

export default Navbar;
