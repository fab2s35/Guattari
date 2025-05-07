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
import Register from './pages/Register/Register.jsx';
import Login from './pages/login/login.jsx';
import Productos from './pages/Productos/Productos.jsx';


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
