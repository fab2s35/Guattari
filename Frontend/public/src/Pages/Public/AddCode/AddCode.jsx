import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './addCode.css'; // Puedes crear estilos similares

function AddCode() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || ''; // Email recibido del paso anterior

  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!code) {
      setError('Por favor ingresa el código de verificación.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/passwordRecovery/verifyCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Código verificado correctamente. Puedes proceder a cambiar tu contraseña.');
        // Aquí podrías redirigir a la pantalla para cambiar la contraseña si quieres:
        // navigate('/changePassword', { state: { email } });
      } else {
        setError(data.message || 'Código incorrecto o expirado.');
      }
    } catch (err) {
      setError('Error al conectar con el servidor.', err);
    }
  };

  return (
    <div className="add-code-container">
      <button className="close-button" onClick={() => navigate(-1)}>✕</button>

      <h2>Agregar Código de Verificación</h2>

      <p>Correo: <strong>{email}</strong></p>

      <form onSubmit={handleSubmit} className="add-code-form">
        <label htmlFor="code">Código</label>
        <input
          id="code"
          type="text"
          placeholder="Ingresa el código que recibiste"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {message && <p style={{ color: 'green' }}>{message}</p>}

        <button type="submit" className="btn-add-code">Verificar Código</button>
      </form>
    </div>
  );
}

export default AddCode;
