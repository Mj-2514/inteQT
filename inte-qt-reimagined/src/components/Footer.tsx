import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer
      className="
        relative overflow-hidden
        bg-gradient-to-br
        from-[#0b2a3f]
        via-[#0f4c75]
        to-[#1b6ca8]
        text-white
      "
    >
      

      <div className="relative container mx-auto px-6 lg:px-12 py-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div>
            <img
              src={theme === "dark" ? "/logo1.png" : "/logo-dark.png"}
              alt="inte-QT"
              className="w-32 h-auto mb-4"
            />

            <p className="text-sm opacity-90 mb-6">
              Your Global Access Enabler in 190+ Countries
            </p>

            {/* Social Icons — FIXED */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/bitsandbyteglobal/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="https://twitter.com/BITSBYTEGLOBAL"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition"
              >
                <Twitter className="w-6 h-6" />
              </a>

              <a
                href="https://www.instagram.com/inte_qt/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition"
              >
                <Instagram className="w-6 h-6" />
              </a>

              <a
                href="https://www.facebook.com/intelligentquotingtechnology/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link to="/global-nsoc" className="hover:text-yellow-300 transition">
                  Global NSOC
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-yellow-300 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/partner-center" className="hover:text-yellow-300 transition">
                  Partner Center
                </Link>
              </li>
              <li>
                <Link to="/cases" className="hover:text-yellow-300 transition">
                  Cases
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link to="/events" className="hover:text-yellow-300 transition">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-yellow-300 transition">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-yellow-300 transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-1" />
                <span>info@inte-qt.com</span>
              </li>

              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-1" />
                <span>+1 (555) 123-4567</span>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1" />
                <span>
                  Global Headquarters <br />
                  Technology Park, Suite 100
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/25 pt-8 text-center">
          <p className="text-sm opacity-90">
            © {currentYear} inte-QT. All rights reserved. Managed L3 Internet Global Services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
