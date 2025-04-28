import React from 'react';
import { Link, useParams } from 'react-router-dom'; // useParams para obtener el id de la URL
import './Categoria.css';

const Categoria = () => {
  const { id } = useParams(); // Usar useParams para obtener el id de la URL
  
  // Definir los datos de las categorías
  const categorias = [
    { id: 1, nombre: 'Salas', descripcion: 'Aquí encuentras salas modernas.', imagen: '/src/img/Estancias/1.png' },
    { id: 2, nombre: 'Dormitorios', descripcion: 'Encuentra dormitorios cómodos.', imagen: '/src/img/Estancias/2.png' },
    { id: 3, nombre: 'Comedores', descripcion: 'Comedores elegantes.', imagen: '/src/img/Estancias/3.png' },
    { id: 4, nombre: 'Cocina + Bar', descripcion: 'Diseños de cocina y bar.', imagen: '/src/img/Estancias/4.png' },
    { id: 5, nombre: 'Decoraciones del hogar', descripcion: 'Accesorios decorativos.', imagen: '/src/img/Estancias/5.png' },
    { id: 6, nombre: 'Baño', descripcion: 'Baños modernos y funcionales.', imagen: '/src/img/Estancias/6.png' },
    { id: 7, nombre: 'Iluminación', descripcion: 'Iluminación elegante.', imagen: '/src/img/Estancias/7.png' },
  ];

  // Buscar la categoría con el id de la URL
  const categoria = categorias.find(cat => cat.id === parseInt(id));

  if (!categoria) {
    return <h2>Categoría no encontrada</h2>; // Si no se encuentra la categoría, mostramos un mensaje
  }

  return (
    <div className="categoria-container">
      <h1>{categoria.nombre}</h1>
      <img src={categoria.imagen} alt={categoria.nombre} className="categoria-imagen" />
      <p>{categoria.descripcion}</p>
      
      {/* Botón para volver */}
      <Link to="/estancias" className="volver-btn">← Volver a Estancias</Link>
    </div>
  );
};

export default Categoria;
