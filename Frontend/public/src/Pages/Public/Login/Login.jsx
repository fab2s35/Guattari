import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

import LoginC from '../../../img/register-login-profile/login-img.png';
import Logo from '../../../img/register-login-profile/logo-Guattari.png';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      setEmailError('El email es obligatorio');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('El email no es válido');
      isValid = false;
    }

    if (!password) {
      setPasswordError('La contraseña es obligatoria');
      isValid = false;
    }

    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        window.location.href = data.redirectTo || '/';
      } else {
        setError(data.message || 'Error de autenticación');
      }
    } catch (err) {
      setError('Error al conectar con el servidor.');
    }
  };

  return (
    <div className="register-fullscreen">
      <button className="close-button" onClick={() => navigate(-1)}>✕</button>

      <div className="register-container">
        <img src={LoginC} alt="Imagen de login" className="register-img" />

        <div className="form-content">
          <img src={Logo} alt="Logo Guattari" className="register-logo" />

          <form className="register-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
            </div>

            {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

            <button type="submit" className="btn-register">
              Iniciar Sesión
            </button>
          </form>

          {/* Enlace a recuperar contraseña (opcional) */}
          {/* <Link to="/recoverPassword" className="forgot-link">¿Olvidó su contraseña?</Link> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
