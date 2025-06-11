import React, { useEffect, useState } from 'react';
import '../App.css';

const HomeScreen = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  const handleBookTicket = (index) => {
    const updatedEvents = [...events];
    const event = updatedEvents[index];

    if (event.availableTickets === undefined) {
      event.availableTickets = event.capacity;
    }

    if (event.availableTickets > 0) {
      event.availableTickets -= 1;
      localStorage.setItem('events', JSON.stringify(updatedEvents));
      setEvents(updatedEvents);
      alert(`Ticket booked for "${event.title}"`);
    } else {
      alert('Sorry, no tickets available.');
    }
  };

  return (
    <div className="home-container">
      <h2>Upcoming Events</h2>
      {events.length === 0 ? (
        <p>No events available. Please create one.</p>
      ) : (
        <div className="event-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-image"
                />
              )}
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Price:</strong> ₹{event.price}</p>
              <p><strong>Capacity:</strong> {event.capacity}</p>
              <p><strong>Available Tickets:</strong> {event.availableTickets ?? event.capacity}</p>
              <p>{event.description}</p>
              <button
                className="book-btn"
                onClick={() => handleBookTicket(index)}
              >
                Book Ticket
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;