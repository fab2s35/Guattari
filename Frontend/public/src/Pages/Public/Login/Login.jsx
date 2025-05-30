import React, { useState } from 'react';
import './login.css';

import LoginC from '../../../img/register-login-profile/login-img.png';
import Logo from '../../../img/register-login-profile/logo-Guattari.png';

function Login() {
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
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // para permitir cookies del backend
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token); // opcional si usas token en frontend
        // Redirige según el rol
        if (data.redirectTo) {
          window.location.href = data.redirectTo;
        } else {
          window.location.href = '/';
        }
      } else {
        setError(data.message || 'Error de autenticación');
      }
    } catch (err) {
      setError('Error al conectar con el servidor.');
    }
  };

  return (
    <div className="conteiner-Login">
      <img src={LoginC} id="img-Login" className="img-fluid" alt="Imagen login" />

      <div className="centrar">
        <form className="text-Login" onSubmit={handleLogin}>
          <img src={Logo} id="img-logo2" alt="Logo Guattari" />
          <h2>Iniciar Sesión</h2>

          <div className="conteiner-Text-Conteiner">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
            </div>

            <button className="btn-Login" type="submit">
              <p>Iniciar Sesión</p>
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;





/*<Link to="/recoverPassword" className="p2">
¿Olvidó su contraseña?
</Link>*/

/*<Link className="nav-item nav-link" id="p2" to="/recoverPassword">¿Olvidó su contraseña?</Link> */