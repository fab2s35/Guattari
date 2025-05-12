import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
{/*Import de las routes para la navegación*/}
import Proveedores from './pages/Proveedores/Proveedores.jsx';
import Inventory from './pages/Inventory/Inventory.jsx'
import Reviews from './pages/Reviews/Reviews.jsx'
import Sucursales from './pages/Sucursales/Sucursales.jsx';

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/proveedores" element={<Proveedores/>} />
          <Route path="/sucursales" element={<Sucursales/>} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Reviews" element={<Reviews />} /> 
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
