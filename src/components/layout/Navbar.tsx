import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-accent' : 'text-gray-300 hover:text-white';
  };

  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-bold text-xl">PixelPlay Studios</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/')}`}>
                  Home
                </Link>
                <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about')}`}>
                  About
                </Link>
                <Link to="/services" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/services')}`}>
                  Services
                </Link>
                <Link to="/portfolio" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/portfolio')}`}>
                  Portfolio
                </Link>
                <Link to="/blog" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/blog')}`}>
                  Blog
                </Link>
                <Link to="/esports" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/esports')}`}>
                  Esports
                </Link>
                <Link to="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/contact')}`}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              to="/join-us"
              className="inline-block bg-accent hover:bg-accent/90 py-2 px-4 rounded-md font-medium text-white shadow-md transition duration-300"
            >
              Join Us
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-secondary inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/')}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about')}`}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/services')}`}
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/portfolio')}`}
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/blog')}`}
          >
            Blog
          </Link>
          <Link
            to="/esports"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/esports')}`}
          >
            Esports
          </Link>
          <Link
            to="/contact"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact')}`}
          >
            Contact
          </Link>
          <Link
            to="/join-us"
            className="block px-3 py-2 rounded-md text-base font-medium bg-accent text-white mt-4"
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
