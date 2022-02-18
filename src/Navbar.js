import React from 'react';
import Login from './Login';
import { NavLink } from "react-router-dom";
import NewsLogo from './img/news-logo.png'

const Navbar = () => {
  return(
    <>
      <nav className='navbar-container'>
        <img src={NewsLogo} className="navbar-logo" alt='logo'/>
        <ul className='navbar'>
          <li>
            <NavLink to="/bbc" className="nav-link">BBC News</NavLink>
            <NavLink to="/cnn" className="nav-link">CNN</NavLink>
            <NavLink to="/techcrunch" className="nav-link">TechCrunch</NavLink>
            <NavLink to="/login" className="nav-link">Login</NavLink> 
          </li>
        </ul>
      </nav>  
    </>
  )
}

export default Navbar;