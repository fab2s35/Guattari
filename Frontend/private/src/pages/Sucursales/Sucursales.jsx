import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Agrega este import
import './Sucursales.css';
import containerImage from '../../img/map.png'; // Asegúrate de tener la imagen en esta ruta

const Sucursales = () => {
  const [sucursales, setSucursales] = useState([
    { id: 1, nombre: 'Sucursal Central', direccion: 'Calle Principal #123', telefono: '+503 2345 6789', encargado: 'Juan Pérez' },
    { id: 2, nombre: 'Sucursal Norte', direccion: 'Avenida Norte #456', telefono: '+503 2345 6789', encargado: 'María López' },
    { id: 3, nombre: 'Sucursal Sur', direccion: 'Boulevard Sur #789', telefono: '+503 2345 6789', encargado: 'Carlos Ramírez' },
    { id: 4, nombre: 'Sucursal Oriente', direccion: 'Calle Oriente #101', telefono: '+503 2345 6789', encargado: 'Ana Martínez' },
    { id: 5, nombre: 'Sucursal Poniente', direccion: 'Avenida Poniente #202', telefono: '+503 2345 6789', encargado: 'Roberto Gómez' },
    { id: 6, nombre: 'Sucursal Centro', direccion: 'Plaza Central #303', telefono: '+503 2345 6789', encargado: 'Lucía Hernández' },
    { id: 7, nombre: 'Sucursal Comercial', direccion: 'Centro Comercial #404', telefono: '+503 2345 6789', encargado: 'Daniel Castro' },
    { id: 8, nombre: 'Sucursal Industrial', direccion: 'Zona Industrial #505', telefono: '+503 2345 6789', encargado: 'Sofía Mendoza' },
  ]);

  const navigate = useNavigate(); // Hook para navegación

  // Esta función sería implementada más adelante para la funcionalidad
  const handleDelete = (id) => {
    console.log(`Eliminar sucursal con ID: ${id}`);
  };

  // Esta función sería implementada más adelante para la funcionalidad
  const handleEdit = (id) => {
    console.log(`Editar sucursal con ID: ${id}`);
  };

  return (
    <div className="sucursales-container">
      <h1 className="sucursales-title">Sucursales</h1>
      <hr className="divider" />
      
      <div className="banner-container">
        <img src={containerImage} alt="Imagen de sucursales" className="banner-image" />
      </div>
      
      <div className="sucursales-content">
        <h2 className="sucursales-subtitle">Listado de sucursales</h2>
        
        <div className="sucursales-panel">
          <div className="search-add-container">
            <div className="search-container">
              <i className="search-icon"></i>
              <input type="text" placeholder="Buscar..." className="search-input" />
            </div>
            <button
              className="add-button"
              onClick={() => navigate('/branch')}
            >
              <span className="plus-icon">+</span> Agregar Sucursal
            </button>
          </div>
          
          <div className="sucursales-table-container">
            <table className="sucursales-table">
              <thead>
                <tr>
                  <th>Sucursal</th>
                  <th>Dirección</th>
                  <th>Teléfono</th>
                  <th>Encargado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {sucursales.map((sucursal) => (
                  <tr key={sucursal.id}>
                    <td>{sucursal.nombre}</td>
                    <td>{sucursal.direccion}</td>
                    <td>{sucursal.telefono}</td>
                    <td>{sucursal.encargado}</td>
                    <td className="actions-cell">
                      <button 
                        className="action-button edit-button" 
                        onClick={() => handleEdit(sucursal.id)}
                      >
                        <i className="edit-icon">✏️</i>
                      </button>
                      <button 
                        className="action-button delete-button" 
                        onClick={() => handleDelete(sucursal.id)}
                      >
                        <i className="delete-icon">🗑️</i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sucursales;