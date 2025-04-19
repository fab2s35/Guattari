import React from 'react';
import './Header.css'; // 👈 Import del CSS

function Header() {
  return (
    <>
   <div class="ads-text">
  <span>Registrarse</span>
  <span>/</span>
  <span className='for-margin'>Iniciar Sesión</span>
</div>

<div>
  <h3 className='text-center'>texto provisional</h3>
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
            <a className="nav-item nav-link active" href="#">Inicio</a>
            <a className="nav-item nav-link" href="#">Estancias</a>
            <a className="nav-item nav-link" href="#">Sobre Nosotros</a>
            <a className="nav-item nav-link" href="#">Contactanos</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
