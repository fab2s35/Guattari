import React, { useState, useEffect } from 'react';
import './Employe.css';

const CustomersCRUD = () => {
  const [customers, setCustomers] = useState([]);
  const [ismodelOpen, setIsmodelOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    passwordUser: '',
    phone: '',
    assignedPosition: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:4000/api/employees');
      const data = await response.json();
      const validCustomers = data.filter(customer =>
        customer && customer.name && customer.lastname
      );
      setCustomers(validCustomers);
    } catch (error) {
      console.error('Error fetching customers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Solo permitir números en el campo de teléfono
    if (name === 'phone') {
      const numbersOnly = value.replace(/\D/g, '');
      if (numbersOnly.length <= 10) {
        setFormData(prev => ({
          ...prev,
          [name]: numbersOnly
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      lastname: '',
      passwordUser: '',
      phone: '',
      assignedPosition: ''
    });
    setEditingCustomer(null);
    setShowPassword(false);
  };

  const openmodel = (customer = null) => {
    if (customer) {
      setEditingCustomer(customer);
      setFormData({
        name: customer.name || '',
        lastname: customer.lastname || '',
        passwordUser: '',
        phone: customer.phone || '',
        assignedPosition: customer.assignedPosition || ''
      });
    } else {
      resetForm();
    }
    setIsmodelOpen(true);
  };

  const closemodel = () => {
    setIsmodelOpen(false);
    resetForm();
  };

  const handleSubmit = async () => {
  const { name, lastname, passwordUser, phone, assignedPosition } = formData;

  // Validación de campos vacíos
  if (
    !name.trim() ||
    !lastname.trim() ||
    (!editingCustomer && !passwordUser.trim()) ||
    !phone.trim() ||
    !assignedPosition.trim()
  ) {
    alert('Por favor, completa todos los campos obligatorios.');
    return;
  }

  setLoading(true);
  try {
    if (editingCustomer) {
      const updateData = {
        name,
        lastname,
        passwordUser,
        phone,
        assignedPosition
      };

      await fetch(`http://localhost:4000/api/employees/${editingCustomer._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData)
      });

      setCustomers(prev => prev.map(customer =>
        customer._id === editingCustomer._id
          ? { ...customer, ...updateData }
          : customer
      ));
    } else {
      await fetch('http://localhost:4000/api/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      await fetchCustomers(); // Recarga la lista completa
    }

    closemodel();
  } catch (error) {
    console.error('Error saving Empleado:', error);
  } finally {
    setLoading(false);
  }
};



  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este Empleado?')) {
      setLoading(true);
      try {
        await fetch(`http://localhost:4000/api/employees/${id}`, { method: 'DELETE' });
        setCustomers(prev => prev.filter(customer => customer._id !== id));
      } catch (error) {
        console.error('Error deleting Empleado:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const getCustomerInitial = (name) => {
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return '?';
    }
    return name.trim().charAt(0).toUpperCase();
  };

  return (
    <div className="customers-crud-container">
      <div className="customers-crud-wrapper">
        <div className="header">
          <h1>Gestión de Empleados</h1>
          <p>Administra tus registros de Empleados</p>
        </div>

        <div className="add-button-container">
          <button onClick={() => openmodel()} className="add-button">
            <span className="plus-icon">+</span>
            Agregar Empleado
          </button>
        </div>

        {loading && customers.length === 0 ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Cargando Empleados...</p>
          </div>
        ) : (
          <div className="customers-grid">
            {customers.map((customer) => (
              <div key={customer._id} className="customer-card">
                <div className="customer-header">
                  <div className="customer-avatar">
                    <span>{getCustomerInitial(customer.name)}</span>
                  </div>
                  <div className="customer-info">
                    <h3>{`${customer.name || ''} ${customer.lastname || ''}`.trim() || 'Sin nombre'}</h3>
                  </div>
                </div>

                <div className="customer-details">
                  <div className="detail-item">
                    <span className="detail-label">Cargo:</span>
                    <span className="detail-value">{customer.assignedPosition || 'N/A'}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Teléfono:</span>
                    <span className="detail-value origin-badge">{customer.phone || 'No especificado'}</span>
                  </div>
                </div>

                <div className="customer-actions">
                  <button onClick={() => openmodel(customer)} className="edit-button">✏️ Editar</button>
                  <button onClick={() => handleDelete(customer._id)} className="delete-button">🗑️ Eliminar</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {customers.length === 0 && !loading && (
          <div className="empty-state">
            <p className="empty-title">No hay Empleados registrados</p>
            <p className="empty-subtitle">Agrega tu primer Empleado para comenzar</p>
          </div>
        )}

        {ismodelOpen && (
          <div className="model-overlay">
            <div className="model">
              <div className="model-header">
                <h2>{editingCustomer ? 'Editar Empleado' : 'Nuevo Empleado'}</h2>
                <button onClick={closemodel} className="close-button">✕</button>
              </div>

              <div className="model-form">
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
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    placeholder="Ej: Pérez"
                    required
                  />
                </div>

                <div className="form-group password-group">
                  <label>Contraseña</label>
                  <div className="password-wrapper">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="passwordUser"
                      value={formData.passwordUser}
                      onChange={handleInputChange}
                      placeholder={editingCustomer ? "Nueva contraseña (opcional)" : "Contraseña"}
                      required={!editingCustomer}
                      maxLength={10}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(prev => !prev)}
                      className="show-password-button"
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </button>
                  </div>
                  {editingCustomer && (
                    <small className="field-note">Dejar vacío para mantener la actual</small>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Teléfono</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Número de Teléfono"
                      maxLength={10}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Puesto de Trabajo</label>
                    <select
                      name="assignedPosition"
                      value={formData.assignedPosition}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Seleccionar puesto</option>
                      <option value="Administrador">Administrador</option>
                      <option value="Analista">Analista</option>
                      <option value="Asistente">Asistente</option>
                      <option value="Contador">Contador</option>
                      <option value="Desarrollador">Desarrollador</option>
                      <option value="Diseñador">Diseñador</option>
                      <option value="Ejecutivo de ventas">Ejecutivo de ventas</option>
                      <option value="Gerente">Gerente</option>
                      <option value="Ingeniero">Ingeniero</option>
                      <option value="Jefe de proyecto">Jefe de proyecto</option>
                      <option value="Recepcionista">Recepcionista</option>
                      <option value="Recursos Humanos">Recursos Humanos</option>
                      <option value="Técnico">Técnico</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="model-actions">
                  <button onClick={closemodel} className="cancel-button">Cancelar</button>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="save-button"
                  >
                    {loading ? (
                      <div className="button-spinner"></div>
                    ) : (
                      <>👤 {editingCustomer ? 'Actualizar' : 'Registrar'}</>
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

export default CustomersCRUD;
