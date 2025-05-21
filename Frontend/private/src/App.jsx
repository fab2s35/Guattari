import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
{/*Import de las routes para la navegación*/}
import Proveedores from './pages/Proveedores/Proveedores.jsx';
import Sucursales from './pages/Sucursales/Sucursales.jsx';
import Branch from './pages/Addbranch/branch.jsx'
import Supplier from './pages/addsupplier/supplier.jsx';
import AddEmp from './pages/addEmp/addEmp.jsx';



{/*Import de los componentes para la navegación*/}

{/*Import de los estilos*/}

{/*Import de las páginas*/}

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/proveedores" element={<Proveedores/>} />
          <Route path="/sucursales" element={<Sucursales/>} />
          <Route path="/branch" element={<Branch/>} />
          <Route path="/supplier" element={<Supplier />} /> 
           <Route path="/addEmp" element={<AddEmp />} /> 
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
