import React from 'react';
import './Header.css'; 
import logoGuattari from '../../img/GUATTARI_logo-ver1.png';
import IC_cuenta from '../../img/user.png';
import IC_cart from '../../img/shopping-cart.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="ads-text">
   
      </div>

      <div className="container-fluid header-top d-flex align-items-center justify-content-between flex-wrap">
        <div className="d-flex align-items-center logo-buscador">
          <img src={logoGuattari} alt="Logo" className="logo" />
          <div className="search-container">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Buscar..."
            /> 
            <i className="fas fa-search search-icon"></i>
          </div>
        </div>

        <div className="d-flex align-items-center iconos-header">
          <img src={IC_cuenta} alt="Cuenta" className="icono-header" />
          
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link inicio-link active" to="/bienvenidaAdmin">Inicio</Link>
            <Link className="nav-item nav-link" to="/proveedores">Proveedores</Link>
            <Link className="nav-item nav-link" to="/sucursales">Sucursales</Link>
            <Link className="nav-item nav-link" to="/Inventory">Inventario</Link>
            <Link className="nav-item nav-link" to="/employee">Empleado</Link>

            <Link className="nav-item nav-link" to="/Reviews">Reseñas</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
