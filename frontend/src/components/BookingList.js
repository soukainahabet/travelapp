import React, { useEffect, useState } from "react";
import { getBookings, deleteBooking } from "../services/BookingService.js";

export default function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings().then(setBookings);
  }, []);

  const handleDelete = async (id) => {
    await deleteBooking(id);
    setBookings(bookings.filter(b => b.id !== id));
  };

  return (
    <div>
      <h2>Booking List</h2>
      {bookings.map((booking) => (
        <div key={booking.id}>
          Booking #{booking.id}{" "}
          <button onClick={() => handleDelete(booking.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
