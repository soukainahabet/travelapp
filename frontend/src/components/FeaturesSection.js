import React from 'react';
import '../styles/FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: "✈️",
      title: "Vols directs",
      description: "Accédez à des milliers de vols directs vers des destinations du monde entier."
    },
    {
      id: 2,
      icon: "🏨",
      title: "Hébergements premium",
      description: "Choisissez parmi une sélection d'hôtels et de resorts de qualité."
    },
    {
      id: 3,
      icon: "🌎",
      title: "Expériences uniques",
      description: "Découvrez des activités et expériences authentiques pour un voyage mémorable."
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2>Pourquoi choisir TravelApp?</h2>
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;