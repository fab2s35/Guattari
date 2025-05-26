import React, { useState, useEffect } from 'react';
import './addInventory.css';

const AgregarInventario = () => {
  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    cantidad: '',
    precio: '',
    codeEAN: '',
    marca: '',
    categoria: '',
    subcategoria: '',
    foto: null,
  });

  // Estado para las opciones de marcas, categorías y subcategorías
  const [marcas, setMarcas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setSubcategorias] = useState([]);

  // Cargar marcas, categorías y subcategorías desde la API o desde datos estáticos
  useEffect(() => {
    // Aquí puedes hacer peticiones a la API para cargar los datos
    setMarcas([
      { id: 'samsung', nombre: 'Samsung' },
      { id: 'apple', nombre: 'Apple' },
      { id: 'lg', nombre: 'LG' },
      { id: 'sony', nombre: 'Sony' },
    ]);

    setCategorias([
      { id: 'electronica', nombre: 'Electrónica' },
      { id: 'hogar', nombre: 'Hogar' },
      { id: 'ropa', nombre: 'Ropa' },
      { id: 'deportes', nombre: 'Deportes' },
    ]);

    setSubcategorias([
      { id: 'smartphones', nombre: 'Smartphones' },
      { id: 'laptops', nombre: 'Laptops' },
      { id: 'televisores', nombre: 'Televisores' },
      { id: 'accesorios', nombre: 'Accesorios' },
    ]);
  }, []);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Manejar la selección del archivo de foto
  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      foto: e.target.files[0],
    }));
  };

  // Enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí enviarías los datos al servidor
    console.log(formData);
    // Después de enviar, puedes limpiar el formulario si es necesario
    setFormData({
      nombre: '',
      descripcion: '',
      cantidad: '',
      precio: '',
      codeEAN: '',
      marca: '',
      categoria: '',
      subcategoria: '',
      foto: null,
    });
  };

  return (
    <div className="agregar-inventario-container">
      <div className="content-wrapper">
        <h1 className="page-title">Agregar Inventario</h1>

        <div className="form-container">
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                {/* Primera columna */}
                <div className="form-column">
                  <div className="form-group">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      className="form-input"
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <textarea
                      id="descripcion"
                      name="descripcion"
                      className="form-textarea"
                      rows="4"
                      value={formData.descripcion}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="cantidad" className="form-label">Cantidad</label>
                    <input
                      type="number"
                      id="cantidad"
                      name="cantidad"
                      className="form-input"
                      value={formData.cantidad}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input
                      type="number"
                      id="precio"
                      name="precio"
                      className="form-input"
                      step="0.01"
                      value={formData.precio}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="codeEAN" className="form-label">Code EAN</label>
                    <input
                      type="text"
                      id="codeEAN"
                      name="codeEAN"
                      className="form-input"
                      value={formData.codeEAN}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Segunda columna */}
                <div className="form-column">
                  <div className="form-group">
                    <label htmlFor="marca" className="form-label">Marca</label>
                    <div className="select-wrapper">
                      <select
                        id="marca"
                        name="marca"
                        className="form-select"
                        value={formData.marca}
                        onChange={handleChange}
                      >
                        <option value="">Seleccionar marca</option>
                        {marcas.map((marca) => (
                          <option key={marca.id} value={marca.id}>
                            {marca.nombre}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="categoria" className="form-label">Categoría</label>
                    <div className="select-wrapper">
                      <select
                        id="categoria"
                        name="categoria"
                        className="form-select"
                        value={formData.categoria}
                        onChange={handleChange}
                      >
                        <option value="">Seleccionar categoría</option>
                        {categorias.map((categoria) => (
                          <option key={categoria.id} value={categoria.id}>
                            {categoria.nombre}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subcategoria" className="form-label">Subcategoría</label>
                    <div className="select-wrapper">
                      <select
                        id="subcategoria"
                        name="subcategoria"
                        className="form-select"
                        value={formData.subcategoria}
                        onChange={handleChange}
                      >
                        <option value="">Seleccionar subcategoría</option>
                        {subcategorias.map((subcategoria) => (
                          <option key={subcategoria.id} value={subcategoria.id}>
                            {subcategoria.nombre}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="foto" className="form-label">Foto</label>
                    <div className="photo-upload-container">
                      <div className="photo-upload-area">
                        <div className="camera-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 4H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <input
                        type="file"
                        id="foto"
                        name="foto"
                        className="photo-input"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón de envío */}
              <button type="submit" className="submit-button">Agregar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarInventario;
