import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import MainPage from './pages/mainPage/mainPage.jsx';
import Estancias from './pages/Estancias/Estancias.jsx';
import Categorias from './pages/subCategorias/subCategorias.jsx';
import Contactanos from './pages/Contactanos/Contactanos.jsx';
import AboutUs from './pages/aboutUs/AboutUs.jsx';

//Registre, login and porfile
import Register from './pages/registre/register.jsx';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/estancias" element={<Estancias />} />
        <Route path="/contactanos" element={<Contactanos/>} />
        <Route path="/categorias/:id" element={<Categorias/>} />

        <Route path="/register" element={<Register/>} />
       
      </Routes>



      <Footer />
    </Router>
  );
}

export default App;
