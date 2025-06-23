import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

import RegisterIMG from '../../../img/register-login-profile/register-img.png';
import Logo from '../../../img/register-login-profile/logo-Guattari.png';

function Register() {
  const navigate = useNavigate();

  return (
    <div className="register-fullscreen">
      <button className="close-button" onClick={() => navigate(-1)}>✕</button>

      <div className="register-container">
        <img src={RegisterIMG} alt="Imagen de registro" className="register-img" />

        <div className="form-content">
          <img src={Logo} alt="Logo" className="register-logo" />

          <form className="register-form">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <input type="password" id="confirmPassword" className="form-control" />
            </div>

            <button type="submit" className="btn-register">
              Crear Cuenta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
