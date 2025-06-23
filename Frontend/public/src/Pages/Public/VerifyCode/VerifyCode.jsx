import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

import RegisterIMG from '../../../img/register-login-profile/register-img.png';
import Logo from '../../../img/register-login-profile/logo-Guattari.png';

function VerifyCode() {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (code.trim().length !== 6) {
      setError('El código debe tener 6 dígitos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/registerClients/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // importante para cookies
        body: JSON.stringify({ code }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(result.message);
        setTimeout(() => navigate('/login'), 3000);
      } else {
        setError(result.message || 'Código inválido.');
      }
    } catch (err) {
      setError('Error al verificar el código.');
    }
  };

  return (
    <div className="register-fullscreen">
      <button className="close-button" onClick={() => navigate(-1)}>✕</button>

      <div className="register-container">
        <img src={RegisterIMG} alt="Verificación" className="register-img" />

        <div className="form-content">
          <img src={Logo} alt="Logo" className="register-logo" />

          <form className="register-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Verifica tu cuenta</h3>

            <div className="form-group">
              <label htmlFor="code">Código de verificación</label>
              <input
                type="text"
                id="code"
                name="code"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError('');
                  setSuccess('');
                }}
                className="form-control"
                maxLength={6}
                required
              />
              {error && <p className="error-message">{error}</p>}
              {success && <p className="success-message">{success}</p>}
            </div>

            <button type="submit" className="btn-register">
              Verificar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerifyCode;