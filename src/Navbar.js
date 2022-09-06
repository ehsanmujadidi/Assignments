import React from 'react';
import style from'./Navbar.module.css';

{/* Navbar Component */}
export default function Navbar() {
    return (
      <nav className={`navbar navbar-light ${style.navbarCustom}`}>
        <img src="/hacker.png" alt="image" width='50' />
      </nav>
    )
  }