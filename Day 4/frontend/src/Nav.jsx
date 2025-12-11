import React from 'react'
// import './styles/nav.css'
import {Link} from 'react-router-dom';
const Nav = () => {
  return (
    <div>
      <nav>
        <ol>
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to ="/login">Login</Link></li> */}
            <li><Link to = "/Register">Register</Link></li>
            <li><Link to = "/adduser">Add User</Link></li>
            <li><Link to ="/getuser">Get User</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
            <li><Link to ="/about">About</Link></li>
        </ol>
      </nav>
    </div>
  )
}

export default Nav
