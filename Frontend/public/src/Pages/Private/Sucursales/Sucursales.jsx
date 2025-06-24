import React, { useState, useEffect } from "react";
import "./Sucursales.css";
import containerImage from "../../../img/imgPrivate/Banner-Inventory/map.png";

const Sucursales = () => {
  const [sucursales, setSucursales] = useState([]);
  const [ismodelOpen, setIsmodelOpen] = useState(false);
  const [editingSucursal, setEditingSucursal] = useState(null);
  const [loading, setLoading] = useState(false);

  // Formulario
  const [formData, setFormData] = useState({
    nameBranches: "",
    emailBranches: "",
    phoneBranches: "",
    scheduleBranches: "",
    addressBranches: "",
  });

  // Fetch sucursales desde backend
  useEffect(() => {
    fetchSucursales();
  }, []);

  const fetchSucursales = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/branches");
      const data = await res.json();
      setSucursales(data);
    } catch (error) {
      console.error("Error fetching sucursales:", error);
    }
    setLoading(false);
  };

  // Abrir model para nuevo o editar
  const openmodel = (sucursal = null) => {
    if (sucursal) {
      setEditingSucursal(sucursal);
      setFormData({
        nameBranches: sucursal.nameBranches || "",
        emailBranches: sucursal.emailBranches || "",
        phoneBranches: sucursal.phoneBranches || "",
        scheduleBranches: sucursal.scheduleBranches || "",
        addressBranches: sucursal.addressBranches || "",
      });
    } else {
      setEditingSucursal(null);
      setFormData({
        nameBranches: "",
        emailBranches: "",
        phoneBranches: "",
        scheduleBranches: "",
        addressBranches: "",
      });
    }
    setIsmodelOpen(true);
  };

  const closemodel = () => {
    setIsmodelOpen(false);
    setEditingSucursal(null);
  };

  // Actualizar inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Guardar (insertar o actualizar)
  const handleSubmit = async () => {
    const { nameBranches, emailBranches, phoneBranches, scheduleBranches, addressBranches } = formData;

    // Validación simple
    if (!nameBranches.trim() || !emailBranches.trim() || !phoneBranches.trim() || !scheduleBranches.trim() || !addressBranches.trim()) {
      alert("Por favor completa todos los campos");
      return;
    }

    setLoading(true);

    try {
      if (editingSucursal) {
        // Actualizar
        await fetch(`http://localhost:4000/api/branches/${editingSucursal._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        setSucursales((prev) =>
          prev.map((item) => (item._id === editingSucursal._id ? { ...item, ...formData } : item))
        );
      } else {
        // Insertar
        await fetch("http://localhost:4000/api/branches", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        await fetchSucursales();
      }

      closemodel();
    } catch (error) {
      console.error("Error guardando sucursal:", error);
    }

    setLoading(false);
  };

  // Eliminar sucursal
  const handleDelete = async (id) => {
    if (window.confirm("¿Seguro que quieres eliminar esta sucursal?")) {
      setLoading(true);
      try {
        await fetch(`http://localhost:4000/api/branches/${id}`, { method: "DELETE" });
        setSucursales((prev) => prev.filter((item) => item._id !== id));
      } catch (error) {
        console.error("Error eliminando sucursal:", error);
      }
      setLoading(false);
    }
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

        <div className="search-add-container">
          <input type="text" placeholder="Buscar..." className="search-input" />
          <button className="add-button" onClick={() => openmodel()}>
            <span className="plus-icon">+</span> Agregar Sucursal
          </button>
        </div>

        {loading && sucursales.length === 0 ? (
          <p>Cargando sucursales...</p>
        ) : sucursales.length === 0 ? (
          <p>No hay sucursales registradas.</p>
        ) : (
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
                <tr key={sucursal._id}>
                  <td>{sucursal.nameBranches}</td>
                  <td>{sucursal.addressBranches}</td>
                  <td>{sucursal.phoneBranches}</td>
                  <td>{sucursal.emailBranches }</td>
                  <td>
                    <button className="edit-btn" onClick={() => openmodel(sucursal)}>
                      ✎
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(sucursal._id)}>
                      🗑
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* model */}
        {ismodelOpen && (
          <div className="model-overlay">
            <div className="model">
              <h2>{editingSucursal ? "Editar Sucursal" : "Nueva Sucursal"}</h2>

              <label>Nombre</label>
              <input
                name="nameBranches"
                value={formData.nameBranches}
                onChange={handleInputChange}
                placeholder="Nombre de la sucursal"
              />

              <label>Email / Encargado</label>
              <input
                name="emailBranches"
                value={formData.emailBranches}
                onChange={handleInputChange}
                placeholder="Email o encargado"
              />

              <label>Teléfono</label>
              <input
                name="phoneBranches"
                value={formData.phoneBranches}
                onChange={handleInputChange}
                placeholder="Teléfono"
              />

              <label>Horario</label>
              <input
                name="scheduleBranches"
                value={formData.scheduleBranches}
                onChange={handleInputChange}
                placeholder="Horario de atención"
              />

              <label>Dirección</label>
              <input
                name="addressBranches"
                value={formData.addressBranches}
                onChange={handleInputChange}
                placeholder="Dirección"
              />

              <div className="model-actions">
                <button onClick={closemodel}>Cancelar</button>
                <button onClick={handleSubmit} disabled={loading}>
                  {loading ? "Guardando..." : editingSucursal ? "Actualizar" : "Guardar"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sucursales;
