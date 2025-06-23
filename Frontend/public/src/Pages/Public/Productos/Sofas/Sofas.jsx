import React from 'react';
import './Sofas.css'; // Asegúrate de tener este archivo CSS para los estilos 


const Sofas = () => {
  // Datos estáticos de productos
  const productos = [
    {
      id: 1,
      nombre: 'Macy Sofá Modular',
      precio: 799.00,
      imagen: '/src/img/Salas-Sofas/Sofa1.jpg',
      colores: ['beige', 'green']
    },
    {
      id: 2,
      nombre: 'Burrard Sofá',
      precio: 755.00,
      imagen: '/src/img/Salas-Sofas/Sofa2.jpg',
      colores: ['green', 'beige']
    },
    {
      id: 3,
      nombre: 'Kayra Sofá Ivory Bouclé',
      precio: 899.00,
      imagen: '/src/img/Salas-Sofas/Sofa3.jpg',
      colores: ['azul']
    },
    {
      id: 4,
      nombre: 'Kora Tufted Sillón Modular',
      precio: 1340.00,
      imagen: '/src/img/Salas-Sofas/Sofa4.jpg',
      colores: ['azul', 'beige']
    },
    {
      id: 5,
      nombre: 'Maia Sillón Seccional',
      precio: 1119.00,
      imagen: '/src/img/Salas-Sofas/Sofa5.jpg',
      colores: ['marron', 'amarillo']
    },
    {
      id: 6,
      nombre: 'Leonelle velvet Daybed',
      precio: 1449.00,
      imagen: '/src/img/Salas-Sofas/Sofa6.jpg',
      colores: ['beige' ]
    },
    {
      id: 7,
      nombre: 'Serpentine Sofá asimetico',
      precio: 2300.00,
      imagen: '/src/img/Salas-Sofas/Sofa7.jpg',
      colores: ['green']
    },
    {
      id: 8,
      nombre: 'Rawhide Tan Sofá de cuero',
      precio: 1478.00,
      imagen: '/src/img/Salas-Sofas/Sofa8.jpg',
      colores: ['naranja']
    },
    {
      id: 8,
      nombre: 'Rawhide Tan Sofá de cuero',
      precio: 1478.00,
      imagen: '/src/img/Salas-Sofas/Sofa8.jpg',
      colores: ['naranja']
    },
    {
      id: 8,
      nombre: 'Rawhide Tan Sofá de cuero',
      precio: 1478.00,
      imagen: '/src/img/Salas-Sofas/Sofa8.jpg',
      colores: ['naranja']
    },
    {
      id: 8,
      nombre: 'Rawhide Tan Sofá de cuero',
      precio: 1478.00,
      imagen: '/src/img/Salas-Sofas/Sofa8.jpg',
      colores: ['naranja']
    },
    {
      id: 8,
      nombre: 'Rawhide Tan Sofá de cuero',
      precio: 1478.00,
      imagen: '/src/img/Salas-Sofas/Sofa8.jpg',
      colores: ['naranja']
    }
  ];
  
  // Asignar clase de color a cada color disponible
  const getColorClass = (color) => {
    const colorMap = {
      'rojo': 'color-rojo',
      'amarillo': 'color-amarillo',
      'azul': 'color-azul',
      'verde': 'color-verde',
      'green': 'color-green',
      'gris': 'color-gris',
      'beige': 'color-beige',
      'naranja': 'color-naranja',
      'marron': 'color-marron',
      'vino': 'color-vino',
      'negro': 'color-negro',
    };
    
    return colorMap[color] || '';
  };

  return (
    <div className="productos-container">
      <div className="breadcrumb">
        <span>Estancias </span> / <span> Salas </span> / <span> <b>Sofás</b></span>
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

        {producto.colores.length > 1 && (
          <div className="producto-colores">
            {producto.colores.map((color, index) => (
              <span 
                key={index} 
                className={`color-circulo ${getColorClass(color)}`} 
              ></span>
            ))}
          </div>
        )}
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

export default Sofas;