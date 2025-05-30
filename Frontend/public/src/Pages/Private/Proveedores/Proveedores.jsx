import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Agrega este import
import './Proveedores.css';
import containerImage from '../../../img/imgPrivate/Inventory-Product-List/contenedor.png'; // Asegúrate de tener la imagen en esta ruta

const Proveedores = () => {
  const [proveedores, setProveedores] = useState([
    { id: 1, nombre: 'Maderas del Norte', email: 'contacto@maderasnorte.com', telefono: '+503 2345 6789', ubicacion: 'Nacional' },
    { id: 2, nombre: 'Maderas del Norte', email: 'contacto@maderasnorte.com', telefono: '+503 2345 6789', ubicacion: 'Nacional' },
    { id: 3, nombre: 'Maderas del Norte', email: 'contacto@maderasnorte.com', telefono: '+503 2345 6789', ubicacion: 'Nacional' },
    { id: 4, nombre: 'Maderas del Norte', email: 'contacto@maderasnorte.com', telefono: '+503 2345 6789', ubicacion: 'Nacional' },
    { id: 5, nombre: 'Maderas del Norte', email: 'contacto@maderasnorte.com', telefono: '+503 2345 6789', ubicacion: 'Nacional' },
    { id: 6, nombre: 'Maderas del Norte', email: 'contacto@maderasnorte.com', telefono: '+503 2345 6789', ubicacion: 'Nacional' },
    { id: 7, nombre: 'Maderas del Norte', email: 'contacto@maderasnorte.com', telefono: '+503 2345 6789', ubicacion: 'Nacional' },
    { id: 8, nombre: 'Maderas del Norte', email: 'contacto@maderasnorte.com', telefono: '+503 2345 6789', ubicacion: 'Nacional' },
  ]);

  const navigate = useNavigate(); // Hook para navegación

  // Esta función sería implementada más adelante para la funcionalidad
  const handleDelete = (id) => {
    console.log(`Eliminar proveedor con ID: ${id}`);
  };

  // Esta función sería implementada más adelante para la funcionalidad
  const handleEdit = (id) => {
    console.log(`Editar proveedor con ID: ${id}`);
  };

  return (
    <div className="proveedores-container">
      <h1 className="proveedores-title">Proveedores</h1>
      <hr className="divider" />
      
      <div className="banner-container">
        <img src={containerImage} alt="Contenedores de carga" className="banner-image" />
      </div>
      
      <div className="proveedores-content">
        <h2 className="proveedores-subtitle">Listado de proveedores</h2>
        
        <div className="proveedores-panel">
          <div className="search-add-container">
            <div className="search-container">
              <input type="text" placeholder="Buscar..." className="search-input" />
            </div>
            <button 
              className="add-button"
              onClick={() => navigate('/supplier')}
            >
              <span className="plus-icon">+</span> Agregar Proveedor
            </button>
          </div>
          
          <div className="proveedores-table-container">
            <table className="proveedores-table">
              <thead>
                <tr>
                  <th>Proveedor</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                  <th>Ubicación</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {proveedores.map((proveedor) => (
                  <tr key={proveedor.id}>
                    <td>{proveedor.nombre}</td>
                    <td>{proveedor.email}</td>
                    <td>{proveedor.telefono}</td>
                    <td>{proveedor.ubicacion}</td>
                    <td className="actions-cell">
                                            <div className="action-buttons">
                        <button 
                          className="edit-btn"
                          onClick={() => editarEmpleado(empleado)}
                          title="Editar empleado"
                        >
                          ✎
                        </button>
                        <button 
                          className="delete-btn"
                          onClick={() => eliminarEmpleado(empleado.id)}
                          title="Eliminar empleado"
                        >
                          🗑
                        </button>
                      </div>
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

export default Proveedores;