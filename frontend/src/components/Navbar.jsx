import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">Event-To</a>
        <ul className="navbar-menu">
          <li><a href="#">Create Event</a></li>
          <li><a href="#">BOOK TICKET</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;