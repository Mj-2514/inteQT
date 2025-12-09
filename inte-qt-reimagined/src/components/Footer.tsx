import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Wifi, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
  <footer className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <Wifi className="w-8 h-8" /> */}
              <img
      src="/logo1.png"
      alt="inte-QT"
      className="w-13 h-12 object-contain transition-transform group-hover:scale-105"
    />
            </div>
            <p className="text-sm opacity-90 mb-4">
              Your Global Access Enabler in 190+ Countries
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/bitsandbyteglobal/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/BITSBYTEGLOBAL"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/inte_qt/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/inte_qt/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/global-nsoc" className="text-sm opacity-90 hover:text-secondary transition-colors">
                  Global NSOC
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm opacity-90 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/partner-center" className="text-sm opacity-90 hover:text-secondary transition-colors">
                  Partner Center
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-sm opacity-90 hover:text-secondary transition-colors">
                  Cases
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/events" className="text-sm opacity-90 hover:text-secondary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-sm opacity-90 hover:text-secondary transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <a href="/privacy-policy" className="text-sm opacity-90 hover:text-secondary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-90 hover:text-secondary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm opacity-90">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@inte-qt.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm opacity-90">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-sm opacity-90">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Global Headquarters<br />Technology Park, Suite 100</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-90">
            © {currentYear} inte-QT. All rights reserved. Managed L3 Internet Global Services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
