import React, { useEffect, useState } from 'react';
import '../App.css';

const HomeScreen = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

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
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
