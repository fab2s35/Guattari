import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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

    setError(''); // Limpia error previo antes de intentar login

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
        // Mejor usar navigate en lugar de cambiar location para SPA
        navigate(data.redirectTo || '/');
      } else {
        setError(data.message || 'Error de autenticación');
      }
    } catch (err) {
      setError('Error al conectar con el servidor.');
    }
  };

  return (
    <div className="register-fullscreen">
      <button
        className="close-button"
        onClick={() => navigate(-1)}
        aria-label="Cerrar"
        type="button"
      >
        ✕
      </button>

      <div className="register-container">
        <img src={LoginC} alt="Imagen de login" className="register-img" />

        <div className="form-content">
          <img src={Logo} alt="Logo Guattari" className="register-logo" />

          <form className="register-form" onSubmit={handleLogin} noValidate>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                className={`form-control ${emailError ? 'input-error' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-describedby="emailError"
              />
              {emailError && (
                <p id="emailError" className="error-message">
                  {emailError}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                className={`form-control ${passwordError ? 'input-error' : ''}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-describedby="passwordError"
              />
              {passwordError && (
                <p id="passwordError" className="error-message">
                  {passwordError}
                </p>
              )}
            </div>


            <p style={{ marginTop: '15px', fontSize: '14px' }}>
            <Link
              to="/RecoverPassword"
              
            >
              ¿Olvidó su contraseña?
            </Link>
          </p>

            {error && <p className="error-message" style={{ marginBottom: '10px' }}>{error}</p>}

            <button type="submit" className="btn-register">
              Iniciar Sesión
            </button>
          </form>

          
        </div>
      </div>
    </div>
  );
}

export default Login;

