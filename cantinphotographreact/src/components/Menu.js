import { NavLink } from 'react-router-dom';

import React from 'react'

const Menu = () => {
  return (
    <div className='menu'>
        <ul>
            <li><NavLink to="/" className={({ isActive }) => ( isActive ? "activeLink" : undefined )}>Accueil</NavLink></li>
            <li><NavLink to="/galerie" className={({ isActive }) => ( isActive ? "activeLink" : undefined )}>Galerie</NavLink></li>
            <li><NavLink to="/tarifs" className={({ isActive }) => ( isActive ? "activeLink" : undefined )}>Tarif et prestations</NavLink></li>
            <li> Contact</li>

        </ul>
    </div>
  )
}

export default Menu