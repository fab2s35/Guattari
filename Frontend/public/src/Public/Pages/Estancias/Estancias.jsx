import React from 'react';
import { Link } from 'react-router-dom';
import './Estancias.css';


const Estancias = () => {
  // Estancias
  const categorias = [
    { id: 1, nombre: 'Salas', imagen: '/src/img/Estancias/1.png' },
    { id: 2, nombre: 'Dormitorios', imagen: '/src/img/Estancias/2.png' },
    { id: 3, nombre: 'Comedores', imagen: '/src/img/Estancias/3.png' },
    { id: 4, nombre: 'Cocina + Bar', imagen: '/src/img/Estancias/4.png' },
    { id: 5, nombre: 'Decoraciones del hogar', imagen: '/src/img/Estancias/5.png' },
    { id: 6, nombre: 'Baño', imagen: '/src/img/Estancias/6.png' },
    { id: 7, nombre: 'Iluminación', imagen: '/src/img/Estancias/7.png' },
  ];

  // Datos de la sección promocional
  const promocionales = [
    { 
      id: 1, 
      imagen: '/src/img/Estancias/a.png', 
      texto: 'A burst of Colour'
    },
    { 
      id: 2, 
      imagen: '/src/img/Estancias/b.png', 
      texto: 'Love in All'
    },
    { 
      id: 3, 
      imagen: '/src/img/Estancias/c.png', 
      texto: 'Let yourself Revive'
    },
  ];

  return (
    <div className="estancias-container">
      {/* Título de la sección */}
      <h1 className="estancias-title">Estancias</h1>
      <hr className="estancias-divider" />

      {/* Grid de categorías */}
      <div className="categorias-grid">
        {categorias.map((categoria) => (
          <Link 
            to="/productos" /* Cambié la ruta para que siempre apunte a /productos */
            className="categoria-item" 
            key={categoria.id}
          >
            <div className="categoria-imagen-container">
              <img 
                src={categoria.imagen} 
                alt={categoria.nombre} 
                className="categoria-imagen" 
              />
            </div>
            <p className="categoria-nombre">{categoria.nombre}</p>
          </Link>
        ))}
      </div>

      {/* Sección de marca */}
      <h2 className="marca-title">Guattari</h2>
      <hr className="estancias-divider" />

      {/* Sección promocional */}
      <div className="promocionales-grid">
        {promocionales.map((promo) => (
          <div className="promocional-item" key={promo.id}>
            <div className="promocional-imagen-container">
              <img 
                src={promo.imagen} 
                alt="Promoción" 
                className="promocional-imagen" 
              />
              <div className="promocional-texto">
                <p>{promo.texto}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Estancias;