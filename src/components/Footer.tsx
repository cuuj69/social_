import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Dr. Nyaho Nyaho-Tamakloe</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A distinguished Ghanaian statesman, medical doctor, football administrator, and founding member 
              of the New Patriotic Party. Dr. Nyaho's life exemplifies dedication to service, leadership, 
              and the advancement of Ghana.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:contact@nyahotamakloe.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+233XXXXXXXX" className="text-gray-400 hover:text-white transition-colors">
                <Phone size={20} />
              </a>
              <a href="https://maps.google.com/?q=Accra,Ghana" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
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
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Life Story
                </a>
              </li>
              <li>
                <a 
                  href="#book" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Autobiography
                </a>
              </li>
              <li>
                <a 
                  href="#social" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('social')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Connect
                </a>
              </li>
              <li>
                <a href="mailto:contact@nyahotamakloe.com?subject=Speaking Engagement Request" className="text-gray-300 hover:text-white transition-colors">
                  Speaking Engagements
                </a>
              </li>
              <li>
                <a href="mailto:contact@nyahotamakloe.com?subject=Media Interview Request" className="text-gray-300 hover:text-white transition-colors">
                  Media Appearances
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@nyahotamakloe.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Dr. Nyaho Nyaho-Tamakloe. All rights reserved.
          </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
              <span className="flex items-center gap-1">
                Made with <Heart size={14} className="text-red-500" /> in Ghana
              </span>
            </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer; 