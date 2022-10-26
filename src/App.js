import './App.css';
import Contato from './Contato';
import Curriculo from './Curriculo';
import Home from './Home';
import Navbar from './Navbar';
import Projetos from './Projetos';
import Rodape from './Rodape';
import SobreMim from './SobreMim';

function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <SobreMim/>
    <Curriculo/>
    <Projetos/>
    <Contato/>
    <Rodape/>

    </div>
  );
}

export default App;

