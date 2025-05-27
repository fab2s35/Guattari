import React, { useState } from 'react';
import './login.css';

import LoginC from '../../img/register-login-profile/login-img.png';
import Logo from '../../img/register-login-profile/logo-Guattari.png';

function Login() {
  // Estados para email, contraseña, error y validaciones
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');

    // Validación de email (expresión regular simple)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      setEmailError('El email es obligatorio');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('El email no es válido');
      isValid = false;
    }

    // Validación de contraseña
    if (!password) {
      setPasswordError('La contraseña es obligatoria');
      isValid = false;
    }

    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevenir recarga

    // Validamos antes de hacer la petición
    if (!validateForm()) {
      return; // Si no es válido, no se hace la petición
    }

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }), // usamos email como username
      });

      const data = await response.json();

      if (response.ok) {
        // Guardar token y redirigir a app privada
        localStorage.setItem('token', data.token);
        window.location.href = 'http://localhost:5175'; // URL de la app privada
      } else {
        setError(data.message || 'Error de autenticación');
      }
    } catch (err) {
      setError('Error al conectar con el servidor.');
    }
  };

  return (
    <>
      <div className="conteiner-Login">
        <img src={LoginC} id="img-Login" className="img-fluid" alt="Imagen login" />

        <div className="centrar">
          <form className="text-Login" onSubmit={handleLogin}>
            <img src={Logo} id="img-logo2" alt="Logo Guattari" />
            <br />
            <h2>Iniciar Sesión</h2>
            <br />
            <div className="conteiner-Text-Conteiner">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {emailError && <p style={{ color: 'red', marginTop: '5px' }}>{emailError}</p>}
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {passwordError && <p style={{ color: 'red', marginTop: '5px' }}>{passwordError}</p>}
              </div>

              <button className="btn-Login" type="submit" disabled={!email || !password || emailError || passwordError}>
                <p>Iniciar Sesión</p>
              </button>

              {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;




/*<Link to="/recoverPassword" className="p2">
¿Olvidó su contraseña?
</Link>*/

/*<Link className="nav-item nav-link" id="p2" to="/recoverPassword">¿Olvidó su contraseña?</Link> */