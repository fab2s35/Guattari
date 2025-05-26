import React from 'react';
import '../addInv/addInventory.css';

const AgregarInventario = () => {
  return (
    <div className="agregar-inventario-container">
      <div className="content-wrapper">
        <h1 className="page-title">Agregar Inventario</h1>
        
        <div className="form-container">
          <div className="form-card">
            <div className="form-row">
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="descripcion" className="form-label">Descripción</label>
                  <textarea 
                    id="descripcion" 
                    className="form-textarea"
                    rows="4"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="cantidad" className="form-label">Cantidad</label>
                  <input 
                    type="number" 
                    id="cantidad" 
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="precio" className="form-label">Precio</label>
                  <input 
                    type="number" 
                    id="precio" 
                    className="form-input"
                    step="0.01"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="codeEAN" className="form-label">codeEAN</label>
                  <input 
                    type="text" 
                    id="codeEAN" 
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="marca" className="form-label">Marca</label>
                  <div className="select-wrapper">
                    <select id="marca" className="form-select">
                      <option value="">Seleccionar marca</option>
                      <option value="samsung">Dubai</option>
                      <option value="apple">Kindla</option>
                      <option value="lg">Camelot</option>
                      <option value="sony">Vanity</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="categoria" className="form-label">Categoría</label>
                  <div className="select-wrapper">
                    <select id="categoria" className="form-select">
                      <option value="">Seleccionar categoría</option>
                      <option value="electronica">Sala</option>
                      <option value="hogar">Comedor</option>
                      <option value="ropa">Cocina</option>
                      <option value="deportes">Baño</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subcategoria" className="form-label">Subcategoría</label>
                  <div className="select-wrapper">
                    <select id="subcategoria" className="form-select">
                      <option value="">Seleccionar subcategoría</option>
                      <option value="smartphones">Sofas</option>
                      <option value="laptops">Sillas</option>
                      <option value="televisores">Mesas de centro</option>
                      <option value="accesorios">Estanterias y librerias</option>
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
                    {/* Input de foto deshabilitado */}
                    <input 
                      type="file" 
                      id="foto" 
                      className="photo-input"
                      accept="image/*"
                      disabled
                      style={{ pointerEvents: 'none', opacity: 0.5 }}
                    />
                  </div>
                </div>
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

export default AgregarInventario;