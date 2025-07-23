import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-dark-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Dr. Nyaho Nyaho-Tamakloe</h3>
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
              A distinguished Ghanaian statesman, medical doctor, football administrator, and founding member 
              of the New Patriotic Party. Dr. Nyaho's life exemplifies dedication to service, leadership, 
              and the advancement of Ghana.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:contact@nyahotamakloe.com" 
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800 dark:hover:bg-dark-800"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+233XXXXXXXX" 
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800 dark:hover:bg-dark-800"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
              <a 
                href="https://maps.google.com/?q=Accra,Ghana" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800 dark:hover:bg-dark-800"
                aria-label="Location"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#timeline" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span>Life Story</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#book" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span>Autobiography</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#social" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('social')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span>Connect</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@nyahotamakloe.com?subject=Speaking Engagement Request" 
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span>Speaking Engagements</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@nyahotamakloe.com?subject=Media Interview Request" 
                  className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span>Media Appearances</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary-400" />
                <span>contact@nyahotamakloe.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary-400" />
                <span>+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary-400" />
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 dark:text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Dr. Nyaho Nyaho-Tamakloe. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400 dark:text-gray-500">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
            {/* <span className="flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500 animate-pulse" /> in Ghana
            </span> */}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 shadow-glow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer; 