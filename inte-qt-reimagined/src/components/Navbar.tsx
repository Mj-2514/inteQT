import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Coverage", path: "/coverage" },
    { name: "Services", path: "/services" },
    { name: "Partner Center", path: "/partner-center" },
    { name: "Cases", path: "/cases" },
    { name: "Events", path: "/events" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center group"> <img
  src={theme === "dark" ? "/logo1.png" : "/logo-dark.png"}
  alt="inte-QT"
  className="w-13 h-12 object-contain transition-transform group-hover:scale-105"
/>
 </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild className="gradient-primary shadow-glow">
              <Link to="/contact">Contact Us</Link>
            </Button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border hover:bg-muted transition-colors"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      {open && (
        <div className="fixed inset-0 z-[70]">
          {/* Dark Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute top-0 right-0 h-full w-72 bg-background shadow-2xl p-6 animate-slide-left flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <img src="/inte-QT.png" className="w-12 h-10" />
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-md hover:bg-muted"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Button asChild className="gradient-primary w-full mt-4">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Contact Us
                </Link>
              </Button>

              <button
                onClick={() => {
                  toggleTheme();
                  setOpen(false);
                }}
                className="flex items-center justify-center px-4 py-3 rounded-md border text-sm mt-4"
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
