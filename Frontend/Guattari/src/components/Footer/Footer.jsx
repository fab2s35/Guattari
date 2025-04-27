import React from 'react';
import './Footer.css'; 
import ICfooter from '../../img/GUATTARI_logo_ver2.png';
import ICwhatsapp from '../../img/whatsapp.png';
import ICfacebook from '../../img/facebook.png';
import ICinstagram from '../../img/instagram.png';


function Footer() {
    return (
      <div className="footer-container">
        <footer className="d-flex flex-wrap justify-content-between align-items-start border-top footer-columns">
          
          <div className="col mb-3">
            <h5 className="footer-section-title">Conócenos</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Nuestra Historia</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Misión y Visión</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0">FAQs</a></li>
            </ul>
          </div>
  
          <div className="col mb-3">
            <h5 className="footer-section-title">Nuestras políticas</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Términos de privacidad</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Términos y condiciones</a></li>
            </ul>
          </div>
  
          <div className="col mb-3">
            <h5 className="footer-section-title">Servicio al cliente</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Contáctenos</a></li>
            </ul>
          </div>
  
          <div className="footer-right d-flex flex-column align-items-end">
            <img src={ICfooter} alt="GUATTARI Logo" className="icono-footer" />
            <p className="text-body-secondary">© 2025</p>
          </div>
        </footer>
  
        <div className="socials d-flex justify-content-left mt-0">
          <img src={ICwhatsapp} alt="whatsapp" className="icono-social" />
          <img src={ICfacebook} alt="facebook" className="icono-social" />
          <img src={ICinstagram} alt="instagram" className="icono-social" />
        </div>
      </div>
    );
  }
  
  export default Footer;
  