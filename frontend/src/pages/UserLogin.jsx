import React from 'react'

const UserLogin = () => {
  return (
    <div>
        <div className="form-container">
            <form className="signup-form">
            <h2>User Login</h2>
            
            <label>Email</label>
            <input type="email" placeholder="Enter email" required />

            <label>Password</label>
            <input type="password" placeholder="Enter password" required />
            
            <button type="submit" className="signup-btn">Login</button>
            </form>
        </div>
    </div>
  )
}

export default UserLogin