import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

import RegisterIMG from '../../../img/register-login-profile/register-img.png';
import Logo from '../../../img/register-login-profile/logo-Guattari.png';
import { registerUser } from '../../../services/registerService';

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Limpiar errores cuando el usuario empiece a escribir
    setError('');
    if (fieldErrors[e.target.name]) {
      setFieldErrors({ ...fieldErrors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const errors = {};

    // Nombre - validación igual que el backend
    if (!form.name.trim() || form.name.trim().length < 2) {
      errors.name = 'El nombre debe tener al menos 2 caracteres';
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(form.name.trim())) {
      errors.name = 'El nombre solo puede contener letras y espacios';
    }

    // Email - validación mejorada
    if (!form.email.trim()) {
      errors.email = 'Debe proporcionar un email válido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = 'Debe proporcionar un email válido';
    }

    // Contraseña - validación igual que el backend
    if (!form.password || form.password.length < 8) {
      errors.password = 'La contraseña debe tener al menos 8 caracteres';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(form.password)) {
      errors.password = 'Debe contener al menos una mayúscula, una minúscula y un número';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Limpiar mensajes previos
    setError('');
    setSuccessMessage('');
    setFieldErrors({});

    // Validación del frontend
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    try {
      const { ok, data } = await registerUser(form);

      if (ok) {
        setSuccessMessage(data.message || 'Registro exitoso. Revisa tu correo para verificar tu cuenta.');
        
        // Opcional: Mostrar información de debug en desarrollo
        if (process.env.NODE_ENV === 'development' && data.debug) {
          console.log('Debug info:', data.debug);
        }

        // Esperar un poco para que el usuario lea el mensaje antes de redirigir
        setTimeout(() => {
          navigate('/verify-code', { 
            state: { 
              email: data.email,
              message: data.message 
            } 
          });
        }, 2000);

      } else {
        // Manejar errores del backend
        if (data.errors && Array.isArray(data.errors)) {
          // Si el backend devuelve errores de validación específicos
          const backendFieldErrors = {};
          data.errors.forEach(error => {
            // Intentar mapear errores a campos específicos
            if (error.includes('nombre')) {
              backendFieldErrors.name = error;
            } else if (error.includes('email')) {
              backendFieldErrors.email = error;
            } else if (error.includes('contraseña')) {
              backendFieldErrors.password = error;
            } else {
              setError(error);
            }
          });
          setFieldErrors(backendFieldErrors);
        } else {
          // Error general
          setError(data.message || 'Error al registrar usuario. Intenta nuevamente.');
        }
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      setError('Error de conexión. Verifica tu internet e intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-fullscreen">
      <button 
        className="close-button" 
        onClick={() => navigate(-1)}
        disabled={isLoading}
      >
        ✕
      </button>

      <div className="register-container">
        <img src={RegisterIMG} alt="Imagen de registro" className="register-img" />

        <div className="form-content">
          <img src={Logo} alt="Logo" className="register-logo" />

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`form-control ${fieldErrors.name ? 'error' : ''}`}
                disabled={isLoading}
                required
              />
              {fieldErrors.name && <p className="error-message">{fieldErrors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`form-control ${fieldErrors.email ? 'error' : ''}`}
                disabled={isLoading}
                required
              />
              {fieldErrors.email && <p className="error-message">{fieldErrors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className={`form-control ${fieldErrors.password ? 'error' : ''}`}
                disabled={isLoading}
                required
              />
              {fieldErrors.password && <p className="error-message">{fieldErrors.password}</p>}
              <small className="password-hint">
                Mínimo 8 caracteres, debe incluir mayúscula, minúscula y número
              </small>
            </div>

            <button 
              type="submit" 
              className={`btn-register ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>
                  <span className="spinner"></span>
                  Creando cuenta...
                </span>
              ) : (
                'Crear Cuenta'
              )}
            </button>

            {/* Mensajes de estado */}
            {successMessage && <p className="success-message">{successMessage}</p>}
            {error && <p className="error-message">{error}</p>}
          </form>

          {/* Enlaces adicionales */}
          <div className="form-footer">
            <p>
              ¿Ya tienes cuenta?{' '}
              <button 
                type="button" 
                className="link-button"
                onClick={() => navigate('/login')}
                disabled={isLoading}
              >
                Inicia sesión
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;