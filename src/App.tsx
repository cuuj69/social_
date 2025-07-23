import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import BookSection from './components/BookSection';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Timeline />
      <BookSection />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
