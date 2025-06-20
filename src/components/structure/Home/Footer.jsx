import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-green-800 to-green-600 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-lg mb-2">MMSU Merchandise</h3>
          <p>Official shop for quality university apparel and goods.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline hover:text-green-300">Home</a></li>
            <li><a href="/about" className="hover:underline hover:text-green-300">About</a></li>
            <li><a className="hover:underline hover:text-green-300">Account</a></li>
            <li><a className="hover:underline hover:text-green-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-2">Contact</h3>
          <p>
            Email: <a href="mailto:mmsumerch@univ.ph" className="hover:underline hover:text-green-300">mmsumerch@univ.ph</a>
          </p>
          <p>
            Phone: <a href="tel:+639123456789" className="hover:underline hover:text-green-300">+63 912 345 6789</a>
          </p>
          <p>
            Location: <a href="https://www.google.com/maps/search/?api=1&query=MMSU+Campus,+Ilocos+Norte" className="hover:underline">MMSU Campus, Ilocos Norte </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2 text-lg">
            <a
              href="https://www.facebook.com/MMSUofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/MMSU_official"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/mmsuofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/school/mariano-marcos-state-university/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-xs text-green-200">
        &copy; {new Date().getFullYear()} MMSU Merch. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
