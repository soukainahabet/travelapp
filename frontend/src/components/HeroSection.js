import React, { useState, useEffect } from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const backgrounds = [
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section className="hero" id="home">
      <div className="hero-backgrounds">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`hero-bg ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        ))}
      </div>

      <div className="hero-content">
        <h1 data-aos="fade-down" data-aos-duration="1000">Découvrez le Monde</h1>
        <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
          Explorez des destinations extraordinaires, créez des souvenirs inoubliables et vivez des aventures uniques avec TravelApp.
        </p>
        <div className="hero-buttons" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <button className="btn-primary">Commencer l'aventure</button>
          <button className="btn-secondary">Voir destinations</button>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <p>Scroll pour découvrir</p>
      </div>
    </section>
  );
};

export default HeroSection;