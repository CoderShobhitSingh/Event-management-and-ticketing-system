import React from 'react'
import '../App.css';

const UserSignup = () => {
  return (
    <div>
        <div className="form-container">
            <form className="signup-form">
            <h2>User Signup</h2>
            <label>Username</label>
            <input type="text" placeholder="Enter username" required />
            
            <label>Email</label>
            <input type="email" placeholder="Enter email" required />

            <label>Phone</label>
            <input type="tel" placeholder="Enter phone number" required />

            <label>Password</label>
            <input type="password" placeholder="Enter password" required />
            
            <button type="submit" className="signup-btn">Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default UserSignup