import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-indigo-900/80">
        <div className="absolute inset-0 bg-black/30"></div>
        <img 
          src="/images.jpeg" 
          alt="Dr. Nyaho Nyaho-Tamakloe" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Dr. Nyaho
            <span className="block text-blue-300">Nyaho-Tamakloe</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Ghanaian Statesman • Football Administrator • Medical Doctor • 
            <span className="text-blue-300"> Founding Member of the New Patriotic Party</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              Born: May 7, 1942
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              Adabraka, Accra
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              Charles University Graduate
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <button
            onClick={scrollToTimeline}
            className="group flex items-center gap-2 mx-auto text-white hover:text-blue-300 transition-colors"
          >
            <span className="text-lg">Discover His Story</span>
            <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
          </button>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-40"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-40 left-20 w-3 h-3 bg-indigo-400 rounded-full opacity-50"
      />
    </section>
  );
};

export default Hero; 