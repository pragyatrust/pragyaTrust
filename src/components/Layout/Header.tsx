import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User, LogIn } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' }
  ];

  const academyItems = [
    { name: 'Courses', path: '/courses' },
    { name: 'PITCs', path: '/pitcs' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isDropdownOpen && !(event.target as Element).closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleNavClick = () => {
    closeMenu();
    // Small delay to ensure route change happens first
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const isAcademyActive = location.pathname === '/courses' || location.pathname === '/pitcs';

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-soft-lg backdrop-blur-sm' 
        : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3"
            onClick={handleNavClick}
          >
            <img 
              src="/download.jpeg" 
              alt="Pragya Trust Logo"
              className="h-10 w-10 object-contain rounded-full"
              loading="eager"
            />
            <div className="text-xl font-heading font-bold text-navy-500">
              Pragya Trust
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-ochre-500 ${
                  location.pathname === item.path
                    ? 'text-ochre-500 border-b-2 border-ochre-500 pb-1'
                    : 'text-navy-500'
                }`}
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Pragya Academy Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-ochre-500 flex items-center ${
                  isAcademyActive
                    ? 'text-ochre-500 border-b-2 border-ochre-500 pb-1'
                    : 'text-navy-500'
                }`}
              >
                Pragya Academy
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-soft-lg border border-gray-200 py-2 z-50">
                  {academyItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={handleNavClick}
                      className={`block px-4 py-2 text-sm transition-colors duration-200 hover:bg-ochre-50 hover:text-ochre-500 ${
                        location.pathname === item.path
                          ? 'text-ochre-500 bg-ochre-50'
                          : 'text-navy-500'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Auth Section */}
            <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-gray-200">
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/dashboard"
                    className="flex items-center space-x-2 text-sm font-medium text-navy-500 hover:text-ochre-500 transition-colors duration-200"
                    onClick={handleNavClick}
                  >
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full" />
                    ) : (
                      <User size={16} />
                    )}
                    <span>{user.name}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-sm font-medium text-gray-600 hover:text-ochre-500 transition-colors duration-200"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex items-center space-x-1 text-sm font-medium text-navy-500 hover:text-ochre-500 transition-colors duration-200"
                    onClick={handleNavClick}
                  >
                    <LogIn size={16} />
                    <span>Sign In</span>
                  </Link>
                  <Link
                    to="/register"
                    className="bg-ochre-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-ochre-600 transition-colors duration-200"
                    onClick={handleNavClick}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Navigation - Auth + Menu */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Mobile Auth Buttons */}
            {user ? (
              <Link
                to="/dashboard"
                className="flex items-center space-x-1 text-sm font-medium text-navy-500 hover:text-ochre-500 transition-colors duration-200"
                onClick={handleNavClick}
              >
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full" />
                ) : (
                  <User size={16} />
                )}
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-medium text-navy-500 hover:text-ochre-500 transition-colors duration-200"
                  onClick={handleNavClick}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-ochre-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-ochre-600 transition-colors duration-200"
                  onClick={handleNavClick}
                >
                  Sign Up
                </Link>
              </>
            )}
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-navy-500 hover:text-ochre-500 focus:outline-none focus:ring-2 focus:ring-ochre-500"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen-half opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-6 bg-white border-t border-gray-200 mobile-nav-scroll overflow-y-auto">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block px-3 py-2 text-base font-medium rounded-xl transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-ochre-500 bg-ochre-50'
                      : 'text-navy-500 hover:text-ochre-500 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Pragya Academy Section */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Pragya Academy
                </div>
                {academyItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={handleNavClick}
                    className={`block px-3 py-2 text-base font-medium rounded-xl transition-colors duration-200 ml-2 ${
                      location.pathname === item.path
                        ? 'text-ochre-500 bg-ochre-50'
                        : 'text-navy-500 hover:text-ochre-500 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile User Menu */}
              {user && (
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Account
                  </div>
                  <Link
                    to="/dashboard"
                    onClick={handleNavClick}
                    className="block px-3 py-2 text-base font-medium rounded-xl transition-colors duration-200 text-navy-500 hover:text-ochre-500 hover:bg-gray-50 ml-2"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 text-base font-medium rounded-xl transition-colors duration-200 text-navy-500 hover:text-ochre-500 hover:bg-gray-50 ml-2 mt-2"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;