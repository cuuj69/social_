import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">
              Dr. Nyaho Nyaho-Tamakloe
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('timeline')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Story
            </button>
            <button
              onClick={() => scrollToSection('book')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Book
            </button>
            <button
              onClick={() => scrollToSection('social')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Connect
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('timeline')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Story
              </button>
              <button
                onClick={() => scrollToSection('book')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Book
              </button>
              <button
                onClick={() => scrollToSection('social')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Connect
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 