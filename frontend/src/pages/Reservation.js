import React, { useState } from 'react';
import '../styles/Reservation.css';

// Icônes SVG intégrées
const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const PlaneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 2L11 13"></path>
    <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
  </svg>
);

const HotelIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path>
    <path d="M9 22V12h6v10"></path>
    <path d="M10 6h4"></path>
    <path d="M12 2v4"></path>
  </svg>
);

const CarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"></path>
    <circle cx="6.5" cy="16.5" r="1.5"></circle>
    <circle cx="16.5" cy="16.5" r="1.5"></circle>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const CreditCardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
  </svg>
);

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const FilterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

const Reservation = () => {
  const [searchData, setSearchData] = useState({
    destination: 'Paris, France',
    departureDate: '2025-09-15',
    returnDate: '2025-09-22',
    travelers: 2,
    tripType: 'roundtrip'
  });

  const [activeTab, setActiveTab] = useState('flights');
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showBookingSummary, setShowBookingSummary] = useState(false);

  const flights = [
    {
      id: 1,
      airline: 'Air France',
      departure: '08:30',
      arrival: '11:45',
      duration: '3h 15m',
      price: 289,
      stops: 'Direct',
      aircraft: 'Airbus A320'
    },
    {
      id: 2,
      airline: 'Lufthansa',
      departure: '14:20',
      arrival: '17:50',
      duration: '3h 30m',
      price: 245,
      stops: 'Direct',
      aircraft: 'Boeing 737'
    }
  ];

  const hotels = [
    {
      id: 1,
      name: 'Hôtel des Invalides',
      rating: 4.8,
      reviews: 1250,
      price: 180,
      amenities: ['WiFi', 'Petit-déjeuner', 'Spa', 'Piscine'],
      location: 'Centre de Paris'
    },
    {
      id: 2,
      name: 'Le Marais Boutique',
      rating: 4.6,
      reviews: 890,
      price: 150,
      amenities: ['WiFi', 'Restaurant', 'Bar', 'Concierge'],
      location: 'Le Marais'
    }
  ];

  const handleBooking = () => {
    if (selectedFlight && selectedHotel) {
      setShowBookingSummary(true);
    }
  };

  const totalPrice = (selectedFlight?.price || 0) + (selectedHotel?.price || 0) * 7;

  if (showBookingSummary) {
    return (
      <div className="reservation-success-container">
        <div className="reservation-success-card">
          <div className="success-icon-container">
            <CheckIcon />
          </div>
          <h1 className="success-title">Réservation confirmée !</h1>
          <p className="success-message">Votre voyage à {searchData.destination} est confirmé.</p>

          <div className="booking-details">
            <h3>Détails de votre réservation</h3>
            <div className="details-content">
              <div className="detail-item">
                <span>Vol {selectedFlight?.airline}</span>
                <span className="price">{selectedFlight?.price}€</span>
              </div>
              <div className="detail-item">
                <span>Hôtel {selectedHotel?.name} (7 nuits)</span>
                <span className="price">{selectedHotel?.price * 7}€</span>
              </div>
              <div className="detail-item total">
                <span>Total</span>
                <span className="price">{totalPrice}€</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setShowBookingSummary(false);
              setSelectedFlight(null);
              setSelectedHotel(null);
            }}
            className="new-search-btn"
          >
            Nouvelle recherche
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="reservation-page">
      {/* Le header est maintenant géré par le composant Navigation */}

      <div className="reservation-container">
        {/* Search Bar */}
        <div className="search-card">
          <div className="search-grid">
            <div className="search-field">
              <label>Destination</label>
              <div className="input-with-icon">
                <MapPinIcon />
                <input
                  type="text"
                  value={searchData.destination}
                  onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                  className="search-input"
                />
              </div>
            </div>

            <div className="search-field">
              <label>Départ</label>
              <div className="input-with-icon">
                <CalendarIcon />
                <input
                  type="date"
                  value={searchData.departureDate}
                  onChange={(e) => setSearchData({...searchData, departureDate: e.target.value})}
                  className="search-input"
                />
              </div>
            </div>

            <div className="search-field">
              <label>Retour</label>
              <div className="input-with-icon">
                <CalendarIcon />
                <input
                  type="date"
                  value={searchData.returnDate}
                  onChange={(e) => setSearchData({...searchData, returnDate: e.target.value})}
                  className="search-input"
                />
              </div>
            </div>

            <div className="search-field">
              <label>Voyageurs</label>
              <div className="input-with-icon">
                <UsersIcon />
                <select
                  value={searchData.travelers}
                  onChange={(e) => setSearchData({...searchData, travelers: parseInt(e.target.value)})}
                  className="search-input"
                >
                  <option value={1}>1 voyageur</option>
                  <option value={2}>2 voyageurs</option>
                  <option value={3}>3 voyageurs</option>
                  <option value={4}>4 voyageurs</option>
                </select>
              </div>
            </div>

            <button className="search-btn">
              Rechercher
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          <button
            onClick={() => setActiveTab('flights')}
            className={`tab-btn ${activeTab === 'flights' ? 'active' : ''}`}
          >
            <PlaneIcon />
            <span>Vols</span>
          </button>
          <button
            onClick={() => setActiveTab('hotels')}
            className={`tab-btn ${activeTab === 'hotels' ? 'active' : ''}`}
          >
            <HotelIcon />
            <span>Hôtels</span>
          </button>
          <button
            onClick={() => setActiveTab('cars')}
            className={`tab-btn ${activeTab === 'cars' ? 'active' : ''}`}
          >
            <CarIcon />
            <span>Voitures</span>
          </button>
        </div>

        <div className="reservation-content">
          {/* Main Content */}
          <div className="main-content">
            {activeTab === 'flights' && (
              <div className="flights-container">
                <div className="section-header">
                  <h2>Vols disponibles</h2>
                  <button className="filter-btn">
                    <FilterIcon />
                    <span>Filtrer</span>
                  </button>
                </div>

                {flights.map((flight) => (
                  <div
                    key={flight.id}
                    className={`flight-card ${selectedFlight?.id === flight.id ? 'selected' : ''}`}
                    onClick={() => setSelectedFlight(flight)}
                  >
                    <div className="flight-content">
                      <div className="flight-info">
                        <div className="airline-logo">
                          <PlaneIcon />
                        </div>
                        <div className="airline-details">
                          <h3>{flight.airline}</h3>
                          <p>{flight.aircraft}</p>
                        </div>
                      </div>

                      <div className="flight-schedule">
                        <div className="time-block">
                          <p className="time">{flight.departure}</p>
                          <p className="airport">CDG</p>
                        </div>

                        <div className="flight-path">
                          <div className="path-dots">
                            <div className="dot"></div>
                            <div className="line"></div>
                            <PlaneIcon />
                            <div className="line"></div>
                            <div className="dot"></div>
                          </div>
                          <p className="duration">{flight.duration}</p>
                          <p className="stops">{flight.stops}</p>
                        </div>

                        <div className="time-block">
                          <p className="time">{flight.arrival}</p>
                          <p className="airport">ORY</p>
                        </div>

                        <div className="flight-price">
                          <p className="price">{flight.price}€</p>
                          <p className="price-label">par personne</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'hotels' && (
              <div className="hotels-container">
                <div className="section-header">
                  <h2>Hôtels recommandés</h2>
                  <button className="filter-btn">
                    <FilterIcon />
                    <span>Filtrer</span>
                  </button>
                </div>

                {hotels.map((hotel) => (
                  <div
                    key={hotel.id}
                    className={`hotel-card ${selectedHotel?.id === hotel.id ? 'selected' : ''}`}
                    onClick={() => setSelectedHotel(hotel)}
                  >
                    <div className="hotel-details">
                      <div className="hotel-header">
                        <div>
                          <h3>{hotel.name}</h3>
                          <p>{hotel.location}</p>
                        </div>
                        <button className="icon-btn">
                          <HeartIcon />
                        </button>
                      </div>

                      <div className="hotel-rating">
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className={i < Math.floor(hotel.rating) ? 'filled' : ''} />
                          ))}
                        </div>
                        <span className="rating">{hotel.rating}</span>
                        <span className="reviews">({hotel.reviews} avis)</span>
                      </div>

                      <div className="amenities">
                        {hotel.amenities.map((amenity, index) => (
                          <span key={index} className="amenity-tag">
                            {amenity}
                          </span>
                        ))}
                      </div>

                      <div className="hotel-price">
                        <p className="price">{hotel.price}€</p>
                        <p className="price-label">par nuit</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Booking Summary */}
            <div className="booking-summary">
              <h3>Résumé de réservation</h3>

              <div className="summary-details">
                <div className="summary-item">
                  <span>Destination</span>
                  <span>{searchData.destination}</span>
                </div>

                <div className="summary-item">
                  <span>Dates</span>
                  <span>
                    {new Date(searchData.departureDate).toLocaleDateString('fr-FR')} - {new Date(searchData.returnDate).toLocaleDateString('fr-FR')}
                  </span>
                </div>

                <div className="summary-item">
                  <span>Voyageurs</span>
                  <span>{searchData.travelers}</span>
                </div>

                {selectedFlight && (
                  <div className="selected-item flight">
                    <div className="item-header">
                      <PlaneIcon />
                      <span>Vol sélectionné</span>
                    </div>
                    <p>{selectedFlight.airline} - {selectedFlight.departure}</p>
                    <p className="item-price">{selectedFlight.price}€</p>
                  </div>
                )}

                {selectedHotel && (
                  <div className="selected-item hotel">
                    <div className="item-header">
                      <HotelIcon />
                      <span>Hôtel sélectionné</span>
                    </div>
                    <p>{selectedHotel.name}</p>
                    <p className="item-price">{selectedHotel.price}€/nuit × 7 nuits</p>
                  </div>
                )}
              </div>

              {totalPrice > 0 && (
                <>
                  <div className="total-price">
                    <span>Total</span>
                    <span className="price">{totalPrice}€</span>
                  </div>

                  <button
                    onClick={handleBooking}
                    disabled={!selectedFlight || !selectedHotel}
                    className={`book-btn ${selectedFlight && selectedHotel ? 'active' : 'disabled'}`}
                  >
                    <CreditCardIcon />
                    <span>Réserver maintenant</span>
                    <ArrowRightIcon />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;