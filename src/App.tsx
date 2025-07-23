import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import BookSection from './components/BookSection';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navigation />
        <Hero />
        <Timeline />
        <BookSection />
        <SocialMedia />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
