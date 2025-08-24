import React, { useState, useEffect } from 'react';
import { bookingService } from '../services/BookingService';
import '../styles/Reservation.css'; // Reusing styles for consistency

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await bookingService.getMyBookings();
        // Sort bookings by date (newest first)
        const sortedBookings = data.sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate));
        setBookings(sortedBookings);
      } catch (err) {
        setError('Impossible de charger les réservations.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div className="reservation-page"><h2>Chargement de vos réservations...</h2></div>;
  }

  if (error) {
    return <div className="reservation-page"><p className="error-message" style={{color: 'red', textAlign: 'center'}}>{error}</p></div>;
  }

  return (
    <div className="reservation-page">
      <div className="reservation-container">
        <h1>Mes Réservations ({bookings.length})</h1>
        {bookings.length === 0 ? (
          <p>Vous n'avez aucune réservation pour le moment.</p>
        ) : (
          <div className="bookings-list">
            {bookings.map((booking) => (
              <div key={booking.id} className="booking-summary" style={{ marginBottom: '2rem', border: '1px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3>Réservation #{booking.bookingNumber}</h3>
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>
                    {new Date(booking.bookingDate).toLocaleDateString('fr-FR')} à {new Date(booking.bookingDate).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <div className="summary-details">
                  {booking.travel && (
                    <div className="summary-item">
                      <span>Vol</span>
                      <span>{booking.travel.title || 'Détails non disponibles'}</span>
                    </div>
                  )}
                  {booking.hotel && (
                    <div className="summary-item">
                      <span>Hôtel</span>
                      <span>{booking.hotel.name}</span>
                    </div>
                  )}
                  <div className="summary-item">
                    <span>Voyageurs</span>
                    <span>{booking.seats}</span>
                  </div>
                   <div className="summary-item">
                    <span>Status</span>
                    <span style={{ fontWeight: 'bold', color: '#28a745' }}>{booking.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
