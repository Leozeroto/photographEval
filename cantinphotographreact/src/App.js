import Menu from './components/Menu';
import './css/app.css';
import Accueil from './pages/Accueil';
import Garlerie from './pages/Garlerie';
import Tarifs from './pages/Tarifs';



function App() {
  return (
    <>
      < Menu />
      < Accueil />
      < Garlerie />
      < Tarifs />
    </>
  );
}

export default App;
