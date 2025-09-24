import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Left Section */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl font-bold text-cyan-500">
            GilgitBaltistanTours
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Discover the hidden beauty of Pakistan with expertly guided tours to
            Gilgit, Hunza, Skardu and more.
          </p>
        </div>

        {/* Right Section (Quick Links + Contact + Socials) */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-10 md:w-2/3 justify-center md:justify-end text-center md:text-left">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-cyan-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400">About</Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-cyan-400">Destinations</Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-cyan-400">Packages</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <p className="text-sm text-gray-300">
              Email: support@gilgitbaltistantours.com
            </p>
            <p className="text-sm text-gray-300 mt-1">Phone: +92 312 1234567</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="text-gray-300 hover:text-cyan-400 text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 text-xl">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} GilgitBaltistanTours. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
