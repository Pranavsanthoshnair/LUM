import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="100">
          <div>
            <h3 className="text-xl font-bold mb-4">PixelPlay Studios</h3>
            <p className="text-gray-300 mb-4">Bringing your creative vision to life through innovative media solutions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white">Portfolio</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/live-streaming" className="text-gray-300 hover:text-white">Live Streaming</Link></li>
              <li><Link to="/services/media-production" className="text-gray-300 hover:text-white">Media Production</Link></li>
              <li><Link to="/services/digital-marketing" className="text-gray-300 hover:text-white">Digital Marketing</Link></li>
              <li><Link to="/services/event-management" className="text-gray-300 hover:text-white">Event Management</Link></li>
              <li><Link to="/esports" className="text-gray-300 hover:text-white">Esports Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">123 Studio Way</p>
              <p className="mb-2">Creative District, CA 90210</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p className="mb-2">Email: info@pixelplaystudios.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400" data-aos="fade-up" data-aos-delay="200">
          <p>&copy; {new Date().getFullYear()} PixelPlay Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
