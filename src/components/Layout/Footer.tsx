import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-500 text-white">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center space-x-3 mb-4">
              <img 
                src="/download.jpeg" 
                alt="Pragya Trust Logo"
                className="h-8 w-8 object-contain rounded-full"
              />
              <div className="text-xl font-heading font-bold text-ochre-500">
                Pragya Trust
              </div>
            </Link>
            <p className="text-gray-300 mb-4 leading-relaxed italic">
              "Let noble thoughts come to us from all sides."
            </p>
            <p className="text-sm text-gray-400 mb-6">
              Exploring consciousness and its practical application within the framework of Sanatan Hindu Dharma.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://youtube.com/@pragyatrust"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-ochre-500 transition-colors duration-200"
                aria-label="YouTube Channel"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.facebook.com/PragyaTrust"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-ochre-500 transition-colors duration-200"
                aria-label="Facebook Page"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/pragyatrust/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-ochre-500 transition-colors duration-200"
                aria-label="Instagram Profile"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-ochre-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-ochre-500 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-ochre-500 mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-ochre-500 transition-colors duration-200 text-sm"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-gray-300 hover:text-ochre-500 transition-colors duration-200 text-sm"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-300 hover:text-ochre-500 transition-colors duration-200 text-sm"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-ochre-500 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-ochre-500 transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="text-gray-300 hover:text-ochre-500 transition-colors duration-200 text-sm"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-conditions"
                  className="text-gray-300 hover:text-ochre-500 transition-colors duration-200 text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-ochre-500 mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-ochre-500 mt-1 flex-shrink-0" />
                <a
                  href="tel:+919955547065"
                  className="text-gray-300 hover:text-ochre-500 transition-colors duration-200 text-sm"
                >
                  +91 9955547065
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-ochre-500 mt-1 flex-shrink-0" />
                <a
                  href="mailto:pragyatrust108@gmail.com"
                  className="text-gray-300 hover:text-ochre-500 transition-colors duration-200 text-sm break-all"
                >
                  pragyatrust108@gmail.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-ochre-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Mahamanapuri Colony, Karaundi,<br />
                  Varanasi, 221005, U.P (India)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-navy-400 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Pragya Trust — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;