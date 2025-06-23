import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './recoverPassword.css'; 

function NewPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const validatePassword = () => {
    if (newPassword.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return false;
    }
    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!validatePassword()) return;

    try {
      const response = await fetch('http://localhost:4000/api/passwordRecovery/newPassword', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Si usas cookies, importante incluirlas
        body: JSON.stringify({ newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Contraseña actualizada correctamente. Serás redirigido al inicio de sesión.');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        setError(data.message || 'Error al actualizar la contraseña.');
      }
    } catch (err) {
      setError('Error al conectar con el servidor.');
    }
  };

  return (
    <div className="recover-password-container">
      <button className="close-button" onClick={() => navigate(-1)}>✕</button>

      <h2>Cambiar Contraseña</h2>

      <form onSubmit={handleSubmit} className="recover-password-form">
        <label htmlFor="newPassword">Nueva contraseña</label>
        <input
          id="newPassword"
          type="password"
          placeholder="Ingresa la nueva contraseña"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          minLength={6}
        />

        <label htmlFor="confirmPassword">Confirmar contraseña</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirma la nueva contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          minLength={6}
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {message && <p style={{ color: 'green' }}>{message}</p>}

        <button type="submit" className="btn-recover">
          Actualizar Contraseña
        </button>
      </form>
    </div>
  );
}

export default NewPassword;
