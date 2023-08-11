import React from 'react';
import './Navbar.css';


export default function Navbar() {
  return (
    <div className='navbar'>
      <p>Web Developer</p>
      <ul>
        <li className='home'>Home</li>
        <li>About me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact me</li>
      </ul>
    </div>
  )
}
