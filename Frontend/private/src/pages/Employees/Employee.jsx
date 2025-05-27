import React, { useState, useEffect } from 'react';
import '../Employees/Employe.css';

const EmpleadosCRUD = () => {
  const [empleados, setEmpleados] = useState([
    {
      id: 1,
      nombres: "Mariana",
      apellidos: "López",
      edad: 26,
      email: "marit.o@gmail.com",
      telefono: "7123 4567",
      posicion: "Vendedora",
      contrasena: "***********"
    },
    {
      id: 2,
      nombres: "Carlos",
      apellidos: "Martínez",
      edad: 30,
      email: "carlos.m@gmail.com",
      telefono: "7123 8901",
      posicion: "Gerente",
      contrasena: "***********"
    },
    {
      id: 3,
      nombres: "Ana",
      apellidos: "García",
      edad: 28,
      email: "ana.g@gmail.com",
      telefono: "7123 2345",
      posicion: "Supervisor",
      contrasena: "***********"
    }
  ]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [empleadoEditando, setEmpleadoEditando] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [formulario, setFormulario] = useState({
    nombres: '',
    apellidos: '',
    telefono: '',
    posicion: '',
    email: '',
    edad: '',
    contrasena: ''
  });

  // Filtrar empleados por búsqueda
  const empleadosFiltrados = empleados.filter(empleado =>
    empleado.nombres.toLowerCase().includes(busqueda.toLowerCase()) ||
    empleado.apellidos.toLowerCase().includes(busqueda.toLowerCase()) ||
    empleado.email.toLowerCase().includes(busqueda.toLowerCase()) ||
    empleado.posicion.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Manejar cambios en el formulario
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Limpiar formulario
  const limpiarFormulario = () => {
    setFormulario({
      nombres: '',
      apellidos: '',
      telefono: '',
      posicion: '',
      email: '',
      edad: '',
      contrasena: ''
    });
    setEmpleadoEditando(null);
  };

  // Agregar nuevo empleado
  const agregarEmpleado = () => {
    if (!formulario.nombres || !formulario.apellidos || !formulario.telefono || !formulario.posicion) {
      alert('Por favor, completa todos los campos obligatorios');
      return;
    }

    const nuevoEmpleado = {
      id: Date.now(),
      ...formulario,
      email: formulario.email || `${formulario.nombres.toLowerCase()}.${formulario.apellidos.toLowerCase()}@empresa.com`,
      edad: formulario.edad || Math.floor(Math.random() * 20) + 25,
      contrasena: formulario.contrasena || '***********'
    };

    setEmpleados(prev => [...prev, nuevoEmpleado]);
    limpiarFormulario();
    setMostrarFormulario(false);
    alert('Empleado agregado exitosamente');
  };

  // Editar empleado
  const editarEmpleado = (empleado) => {
    setFormulario({
      nombres: empleado.nombres,
      apellidos: empleado.apellidos,
      telefono: empleado.telefono,
      posicion: empleado.posicion,
      email: empleado.email,
      edad: empleado.edad.toString(),
      contrasena: empleado.contrasena
    });
    setEmpleadoEditando(empleado.id);
    setMostrarFormulario(true);
  };

  // Actualizar empleado
  const actualizarEmpleado = () => {
    if (!formulario.nombres || !formulario.apellidos || !formulario.telefono || !formulario.posicion) {
      alert('Por favor, completa todos los campos obligatorios');
      return;
    }

    setEmpleados(prev => prev.map(emp => 
      emp.id === empleadoEditando 
        ? { ...emp, ...formulario, edad: parseInt(formulario.edad) || emp.edad }
        : emp
    ));
    
    limpiarFormulario();
    setMostrarFormulario(false);
    alert('Empleado actualizado exitosamente');
  };

  // Eliminar empleado
  const eliminarEmpleado = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este empleado?')) {
      setEmpleados(prev => prev.filter(emp => emp.id !== id));
      alert('Empleado eliminado exitosamente');
    }
  };

  // Manejar envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();
    if (empleadoEditando) {
      actualizarEmpleado();
    } else {
      agregarEmpleado();
    }
  };

  return (
    <div className="empleados-container">
      <div className="content-wrapper">
        <h1 className="page-title">Gestión de Empleados</h1>
        
        {/* Imagen Hero */}
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            alt="Equipo de trabajo colaborativo"
            className="hero-img"
          />
        </div>

        {/* Formulario Modal */}
        {mostrarFormulario && (
          <div className="modal-overlay" onClick={() => {
            setMostrarFormulario(false);
            limpiarFormulario();
          }}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="form-container">
                <div className="form-card">
                  <div className="form-header">
                    <h2>{empleadoEditando ? 'Editar Empleado' : 'Agregar Empleado'}</h2>
                    <button 
                      className="close-btn"
                      onClick={() => {
                        setMostrarFormulario(false);
                        limpiarFormulario();
                      }}
                    >
                      ×
                    </button>
                  </div>
                  
                  <form onSubmit={manejarEnvio}>
                    <div className="form-group">
                      <label htmlFor="nombres" className="form-label">Nombres *</label>
                      <input 
                        type="text" 
                        id="nombres"
                        name="nombres"
                        value={formulario.nombres}
                        onChange={manejarCambio}
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="apellidos" className="form-label">Apellidos *</label>
                      <input 
                        type="text" 
                        id="apellidos"
                        name="apellidos"
                        value={formulario.apellidos}
                        onChange={manejarCambio}
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="telefono" className="form-label">Teléfono *</label>
                      <input 
                        type="tel" 
                        id="telefono"
                        name="telefono"
                        value={formulario.telefono}
                        onChange={manejarCambio}
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formulario.email}
                        onChange={manejarCambio}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="edad" className="form-label">Edad</label>
                      <input 
                        type="number" 
                        id="edad"
                        name="edad"
                        value={formulario.edad}
                        onChange={manejarCambio}
                        className="form-input"
                        min="18"
                        max="65"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="posicion" className="form-label">Posición *</label>
                      <div className="select-wrapper">
                        <select 
                          id="posicion" 
                          name="posicion"
                          value={formulario.posicion}
                          onChange={manejarCambio}
                          className="form-select"
                          required
                        >
                          <option value="">Seleccionar posición</option>
                          <option value="Gerente">Gerente</option>
                          <option value="Supervisor">Supervisor</option>
                          <option value="Empleado">Empleado</option>
                          <option value="Asistente">Asistente</option>
                          <option value="Vendedora">Vendedora</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-buttons">
                      <button type="button" className="cancel-button" onClick={() => {
                        setMostrarFormulario(false);
                        limpiarFormulario();
                      }}>
                        Cancelar
                      </button>
                      <button type="submit" className="submit-button">
                        {empleadoEditando ? 'Actualizar' : 'Agregar'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        <h2 className="section-title">Listado de empleados ({empleadosFiltrados.length})</h2>

        {/* Barra de búsqueda y botón agregar */}
        <div className="search-section" >
          <div className="search-container">
            <div className="search-input-wrapper">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input 
                type="text" 
                placeholder="Buscar empleados..." 
                className="search-input"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
          </div>
          <button
            className="add-employee-btn"
            onClick={() => setMostrarFormulario(true)}
          >
            <span className="plus-icon">+</span>
            Agregar Empleado
          </button>
        </div>

        {/* Tabla de empleados */}
        <div className="table-container">
          <table className="employees-table">
            <thead>
              <tr>
                <th>Foto</th>
                <th>Nombre Completo</th>
                <th>Edad</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Puesto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {empleadosFiltrados.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>
                    {busqueda ? 'No se encontraron empleados que coincidan con la búsqueda' : 'No hay empleados registrados'}
                  </td>
                </tr>
              ) : (
                empleadosFiltrados.map((empleado) => (
                  <tr key={empleado.id}>
                    <td>
                      <div className="avatar">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </td>
                    <td>{`${empleado.nombres} ${empleado.apellidos}`}</td>
                    <td>{empleado.edad}</td>
                    <td>{empleado.email}</td>
                    <td>{empleado.telefono}</td>
                    <td>{empleado.posicion}</td>
                    <td>
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
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpleadosCRUD;