// src/components/Navbar.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";

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
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  /* ---------------- Scroll detection ---------------- */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- Close drawer on route change ---------------- */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* ---------------- Lock background scroll (iOS safe) ---------------- */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* ---------------- Escape to close ---------------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ---------------- Hero logic ---------------- */
  const isHomeHeroVisible = location.pathname === "/" && !isScrolled;
  const isPrivacyPolicy = location.pathname === "/privacy-policy" && !isScrolled;

  const logoSrc = (() => {
    if (isHomeHeroVisible || isPrivacyPolicy) return "/logo1.png";
    return theme === "dark" ? "/logo1.png" : "/logo-dark.png";
  })();
const isHomeTop =
  location.pathname === "/" && window.scrollY < 20;

const navbarBgClass =
  isHomeTop
    ? "bg-black/0" // visually transparent but NOT bg-transparent
    : theme === "dark"
      ? "bg-[#0b0f19] shadow-md"
      : "bg-white shadow-md";

const navTextClass =
  isHomeTop ? "text-white" : "text-foreground";

  return (
    <nav
  className={`fixed top-0 left-0 right-0 z-[110]
              transition-colors duration-300
              ${navbarBgClass}`}
  role="navigation"
  aria-label="Main navigation"
>



      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" aria-label="inte-QT home">
            <img
              src={logoSrc}
              alt="inte-QT"
              className="w-13 h-12 object-contain transition-transform hover:scale-105"
              onError={(e) =>
                ((e.currentTarget as HTMLImageElement).src = "/logo.png")
              }
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isHomeHeroVisible
                    ? `px-4 py-2 rounded-md text-sm font-medium ${
                        isActive
                          ? "text-white bg-white/10"
                          : "text-white/90 hover:text-white"
                      }`
                    : `px-4 py-2 rounded-md text-sm font-medium ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary"
                      }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild className="gradient-primary shadow-glow">
              <Link to="/contact">Contact Us</Link>
            </Button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-full border transition-colors ${
                isHomeHeroVisible
                  ? "border-white/20 bg-black/20 text-white hover:bg-black/30"
                  : "hover:bg-muted"
              }`}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((p) => !p)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden z-[120] relative flex items-center justify-center
                       w-11 h-11 rounded-full text-current
                       touch-manipulation select-none"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-all ${
                  open ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-all ${
                  open ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-20 z-[105] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-background shadow-2xl p-6
                      transition-transform duration-300 ${
                        open ? "translate-x-0" : "translate-x-full"
                      }`}
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-sm font-medium ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Button asChild className="gradient-primary mt-4">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Contact Us
              </Link>
            </Button>

            <button
              onClick={() => {
                toggleTheme();
                setOpen(false);
              }}
              className="mt-4 flex items-center justify-center px-4 py-3 rounded-md border text-sm hover:bg-muted"
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
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
