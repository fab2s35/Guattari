import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import MainPage from './pages/mainPage/mainPage.jsx';
import Estancias from './pages/Estancias/Estancias.jsx';
import Contactanos from './pages/Contactanos/Contactanos.jsx';
import AboutUs from './pages/aboutUs/AboutUs';

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
        <Route path="/contactanos" element={<Contactanos />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
