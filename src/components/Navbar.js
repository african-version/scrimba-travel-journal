import React from 'react';
import '../index.css'
import { FaGlobeAfrica } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className='navbar'>
        <h1><FaGlobeAfrica className='globe-icon'/>my travel journal.</h1>
    </div>
  )
}

