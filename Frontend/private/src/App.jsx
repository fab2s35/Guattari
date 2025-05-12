import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Proveedores from './pages/Proveedores/Proveedores';

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/proveedores" element={<Proveedores/>} />
          {/* <Route path="/ruta" element={<Componente />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
