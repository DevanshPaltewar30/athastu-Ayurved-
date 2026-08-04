import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Facilities', to: 'treatments' },
  { name: 'Treatments', to: 'available-treatments' },
  { name: 'Gallery', to: 'gallery' },
  { name: 'Testimonials', to: 'testimonials' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = ({ onBookAppointment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/90 backdrop-blur-sm shadow-md py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center cursor-pointer"
        >
          <img src={logo} alt="तथास्तु Ayurveda" className="h-14 w-auto object-contain transition-all duration-300" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer font-medium text-text hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={onBookAppointment}
            className="cursor-pointer bg-primary text-white hover:bg-primary-dark px-6 py-2.5 rounded-full font-semibold transition-colors shadow-md"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${scrolled ? 'text-primary-dark' : 'text-primary-dark'}`}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center gap-4 md:hidden"
          >
            {navLinks.map((link) => (
               <Link
               key={link.to}
               to={link.to}
               spy={true}
               smooth={true}
               offset={-70}
               duration={500}
               onClick={() => setIsOpen(false)}
               className="cursor-pointer font-medium text-text hover:text-primary transition-colors w-full text-center py-2"
             >
               {link.name}
             </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                onBookAppointment();
              }}
              className="cursor-pointer bg-primary text-white hover:bg-primary-dark px-8 py-3 mt-2 rounded-full font-semibold transition-colors shadow-md w-full max-w-[200px]"
            >
              Book Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
