import React from 'react'
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">Event-To</a>
        <ul className="navbar-menu">
          <li><a href="/">CREATE EVENT</a></li>
          <li><a href="/home">BOOK TICKET</a></li>
          <li><a href="#">LOGIN</a></li>
          <li><a href="#">SIGNUP</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;