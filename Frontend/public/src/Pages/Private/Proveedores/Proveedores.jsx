import React, { useState, useEffect } from 'react';
import './Proveedores.css';
import containerImage from '../../../img/imgPrivate/Inventory-Product-List/contenedor.png';

const Proveedores = () => {
  const [proveedores, setProveedores] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [ismodelOpen, setIsmodelOpen] = useState(false);
  const [formData, setFormData] = useState({
    nameSuppliers: '',
    emailSuppliers: '',
    phoneSuppliers: '',
    nationality: ''
  });
  const [editingSupplier, setEditingSupplier] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/suppliers');
      const data = await res.json();
      setProveedores(data);
    } catch (error) {
      console.error('Error al cargar proveedores:', error);
    }
  };

  const openmodel = (supplier = null) => {
    if (supplier) {
      setEditingSupplier(supplier);
      setFormData({
        nameSuppliers: supplier.nameSuppliers || '',
        emailSuppliers: supplier.emailSuppliers || '',
        phoneSuppliers: supplier.phoneSuppliers || '',
        nationality: supplier.nationality || ''
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

  const resetForm = () => {
    setFormData({
      nameSuppliers: '',
      emailSuppliers: '',
      phoneSuppliers: '',
      nationality: ''
    });
    setEditingSupplier(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    const { nameSuppliers, emailSuppliers, phoneSuppliers, nationality } = formData;

    if (!nameSuppliers.trim() || !emailSuppliers.trim() || !phoneSuppliers.trim() || !nationality.trim()) {
      alert('Por favor completa todos los campos');
      return;
    }

    setLoading(true);
    try {
      if (editingSupplier) {
        await fetch(`http://localhost:4000/api/suppliers/${editingSupplier._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      } else {
        await fetch(`http://localhost:4000/api/suppliers`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      }

      await fetchSuppliers();
      closemodel();
    } catch (error) {
      console.error('Error al guardar proveedor:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este proveedor?')) {
      try {
        await fetch(`http://localhost:4000/api/suppliers/${id}`, { method: 'DELETE' });
        setProveedores(prev => prev.filter(p => p._id !== id));
      } catch (error) {
        console.error('Error al eliminar proveedor:', error);
      }
    }
  };

  const filteredProveedores = proveedores.filter(p =>
    p.nameSuppliers?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.emailSuppliers?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.phoneSuppliers?.includes(searchTerm) ||
    p.nationality?.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <input
                type="text"
                placeholder="Buscar..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              className="add-button"
              onClick={() => openmodel()}
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
                {filteredProveedores.length > 0 ? (
                  filteredProveedores.map((proveedor) => (
                    <tr key={proveedor._id}>
                      <td>{proveedor.nameSuppliers || 'N/A'}</td>
                      <td>{proveedor.emailSuppliers || 'N/A'}</td>
                      <td>{proveedor.phoneSuppliers || 'N/A'}</td>
                      <td>{proveedor.nationality || 'N/A'}</td>
                      <td className="actions-cell">
                        <div className="action-buttons">
                          <button
                            className="edit-btn"
                            onClick={() => openmodel(proveedor)}
                            title="Editar proveedor"
                          >
                            ✎
                          </button>
                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(proveedor._id)}
                            title="Eliminar proveedor"
                          >
                            🗑
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No se encontraron proveedores</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {ismodelOpen && (
        <div className="model-overlay">
          <div className="model">
            <h2>{editingSupplier ? 'Editar Proveedor' : 'Nuevo Proveedor'}</h2>

            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                name="nameSuppliers"
                value={formData.nameSuppliers}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="emailSuppliers"
                value={formData.emailSuppliers}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Teléfono</label>
              <input
                type="text"
                name="phoneSuppliers"
                value={formData.phoneSuppliers}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Nacionalidad</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="model-actions">
              <button onClick={closemodel} className="cancel-button">Cancelar</button>
              <button onClick={handleSubmit} disabled={loading} className="save-button">
                {loading ? 'Guardando...' : (editingSupplier ? 'Actualizar' : 'Registrar')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Proveedores;
