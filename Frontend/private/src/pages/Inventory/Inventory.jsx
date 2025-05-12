import React, { useState } from 'react';
import './Inventory.css';
{/* Importar imágenes de los banners*/}
import IbannerGrid1 from '../../img/Banner-Inventory/IbannerGrid1.png';
import IbannerGrid2 from '../../img/Banner-Inventory/IbannerGrid2.png';
import IbannerGrid3 from '../../img/Banner-Inventory/IbannerGrid3.png';
{/* Importar imágenes de los productos*/}
import ProductoImg from '../../img/Inventory-Product-List/producto.png';


function Inventory() {
  const [products, setProducts] = useState([
    // Datos de los productos
    {
      id: 1,
      name: "Sillón Swivel Lounge",
      description: "Sillón amarillo con rayas blancas, moderno y...",
      quantity: 465,
      price: 399.99,
      codeEAN: "12345...",
      brand: "Cocoona",
      subcategory: "Sillones",
      category: "Sala",
      image: ProductoImg
    },
    {
      id: 2,
      name: "Sillón Swivel Lounge",
      description: "Sillón amarillo con rayas blancas, moderno y...",
      quantity: 465,
      price: 399.99,
      codeEAN: "12345...",
      brand: "Cocoona",
      subcategory: "Sillones",
      category: "Sala",
      image: ProductoImg
    },
    {
      id: 3,
      name: "Sillón Swivel Lounge",
      description: "Sillón amarillo con rayas blancas, moderno y...",
      quantity: 465,
      price: 399.99,
      codeEAN: "12345...",
      brand: "Cocoona",
      subcategory: "Sillones",
      category: "Sala",
      image: ProductoImg
    },
    
  ]);

  return (
    <>

      <div className="container-inventory">
        <h1 className="productos-titulo">Inventario</h1>
        <hr className="productos-divider" />
      </div>

      <div className="banner-grid">
        <div className="banner-grid-left">
          <img src={IbannerGrid1} alt="Banner 1" className="banner-grid-img" />
        </div>
        <div className="banner-grid-right">
          <div className="banner-grid-right-1">
            <img src={IbannerGrid2} alt="Banner 2" className="banner-grid-img" />
          </div>
          <div className="banner-grid-right-2">
            <img src={IbannerGrid3} alt="Banner 3" className="banner-grid-img" />
          </div>
        </div>
      </div>

  
      <div className="container-inventory">
        <h1 className="productos-titulo">Listado de productos</h1>
        <hr className="productos-divider" />
      </div>
  
      <div className="main-container">
        <div className="product-list-container">
          {/* Header - Buscar y añadir producto */}
          <div className="header">
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Buscar..." 
                className="search-input"
              />
            </div>
            <button className="add-product-btn">
              <i className="fas fa-plus">  </i>   Agregar Producto
            </button>
          </div>
  
          {/* Botones de categoria */}
          <div className="category-btns-container">
            <button className="category-btn">
              <i className="fas fa-plus"></i> Agregar Nueva Categoría
            </button>
            <button className="subcategory-btn">
              <i className="fas fa-plus"></i> Agregar Nueva Subcategoría
            </button>
          </div>
  
          {/* Lista de productos */}
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-item">
                {/* Imagen de producto */}
                <div className="product-image">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-img"
                  />
                  <div className="camera-icon-container">
                    <i className="fas fa-camera camera-icon"></i>
                  </div>
                </div>
  
                {/* Tres columnas de información */}
                <div className="product-info-columns">
                  {/* Columna 1 */}
                  <div className="product-column">
                    <div className="product-detail">
                      <span className="product-label">Nombre:</span>
                      <span className="product-value">{product.name}</span>
                    </div>
                    <div className="product-detail">
                      <span className="product-label">Descripción:</span>
                      <span className="product-value">{product.description}</span>
                    </div>
                  </div>
  
                  {/* Columna 2 */}
                  <div className="product-column">
                    <div className="product-detail">
                      <span className="product-label">Cantidad:</span>
                      <span className="product-value">{product.quantity}</span>
                    </div>
                    <div className="product-detail">
                      <span className="product-label">Precio:</span>
                      <span className="product-value">${product.price}</span>
                    </div>
                    <div className="product-detail">
                      <span className="product-label">CodeEAN:</span>
                      <span className="product-value">{product.codeEAN}</span>
                    </div>
                  </div>
  
                  {/* Columna 3 */}
                  <div className="product-column">
                    <div className="product-detail">
                      <span className="product-label">Marca:</span>
                      <span className="product-value">{product.brand}</span>
                    </div>
                    <div className="product-detail">
                      <span className="product-label">Subcategoría:</span>
                      <span className="product-value">{product.subcategory}</span>
                    </div>
                    <div className="product-detail">
                      <span className="product-label">Categoría:</span>
                      <span className="product-value">{product.category}</span>
                    </div>
                  </div>
                </div>
  
                {/* Botones de acción */}
                <div className="action-buttons">
                  <button className="action-btn delete-btn">
                    <i className="fas fa-trash"></i>
                  </button>
                  <button className="action-btn">
                    <i className="fas fa-edit"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
  
          {/* Scrollbar */}
          <div className="scrollbar"></div>
        </div>
      </div>
    </>
  );
}  
export default Inventory;
