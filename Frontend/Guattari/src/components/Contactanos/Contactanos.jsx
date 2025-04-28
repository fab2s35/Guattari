import React, { useState } from 'react';
import './Contactanos.css';

const Contactanos = () => {
  const [formData, setFormData] = useState({
    problema: ''
  });

  const [enviando, setEnviando] = useState(false);
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleProblemaChange = (e) => {
    setFormData({
      ...formData,
      problema: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);

    // Se simula la el envío del formulario
    setTimeout(() => {
      setEnviando(false);
      setMensajeEnviado(true);
      // Se reinicia el formulario
      setFormData({
        problema: ''
      });
    }, 1500);
  };

  return (
    <div className="contactanos-container">
      <h1 className="contactanos-titulo">Contáctanos</h1>
      <hr className="contactanos-divider" />
      
      {!mensajeEnviado ? (
        <form onSubmit={handleSubmit} className="contactanos-form">
          <div className="form-group">
            <label htmlFor="problema">Describa su problema</label>
            <textarea
              id="problema"
              value={formData.problema}
              onChange={handleProblemaChange}
              className="form-textarea"
              rows={6}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="imagen">
              Agregue una fotografía
              <span className="opcional"> (No es obligatorio)</span>
            </label>
            
            <div className="imagen-upload-container">
              <input
                type="file"
                id="imagen"
                className="imagen-input"
                accept="image/*"
                disabled
              />
              
              <div className="imagen-preview-container">
                
              </div>
              
              <label htmlFor="imagen" className="imagen-upload-button">
                <div className="imagen-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                    <line x1="16" y1="10" x2="21" y2="15"/>
                    <line x1="17" y1="13" x2="19" y2="15"/>
                  </svg>
                </div>
              </label>
            </div>
          </div>
          
          <div className="form-submit">
            <button 
              type="submit" 
              className="enviar-btn"
              disabled={enviando}
            >
              {enviando ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </form>
      ) : (
        <div className="mensaje-enviado">
          <p>¡Gracias por contactarnos! Uno de nuestros asesores se pondrá en contacto con usted a la brevedad.</p>
          <button 
            onClick={() => setMensajeEnviado(false)} 
            className="enviar-btn"
          >
            Enviar otro mensaje
          </button>
        </div>
      )}
      
      <p className="contactanos-nota">
        Envíe una solicitud y uno de nuestros asesores se pondrá en contacto con usted por correo electrónico.
      </p>
    </div>
  );
};

export default Contactanos;