import React, { useEffect, useState } from 'react';
import '../App.css';

function HomeScreen() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let data = [];
    try {
      data = JSON.parse(localStorage.getItem('events')) || [];
    } catch {
      data = [];
    }
    setEvents(data);
  }, []);

  function bookTicket(i) {
    const arr = [...events];
    if (!arr[i].availableTickets) arr[i].availableTickets = arr[i].capacity;
    if (arr[i].availableTickets > 0) {
      arr[i].availableTickets -= 1;
      setEvents(arr);
      localStorage.setItem('events', JSON.stringify(arr));
      alert('Ticket booked for ' + arr[i].title);
    } else {
      alert('No tickets available.');
    }
  }

  return (
    <div>
      <h2>Upcoming Events</h2>
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <div>
          {events.map((e, i) => (
            <div key={i}>
              {e.image && <img src={e.image} alt={e.title} style={{ width: 100 }} />}
              <h3>{e.title}</h3>
              <p>Date: {new Date(e.date).toLocaleString()}</p>
              <p>Location: {e.location}</p>
              <p>Price: ₹{e.price}</p>
              <p>Capacity: {e.capacity}</p>
              <p>Available: {e.availableTickets ?? e.capacity}</p>
              <p>{e.description}</p>
              <button onClick={() => bookTicket(i)}>Book Ticket</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomeScreen;