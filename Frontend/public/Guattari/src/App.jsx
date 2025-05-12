import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Public/components/Header/Header.jsx';
import Footer from './Public/components/Footer/Footer.jsx';
import MainPage from './Public/pages/MainPage/MainPage.jsx';
import Estancias from './Public/pages/Estancias/Estancias.jsx';
import Categorias from './Public/pages/Productos/Productos.jsx';
import Contactanos from './Public/pages/Contactanos/Contactanos.jsx';
import AboutUs from './Public/pages/AboutUs/AboutUs.jsx';

//Registre, login and porfile
import Register from './Public/pages/Register/Register.jsx';
import Login from './Public/pages/Login/Login.jsx';
import Productos from './Public/pages/Productos/Productos.jsx';


function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Ruta predeterminada para cargar la página de inicio */}
        <Route path="/" element={<MainPage />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/estancias" element={<Estancias />} />

        <Route path="/contactanos" element={<Contactanos/>} />
        <Route path="/categorias/:id" element={<Categorias/>} />
        <Route path="/productos" element={<Productos/>} />

        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
