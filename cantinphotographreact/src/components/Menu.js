import { NavLink } from 'react-router-dom';

import React from 'react'

const Menu = () => {
  return (
    <div className='menu'>
        <ul>
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><NavLink to="/galerie">Galerie</NavLink></li>
            <li><NavLink to="/tarifs">Tarif et prestations</NavLink></li>
            <li> Contact</li>

        </ul>
    </div>
  )
}

export default Menu