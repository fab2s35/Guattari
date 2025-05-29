import React, { useState, useEffect } from 'react';
import './Employe.css';

const CustomersCRUD = () => {
  const [customers, setCustomers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    password: '',
    phone: '',
    assignedPosition: ''
  });
  const [loading, setLoading] = useState(false);

  // Cargar clientes al montar el componente
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:4000/api/employees');
      const data = await response.json();
      // Filter out any customers with missing required fields
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
    name: '',
    lastname: '',
    password: '',
    phone: '',
    assignedPosition: ''
    });
    setEditingCustomer(null);
  };

  const openModal = (customer = null) => {
    if (customer) {
      setEditingCustomer(customer);
      setFormData({
        name: customer.name || '',
        lastname: customer.lastname || '',
        password: '',
        phone: customer.phone || '',
        assignedPosition: customer.assignedPosition || ''
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
      if (editingCustomer) {
        // UPDATE - no actualizar email ya que no está en tu controlador
        const updateData = {
          name: formData.name,
          passwordUser: formData.passwordUser,
          lastname: formData.lastname,
          phone: formData.phone,
          assignedPosition: formData.assignedPosition
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
        // CREATE
        const response = await fetch('http://localhost:4000/api/employees', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        
        const newCustomer = await response.json();
        setCustomers(prev => [...prev, newCustomer]);
      }
      
      closeModal();
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

  // Helper function to get customer initial safely
  const getCustomerInitial = (name) => {
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return '?';
    }
    return name.trim().charAt(0).toUpperCase();
  };

  return (
    <div className="customers-crud-container">
      <div className="customers-crud-wrapper">
        {/* Header */}
        <div className="header">
          <h1>Gestión de Empledos</h1>
          <p>Administra tus registros de Empleados</p>
        </div>

        {/* Add Customer Button */}
        <div className="add-button-container">
          <button
            onClick={() => openModal()}
            className="add-button"
          >
            <span className="plus-icon">+</span>
            Agregar Empleado
          </button>
        </div>

        {/* Customers Grid */}
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
                    <h3>{customer.name || 'Sin nombre'}</h3>
                    <p className="customer-email">{customer.lastname || 'apellido'}</p>
                  </div>
                </div>
                
                <div className="customer-details">
                  <div className="detail-item">
                    <span className="detail-label">Cargo:</span>
                    <span className="detail-value">{customer.assignedPosition || 'N/A'} Cargo</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Telefono:</span>
                    <span className="detail-value origin-badge">{customer.phone || 'No especificado'}</span>
                  </div>
                </div>

                <div className="customer-actions">
                  <button
                    onClick={() => openModal(customer)}
                    className="edit-button"
                  >
                    ✏️ Editar
                  </button>
                  <button
                    onClick={() => handleDelete(customer._id)}
                    className="delete-button"
                  >
                    🗑️ Eliminar
                  </button>
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

        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h2>{editingCustomer ? 'Editar Empleado' : 'Nuevo Empleado'}</h2>
                <button
                  onClick={closeModal}
                  className="close-button"
                >
                  ✕
                </button>
              </div>

              <div className="modal-form">
                <div className="form-group">
                  <label>Nombre Completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ej: Juan Pérez García"
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
                    placeholder={editingCustomer ? "Nueva contraseña (opcional)" : "Contraseña"}
                    required={!editingCustomer}
                  />
                  {editingCustomer && (
                    <small className="field-note">Dejar vacío para mantener la actual</small>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Telefono</label>
                    <input
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="25"
                      min="7"
                      max="8"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>País de Origen</label>
                    <select
                      name="assignedPosition"
                      value={formData.assignedPosition}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Seleccionar país</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Brasil">Brasil</option>
                      <option value="Chile">Chile</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="España">España</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Honduras">Honduras</option>
                      <option value="México">México</option>
                      <option value="Nicaragua">Nicaragua</option>
                    </select>
                  </div>
                </div>

                <div className="modal-actions">
                  <button
                    onClick={closeModal}
                    className="cancel-button"
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
                        👤 {editingCustomer ? 'Actualizar' : 'Registrar'}
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

export default CustomersCRUD;