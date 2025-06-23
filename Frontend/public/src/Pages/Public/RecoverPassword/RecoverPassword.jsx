import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './recoverPassword.css';

function RecoverPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!validateEmail(email)) {
      setError('Por favor ingresa un correo válido.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/requestCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Se ha enviado un enlace de recuperación a tu correo.');
        // Redirige a la interfaz AddCode y le pasa el email como estado
        setTimeout(() => {
          navigate('/AddCode', { state: { email } });
        }, 1500); // espera 1.5 segundos para mostrar mensaje antes de redirigir
      } else {
        setError(data.message || 'Error al solicitar recuperación de contraseña.');
      }
    } catch (err) {
      setError('Error al conectar con el servidor.');
    }
  };

  return (
    <div className="recover-password-container">
      <button className="close-button" onClick={() => navigate(-1)}>✕</button>

      <h2>Recuperar Contraseña</h2>

      <form onSubmit={handleSubmit} className="recover-password-form">
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          type="email"
          placeholder="Ingresa tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {message && <p style={{ color: 'green' }}>{message}</p>}

        <button type="submit" className="btn-recover">
          Enviar enlace de recuperación
        </button>
      </form>
    </div>
  );
}

export default RecoverPassword;
