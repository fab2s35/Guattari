import React, { useState, useEffect } from 'react';
import './employe.css';
 
const EmployeesCRUD = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    assignedPosition: '',
    branchAddressId: '',
    passwordUser: ''
  });
  const [loading, setLoading] = useState(false);
 
  // Cargar empleados al montar el componente
  useEffect(() => {
    fetchEmployees();
  }, []);
 
  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:4000/api/employees');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    } finally {
      setLoading(false);
    }
  };
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
 
  const resetForm = () => {
    setFormData({
      name: '',
      lastName: '',
      phone: '',
      assignedPosition: '',
      branchAddressId: '',
      passwordUser: ''
    });
    setEditingEmployee(null);
  };
 
  const openModal = (employee = null) => {
    if (employee) {
      setEditingEmployee(employee);
      setFormData({
        name: employee.name,
        lastName: employee.lastName,
        phone: employee.phone,
        assignedPosition: employee.assignedPosition,
        branchAddressId: employee.branchAddressId,
        passwordUser: employee.passwordUser
      });
    } else {
      resetForm();
    }
    setIsModalOpen(true);
  };
 
  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };
 
  const handleSubmit = async () => {
    setLoading(true);
 
    try {
      if (editingEmployee) {
        // UPDATE
        const response = await fetch(`http://localhost:4000/api/employees/${editingEmployee._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
 
        if (!response.ok) {
          throw new Error(`Error updating employee: ${response.status}`);
        }
       
        // Actualizar el empleado editado en el estado
        setEmployees(prev => prev.map(employee =>
          employee._id === editingEmployee._id
            ? { ...employee, ...formData }
            : employee
        ));
      } else {
        // CREATE
        const response = await fetch('http://localhost:4000/api/employees', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
       
        if (!response.ok) {
          throw new Error(`Error creating employee: ${response.status}`);
        }
 
        const newEmployee = await response.json();
        console.log('New employee created:', newEmployee);
       
        // Verificar que el empleado tenga _id
        if (newEmployee && newEmployee._id) {
          setEmployees(prev => [...prev, newEmployee]);
        } else {
          // Si no viene el _id completo, refrescar todos los empleados
          console.warn('New employee missing _id, refreshing all employees');
          await fetchEmployees();
        }
      }
     
      closeModal();
    } catch (error) {
      console.error('Error saving employee:', error);
      alert('Error al guardar el empleado. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };
 
  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este empleado?')) {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:4000/api/employees/${id}`, {
          method: 'DELETE'
        });
       
        if (!response.ok) {
          throw new Error(`Error deleting employee: ${response.status}`);
        }
       
        setEmployees(prev => prev.filter(employee => employee._id !== id));
      } catch (error) {
        console.error('Error deleting employee:', error);
        alert('Error al eliminar el empleado. Por favor, intenta de nuevo.');
      } finally {
        setLoading(false);
      }
    }
  };
 
  return (
    <div className="employees-crud-container">
      <div className="employees-crud-wrapper">
        {/* Header */}
        <div className="header">
          <h1>Gestión de Empleados</h1>
          <p>Administra tu equipo de trabajo</p>
        </div>
 
        {/* Add Employee Button */}
        <div className="add-button-container">
          <button
            onClick={() => openModal()}
            className="add-button"
            disabled={loading}
          >
            <span className="plus-icon">+</span>
            Agregar Empleado
          </button>
        </div>
 
        {/* Employees Grid */}
        {loading && employees.length === 0 ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Cargando empleados...</p>
          </div>
        ) : (
          <div className="employees-grid">
            {employees.map((employee) => (
              <div key={employee._id} className="employee-card">
                <div className="employee-header">
                  <div className="employee-name">
                    <h3>{employee.name} {employee.lastName}</h3>
                    <span className="position-badge">
                      {employee.assignedPosition}
                    </span>
                  </div>
                </div>
               
                <div className="employee-details">
                  <div className="detail-item">
                    <span className="label">📞 Teléfono:</span>
                    <span className="value">{employee.phone}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">🏢 Sucursal ID:</span>
                    <span className="value">{employee.branchAddressId}</span>
                  </div>
                </div>
 
                <div className="employee-actions">
                  <button
                    onClick={() => openModal(employee)}
                    className="edit-button"
                    disabled={loading}
                  >
                    ✏️ Editar
                  </button>
                  <button
                    onClick={() => handleDelete(employee._id)}
                    className="delete-button"
                    disabled={loading}
                  >
                    🗑️ Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
 
        {employees.length === 0 && !loading && (
          <div className="empty-state">
            <p className="empty-title">No hay empleados registrados</p>
            <p className="empty-subtitle">Agrega tu primer empleado para comenzar</p>
          </div>
        )}
 
        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h2>{editingEmployee ? 'Editar Empleado' : 'Nuevo Empleado'}</h2>
                <button
                  onClick={closeModal}
                  className="close-button"
                >
                  ✕
                </button>
              </div>
 
              <div className="modal-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ej: Juan"
                      required
                    />
                  </div>
 
                  <div className="form-group">
                    <label>Apellido</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Ej: Pérez"
                      required
                    />
                  </div>
                </div>
 
                <div className="form-group">
                  <label>Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Ej: +1234567890"
                    required
                  />
                </div>
 
                <div className="form-group">
                  <label>Posición Asignada</label>
                  <select
                    name="assignedPosition"
                    value={formData.assignedPosition}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Seleccionar posición</option>
                    <option value="Gerente">Gerente</option>
                    <option value="Supervisor">Supervisor</option>
                    <option value="Cajero">Cajero</option>
                    <option value="Dealer">Dealer</option>
                    <option value="Seguridad">Seguridad</option>
                    <option value="Limpieza">Limpieza</option>
                    <option value="Recepcionista">Recepcionista</option>
                  </select>
                </div>
 
                <div className="form-group">
                  <label>ID de Sucursal</label>
                  <input
                    type="text"
                    name="branchAddressId"
                    value={formData.branchAddressId}
                    onChange={handleInputChange}
                    placeholder="Ej: BRANCH-001"
                    required
                  />
                </div>
 
                <div className="form-group">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    name="passwordUser"
                    value={formData.passwordUser}
                    onChange={handleInputChange}
                    placeholder="Contraseña del usuario"
                    required
                  />
                </div>
 
                <div className="modal-actions">
                  <button
                    onClick={closeModal}
                    className="cancel-button"
                    disabled={loading}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="save-button"
                  >
                    {loading ? (
                      <div className="button-spinner"></div>
                    ) : (
                      <>
                        💾 {editingEmployee ? 'Actualizar' : 'Guardar'}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
 
export default EmployeesCRUD;