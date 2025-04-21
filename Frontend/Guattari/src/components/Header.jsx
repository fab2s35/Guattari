import React from 'react';
import './Header.css'; // 👈 Import del CSS
import logoGuattari from '../img/GUATTARI_logo-ver1.jpg';
import IC_cuenta from '../img/user.png';
import IC_cart from '../img/shopping-cart.png';


function Header() {
  return (
    <>
   <div class="ads-text">
  <span>Registrarse</span>
  <span>/</span>
  <span className='for-margin'>Iniciar Sesión</span>
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

  <div className="d-flex align-items-center">
    <img src={IC_cuenta} alt="Cuenta" className="icono-header" />
    <img src={IC_cart} alt="Carrito" className="icono-header ms-2" />
  </div>
</div>




<nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link inicio-link active" href="#">Inicio</a>
            <a className="nav-item nav-link" href="#">Estancias</a>
            <a className="nav-item nav-link" href="#">Sobre Nosotros</a>
            <a className="nav-item nav-link" href="#">Contáctanos</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
