import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import './css/app.css';
import Accueil from './pages/Accueil';
import Galerie from './pages/Galerie';
import Tarifs from './pages/Tarifs';
import Contact from './pages/Contact';


function App() {

  const [filtreGalerie, setFiltreGalerie] = useState ([]);
// [{nom: "Wilfrid 2 ans", categorie: "bébé", description: "la naissance de Wilfrid"}, {},]

function handleFiltreGalerie(photo) {
  console.log(handleFiltreGalerie, photo)
}
 
  return (
    <>
      < Menu />

      <Routes>
        <Route path='/' element={< Accueil />} />
        <Route path='/galerie' element={< Galerie handleFiltreGalerie={handleFiltreGalerie} />} />
        <Route path='/tarifs' element={< Tarifs />} />
        <Route path='/contact' element={< Contact />} />
        
      </Routes>

    </>
  );
}

export default App;
