import React from 'react';
import './Header.css'; 
import logoGuattari from '../../img/GUATTARI_logo-ver1.png';
import IC_cuenta from '../../img/user.png';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate(); // Hook para navegar entre rutas

  return (
    <>
      <div className="ads-text">
        <span>
          <Link className="nav-item nav-link registrarse-link active" to="/register">Registrarse</Link>
        </span>
        <span>/</span>
        <span className="for-margin">
          <Link className="nav-item nav-link login-link active" to="/login">Iniciar Sesión</Link>
        </span>
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

        <div className="d-flex align-items-center iconos-esquina">
          {/* Al hacer clic redirige al perfil */}
          <img
            src={IC_cuenta}
            alt="Cuenta"
            className="icono-header"
            onClick={() => navigate('/Profile')}
            style={{ cursor: 'pointer' }} 
          />
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
            <Link className="nav-item nav-link inicio-link active" to="/mainPage">Inicio</Link>
            <Link className="nav-item nav-link" to="/estancias">Estancias</Link>
            <Link className="nav-item nav-link" to="/aboutUs">Sobre Nosotros</Link>
            <Link className="nav-item nav-link" to="/contactanos">Contáctanos</Link>
            <Link className="nav-item nav-link" to="/code">Code</Link>
            <Link className="nav-item nav-link" to="/recoverPassword">Correo Contra</Link>
            <Link className="nav-item nav-link" to="/newPassword">Nueva Contra</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

