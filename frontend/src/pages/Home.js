import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import SearchSection from '../components/SearchSection';
import DestinationGrid from '../components/DestinationGrid';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="home-page">
      <Navigation />
      <HeroSection />
      <SearchSection />
      <DestinationGrid />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Home;