//import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import './css/app.css';
import Accueil from './pages/Accueil';
import Galerie from './pages/Galerie';
import Tarifs from './pages/Tarifs';



function App() {
  return (
    <>
      < Menu />

      <Routes>
        <Route path='/' element={< Accueil />} />
        <Route path='/galerie' element={< Galerie />} />
        <Route path='/tarifs' element={< Tarifs />} />
      </Routes>

    </>
  );
}

export default App;
