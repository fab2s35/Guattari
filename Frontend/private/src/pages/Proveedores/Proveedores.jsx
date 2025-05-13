import React from 'react';
import { Search, PlusCircle, Edit, Trash2 } from 'lucide-react';
import './Proveedores.css';
import contenedorImg from '../../img/contenedor.png'; // Ruta ajustada para la carpeta img

export default function Proveedores() {
  // Datos de ejemplo solo para visualización
  const proveedoresEjemplo = [
    { id: 1, nombre: "Maderas del Norte", email: "contacto@maderasnorte.com", telefono: "+503 2345 6789", ubicacion: "Nacional" },
    { id: 2, nombre: "Maderas del Sur", email: "contacto@maderassur.com", telefono: "+503 2345 6789", ubicacion: "Nacional" },
    { id: 3, nombre: "Maderas del Este", email: "contacto@maderaseste.com", telefono: "+503 2345 6789", ubicacion: "Nacional" },
    { id: 4, nombre: "Maderas del Oeste", email: "contacto@maderasoeste.com", telefono: "+503 2345 6789", ubicacion: "Nacional" },
    { id: 5, nombre: "Maderas del Centro", email: "contacto@maderascentro.com", telefono: "+503 2345 6789", ubicacion: "Nacional" },
    { id: 6, nombre: "Maderas Importadas", email: "contacto@maderasimportadas.com", telefono: "+503 2345 6789", ubicacion: "Nacional" },
    { id: 7, nombre: "Maderas del Valle", email: "contacto@maderasvalle.com", telefono: "+503 2345 6789", ubicacion: "Nacional" },
    { id: 8, nombre: "Maderas Exportadas", email: "contacto@maderasexportadas.com", telefono: "+503 2345 6789", ubicacion: "Nacional" },
  ];

  return (
    <div className="proveedores-container">
      {/* Espacio para la imagen en la parte superior */}
      <div className="image-container">
        <img src={contenedorImg} alt="Contenedor de carga" className="header-image" />
      </div>
      
      <div className="header">
        <h1>Listado de proveedores</h1>
        <div className="separator"></div>
      </div>

      <div className="content-container">
        <div className="search-container">
          <div className="search-input-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Buscar..."
              className="search-input"
            />
          </div>
          <button className="add-button">
            <PlusCircle className="add-icon" />
            <span>Agregar Proveedor</span>
          </button>
        </div>

        <div className="table-container">
          <table className="providers-table">
            <thead>
              <tr>
                <th>Proveedor</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Ubicación</th>
                <th className="actions-column">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {proveedoresEjemplo.map((proveedor) => (
                <tr key={proveedor.id}>
                  <td>{proveedor.nombre}</td>
                  <td>{proveedor.email}</td>
                  <td>{proveedor.telefono}</td>
                  <td>{proveedor.ubicacion}</td>
                  <td className="actions-cell">
                    <div className="action-buttons">
                      <button className="edit-button">
                        <Edit className="action-icon" />
                      </button>
                      <button className="delete-button">
                        <Trash2 className="action-icon" />
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
  );
}