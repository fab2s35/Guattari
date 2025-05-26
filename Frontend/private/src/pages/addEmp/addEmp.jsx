import React from 'react';
import '../addEmp/addEmp.css';

const AgregarEmpleados = () => {
  return (
    <div className="agregar-empleados-container">
      <div className="content-wrapper">
        <h1 className="page-title">Agregar empleados</h1>
        
        <div className="form-container">
          <div className="form-card">
            <div className="form-group">
              <label htmlFor="nombres" className="form-label">Nombres</label>
              <input 
                type="text" 
                id="nombres" 
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="apellidos" className="form-label">Apellidos</label>
              <input 
                type="text" 
                id="apellidos" 
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono" className="form-label">Teléfono</label>
              <input 
                type="tel" 
                id="telefono" 
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="posicion" className="form-label">Posición</label>
              <div className="select-wrapper">
                <select id="posicion" className="form-select">
                  <option value="">Seleccionar posición</option>
                  <option value="gerente">Gerente</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="empleado">Empleado</option>
                  <option value="asistente">Asistente</option>
                </select>
              </div>
            </div>

            <button type="button" className="submit-button">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarEmpleados;