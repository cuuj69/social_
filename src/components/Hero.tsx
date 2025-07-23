import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play, Award, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-purple-900/80 to-indigo-900/80 dark:from-dark-900/90 dark:via-dark-800/90 dark:to-dark-900/90">
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
        <img 
          src="/images.jpeg" 
          alt="Dr. Nyaho Nyaho-Tamakloe" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 dark:opacity-30"
        />
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-400 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400 rounded-full blur-2xl animate-bounce-slow"></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-indigo-400 rounded-full blur-3xl animate-float"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Dr. Nyaho
            <span className="block text-primary-300 dark:text-primary-200 bg-gradient-to-r from-primary-300 to-purple-300 bg-clip-text text-transparent">
              Nyaho-Tamakloe
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-4xl mx-auto leading-relaxed text-gray-100 dark:text-gray-200">
            Ghanaian Statesman • Football Administrator • Medical Doctor • 
            <span className="text-primary-300 dark:text-primary-200 font-semibold"> Founding Member of the New Patriotic Party</span>
          </p>
          
          {/* Achievement badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Award size={16} className="text-yellow-400" />
              <span className="text-sm font-medium">Distinguished Statesman</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Heart size={16} className="text-red-400" />
              <span className="text-sm font-medium">National Hero</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Play size={16} className="text-green-400" />
              <span className="text-sm font-medium">Sports Pioneer</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 text-sm sm:text-base">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-colors duration-200">
              Born: May 7, 1942
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-colors duration-200">
              Adabraka, Accra
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-colors duration-200">
              Charles University Graduate
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
        >
          <button
            onClick={scrollToTimeline}
            className="group flex items-center gap-3 mx-auto text-white hover:text-primary-300 transition-colors duration-300 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
          >
            <span className="text-lg font-medium">Discover His Story</span>
            <ChevronDown className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
          </button>
          
          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 text-white/60 text-sm">
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-4 h-4 bg-primary-400 rounded-full opacity-60 blur-sm"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-40 blur-sm"
      />
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-40 left-20 w-3 h-3 bg-indigo-400 rounded-full opacity-50 blur-sm"
      />
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-20 right-10 w-5 h-5 bg-yellow-400 rounded-full opacity-30 blur-sm"
      />
    </section>
  );
};

export default Hero; 