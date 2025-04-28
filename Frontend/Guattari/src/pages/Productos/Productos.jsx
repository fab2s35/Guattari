import React from 'react';
import './Productos.css'; // Asegúrate de tener este archivo CSS para los estilos

const Procuctos = () => {
  // Datos estáticos de productos
  const productos = [
    {
      id: 1,
      nombre: 'Sofá 2 piezas KLIPPAN rojo vivo',
      precio: 339.00,
      imagen: '/src/img/Estancias/1.png',
      colores: ['rojo', 'amarillo', 'azul', 'verde']
    },
    {
      id: 2,
      nombre: 'Sofá 2 piezas VANITY azul - rosa',
      precio: 359.00,
      imagen: '/src/img/Estancias/1.png',
      colores: ['morado', 'gris', 'beige']
    },
    {
      id: 3,
      nombre: 'Sofá 2 piezas DUBAI azul marino',
      precio: 399.00,
      imagen: '/src/img/Estancias/1.png',
      colores: ['azul']
    },
    {
      id: 4,
      nombre: 'Silla 2-1-1 KINDLA esmeralda',
      precio: 579.00,
      imagen: '/src/img/Estancias/1.png',
      colores: ['verde']
    },
    {
      id: 5,
      nombre: 'Sala 3-1-1 CAMELOT naranja marino',
      precio: 699.00,
      imagen: '/src/img/Estancias/1.png',
      colores: ['naranja', 'amarillo']
    },
    {
      id: 6,
      nombre: 'Sala 3-2 SILENCE verde claro',
      precio: 1449.00,
      imagen: '/src/img/Estancias/1.png',
      colores: ['beige', 'gris', 'azul']
    },
    {
      id: 7,
      nombre: 'Sala 3-2 ZAFIRO',
      precio: 799.00,
      imagen: '/src/img/Estancias/1.png',
      colores: ['azul']
    },
    {
      id: 8,
      nombre: 'Sofá GRETA XL negro',
      precio: 399.00,
      imagen: '/src/img/Estancias/1.png',
      colores: ['rojo']
    }
  ];
  
  // Asignar clase de color a cada color disponible
  const getColorClass = (color) => {
    const colorMap = {
      'rojo': 'color-rojo',
      'amarillo': 'color-amarillo',
      'azul': 'color-azul',
      'verde': 'color-verde',
      'morado': 'color-morado',
      'gris': 'color-gris',
      'beige': 'color-beige',
      'naranja': 'color-naranja',
      'marron': 'color-marron',
      'vino': 'color-vino',
      'negro': 'color-negro'
    };
    
    return colorMap[color] || '';
  };

  return (
    <div className="productos-container">
      <div className="breadcrumb">
        <span>Estancias</span> / <span>Salas</span> / <span>Sofás</span>
      </div>

      <h1 className="productos-titulo">Sofás</h1>
      <hr className="productos-divider" />
      
      {/* Grid de productos */}
      <div className="productos-grid">
        {productos.map((producto) => (
          <div className="producto-card" key={producto.id}>
            <div className="producto-imagen-container">
              <img 
                src={producto.imagen} 
                alt={producto.nombre} 
                className="producto-imagen" 
              />
            </div>
            <div className="producto-info">
              <h3 className="producto-nombre">{producto.nombre}</h3>
              <p className="producto-precio">$ {producto.precio.toFixed(2)}</p>
              
              <div className="producto-colores">
                {producto.colores.map((color, index) => (
                  <span 
                    key={index} 
                    className={`color-circulo ${getColorClass(color)}`} 
                  ></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="paginacion">
        <button className="paginacion-btn">&lt;</button>
        <span className="paginacion-info">1 / 2</span>
        <button className="paginacion-btn">&gt;</button>
      </div>
    </div>
  );
};

export default Procuctos;