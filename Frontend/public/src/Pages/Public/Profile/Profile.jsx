import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

import ProfileIMG from '../../../img/register-login-profile/profile-img.jpg'; // Imagen de perfil o decorativa
import Logo from '../../../img/register-login-profile/logo-Guattari.png';     // Logo

function Profile() {
  const navigate = useNavigate();

  // Datos simulados del perfil
  const userData = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    phone: '1234-5678',
    role: 'Empleado',
  };

  return (
    <div className="profile-fullscreen">
      <button className="close-button" onClick={() => navigate(-1)}>✕</button>

      <div className="profile-container">
        <img src={ProfileIMG} alt="Perfil decorativo" className="profile-img" />

        <div className="form-content">
          <img src={Logo} alt="Logo Guattari" className="register-logo" />

          <h2 className="profile-title">Mi Perfil</h2>

          <div className="profile-data">
            <div className="data-group">
              <label>Nombre:</label>
              <p>{userData.name}</p>
            </div>

            <div className="data-group">
              <label>Correo electrónico:</label>
              <p>{userData.email}</p>
            </div>

            <div className="data-group">
              <label>Teléfono:</label>
              <p>{userData.phone}</p>
            </div>

            <div className="data-group">
              <label>Rol:</label>
              <p>{userData.role}</p>
            </div>

            <button className="btn-register" onClick={() => alert('Función de edición futura')}>
              Editar Perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
