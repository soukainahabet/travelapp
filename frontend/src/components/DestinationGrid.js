import React from 'react';
import '../styles/DestinationGrid.css';

const DestinationGrid = () => {
  // Données factices pour les destinations avec URLs corrigées
  const destinations = [
    {
      id: 1,
      name: "Paris, France",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
      price: "€599",
      rating: 4.8,
      reviews: 128,
      days: "7 jours"
    },
    {
      id: 2,
      name: "Bali, Indonésie",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      price: "€899",
      rating: 4.9,
      reviews: 245,
      days: "10 jours"
    },
    {
      id: 3,
      name: "New York, USA",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      price: "€799",
      rating: 4.7,
      reviews: 189,
      days: "8 jours"
    },
    {
      id: 4,
      name: "Tokyo, Japon",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
      price: "€1099",
      rating: 4.9,
      reviews: 312,
      days: "12 jours"
    },
    {
      id: 5,
      name: "Santorini, Grèce",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FudG9yaW5pfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
      price: "€949",
      rating: 4.8,
      reviews: 176,
      days: "9 jours"
    },
    {
      id: 6,
      name: "Bora Bora, Polynésie",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9yYSUyMGJvcmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
      price: "€1299",
      rating: 4.9,
      reviews: 298,
      days: "14 jours"
    },
    {
      id: 7,
      name: "Barcelone, Espagne",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyY2Vsb25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
      price: "€699",
      rating: 4.6,
      reviews: 154,
      days: "6 jours"
    },
    {
      id: 8,
      name: "Maldives",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
      price: "€1199",
      rating: 4.9,
      reviews: 267,
      days: "11 jours"
    }
  ];

  // Fonction pour gérer les erreurs de chargement d'image
  const handleImageError = (e) => {
    console.error(`Image failed to load: ${e.target.src}`);
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWNmMGYxIi8+CiAgPGNpcmNsZSBjeD0iMjUwIiBjeT0iMTI1IiByPSI0MCIgZmlsbD0iIzM0OThkYiIvPgogIDx0ZXh0IHg9IjI1MCIgeT0iMTM1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuKIuzwvdGV4dD4KICA8dGV4dCB4PSIyNTAiIHk9IjE4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjN2Y4YzhkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZSBub3QgYXZhaWxhYmxlPC90ZXh0Pgo8L3N2Zz4=';
    e.target.alt = 'Image non disponible';
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star">⯨</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }

    return stars;
  };

  return (
    <section className="destinations-section">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-duration="800">Destinations populaires</h2>
        <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" className="section-subtitle">
          Découvrez nos destinations les plus prisées par les voyageurs
        </p>

        <div className="destinations-grid">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="destination-card"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={300 + (index * 100)}
            >
              <div className="destination-image">
                <img
                  src={destination.image}
                  alt={destination.name}
                  onError={handleImageError}
                  loading="lazy"
                  className="destination-img"
                />
                <div className="destination-price">{destination.price}</div>
                <div className="destination-days">{destination.days}</div>
                <div className="destination-overlay">
                  <button className="view-details-btn">Voir détails</button>
                </div>
              </div>

              <div className="destination-info">
                <h3>{destination.name}</h3>

                <div className="destination-rating">
                  <div className="stars">
                    {renderStars(destination.rating)}
                    <span className="rating-number">{destination.rating}</span>
                  </div>
                  <span className="reviews">({destination.reviews} avis)</span>
                </div>

                <div className="destination-features">
                  <span className="feature">✈️ Vol inclus</span>
                  <span className="feature">🏨 Hôtel 4*</span>
                </div>

                <button className="book-now-btn">
                  Réserver maintenant
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
          <button className="btn-primary">Voir toutes les destinations</button>
        </div>
      </div>
    </section>
  );
};

export default DestinationGrid;