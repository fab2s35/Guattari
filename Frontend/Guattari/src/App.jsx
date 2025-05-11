import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import MainPage from './pages/Public/MainPage/MainPage.jsx';
import Estancias from './pages/Public/Estancias/Estancias.jsx';
import Categorias from './pages/Public/Productos/Productos.jsx';
import Contactanos from './pages/Public/Contactanos/Contactanos.jsx';
import AboutUs from './pages/Public/AboutUs/AboutUs.jsx';


//Registre, login and porfile
import Register from './pages/Public/Register/Register.jsx';
import Login from './pages/Public/Login/Login.jsx';
import Productos from './pages/Public/Productos/Productos.jsx';


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
