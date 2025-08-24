// Mock booking service with static data
const mockBookings = [
  {
    id: 1,
    bookingDate: '2024-01-15T10:30:00',
    seats: 2,
    status: 'CONFIRMED',
    bookingNumber: 'BK001',
    travel: {
      id: 1,
      title: 'Air France AF1234 - Paris CDG → Marrakech'
    },
    hotel: {
      id: 1,
      name: 'Hôtel des Invalides'
    }
  },
  {
    id: 2,
    bookingDate: '2024-02-20T14:45:00',
    seats: 1,
    status: 'CONFIRMED',
    bookingNumber: 'BK002',
    travel: {
      id: 2,
      title: 'Lufthansa LH5678 - Paris ORY → Barcelona'
    },
    hotel: {
      id: 2,
      name: 'Le Marais Boutique'
    }
  }
];

let nextBookingId = 3;

// Load bookings from localStorage or use defaults
const loadBookings = () => {
  const savedBookings = localStorage.getItem('userBookings');
  if (savedBookings) {
    const parsed = JSON.parse(savedBookings);
    // Update nextBookingId based on existing bookings
    if (parsed.length > 0) {
      nextBookingId = Math.max(...parsed.map(b => b.id)) + 1;
    }
    return parsed;
  }
  return [...mockBookings];
};

const saveBookings = (bookings) => {
  localStorage.setItem('userBookings', JSON.stringify(bookings));
};

// Initialize bookings from localStorage
let allBookings = loadBookings();

export const bookingService = {
  async createBooking(bookingData) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Create new booking with actual selected data
    const newBooking = {
      id: nextBookingId++,
      bookingDate: new Date().toISOString(),
      seats: bookingData.seats,
      status: 'CONFIRMED',
      bookingNumber: `BK${String(bookingData.bookingNumber || nextBookingId).padStart(3, '0')}`,
      travel: {
        id: bookingData.travel.id,
        title: bookingData.selectedFlight ?
          `${bookingData.selectedFlight.airline} - ${bookingData.selectedFlight.departure} → ${bookingData.selectedFlight.arrival}` :
          `Flight ${bookingData.travel.id} - Paris → Destination`
      },
      hotel: {
        id: bookingData.hotel.id,
        name: bookingData.selectedHotel ?
          bookingData.selectedHotel.name :
          `Hotel ${bookingData.hotel.id}`
      }
    };

    // Add to bookings array
    allBookings.push(newBooking);

    // Save to localStorage
    saveBookings(allBookings);

    return newBooking;
  },

  async getMyBookings() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Reload from localStorage to get latest data
    allBookings = loadBookings();

    return allBookings;
  }
};
