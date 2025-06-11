import React, { useState } from 'react';
import '../App.css';

const CreateEventScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [capacity, setCapacity] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const submitHandler = (e) => {
  e.preventDefault();

  const newEvent = {
    title,
    description,
    date,
    location,
    price,
    capacity,
    image,
  };

  const existingEvents = JSON.parse(localStorage.getItem('events')) || [];
  existingEvents.push(newEvent);
  localStorage.setItem('events', JSON.stringify(existingEvents));

  setError('');
  window.location.href = '/'; 
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler} className="event-form">
        <h2>Create Event</h2>
        {error && <div className="error-message">{error}</div>}

        <label>Event Title</label>
        <input
          type="text"
          placeholder="Enter event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          placeholder="Enter event description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Event Date</label>
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label>Location</label>
        <input
          type="text"
          placeholder="Enter event location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <label>Price per Ticket (₹)</label>
        <input
          type="number"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label>Total Capacity</label>
        <input
          type="number"
          placeholder="Enter total capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          required
        />

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEventScreen;
