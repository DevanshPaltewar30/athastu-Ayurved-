import React from 'react';
import { Link } from 'react-scroll';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary-dark pt-20 pb-10 border-t-4 border-accent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex items-center mb-6 cursor-pointer"
            >
              <img src={logo} alt="तथास्तु Ayurveda" className="h-16 w-auto object-contain" />
            </Link>
            <p className="text-white/70 leading-relaxed mb-6">
              Experience the power of authentic Ayurveda. We provide personalized holistic healthcare solutions to help you achieve sustainable physical, mental, and spiritual well-being.
            </p>
            <div className="flex gap-4">
              <a href="https://linktr.ee/TathastuAyurved" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/tathastu_ayurved/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/@TathastuAyurved" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Facilities', 'Gallery', 'Testimonials', 'Contact'].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-white/70 hover:text-accent cursor-pointer transition-colors flex items-center gap-2"
                  >
                    <span className="text-accent text-xs">▹</span> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 font-serif">Our Facilities</h4>
            <ul className="space-y-3">
              {[
                'Panchakarma', 'Diabetes Management', 'Obesity Management', 
                'PCOD Care', 'Joint Pain', 'Spine Problems', 
                'Frozen Shoulder & Sciatica', 'Suvarnaprashan'
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to="treatments"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-white/70 hover:text-accent cursor-pointer transition-colors flex items-center gap-2"
                  >
                    <span className="text-accent text-xs">▹</span> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 font-serif">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <FaMapMarkerAlt className="text-accent mt-1 shrink-0" />
                <span>Behind Rama Bangles Store, Near Prajapita Brahmakumari Temple, Bhanapeth Ward, Kasturba Road, Chandrapur, Maharashtra 442402</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <FaPhoneAlt className="text-accent shrink-0" />
                <span>+91 9422839252</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <FaEnvelope className="text-accent shrink-0" />
                <span>tathastuayurved08@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>
            &copy; 2026 तथास्तु Ayurveda. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
