import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
{/*Import de las routes para la navegación*/}
import Proveedores from './pages/Proveedores/Proveedores.jsx';
import Sucursales from './pages/Sucursales/Sucursales.jsx';
import Branch from './pages/Addbranch/branch.jsx'
import Inventory from './pages/Inventory/Inventory.jsx'
import Reviews from './pages/Reviews/Reviews.jsx'
import AddInv from './pages/addInv/addInventory.jsx';
import Employee from './pages/Employees/Employee.jsx';  
import MainPage from './pages/MainPage/mainPage.jsx'




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
          <Route path="/MainPage" element={<MainPage/>} />
          <Route path="/" element={<MainPage/>} />
          <Route path="/Inventory" element={<Inventory />} /> 
           <Route path="/Reviews" element={<Reviews />} /> 
           <Route path="/AddInv" element={<AddInv />} /> 
           <Route path="/Employee" element={<Employee />} />

           
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
