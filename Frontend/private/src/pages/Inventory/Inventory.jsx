import React, { useEffect, useState } from "react";
import "./Inventory.css";
import useProducts from '../../components/hooks/useProducts';
import { useNavigate } from "react-router-dom"; 

/* Importar imágenes de los banners */
import IbannerGrid1 from "../../img/Banner-Inventory/IbannerGrid1.png";
import IbannerGrid2 from "../../img/Banner-Inventory/IbannerGrid2.png";
import IbannerGrid3 from "../../img/Banner-Inventory/IbannerGrid3.png";
/* Importar imagen de producto */
import ProductoImg from "../../img/Inventory-Product-List/producto.png";

const Inventory = () => {
  // --- Productos con hook ---
  const { products, loading, addProduct, fetchProducts } = useProducts();

  // Categorías
  const [categories, setCategories] = useState([]);

  // Subcategorías
  const [subcategories, setSubcategories] = useState([]);

  const navigate = useNavigate(); // Hook para navegación

  // Cargar categorías al montar
  useEffect(() => {
    fetch("http://localhost:4000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Cargar subcategorías al montar
  useEffect(() => {
    fetch("http://localhost:4000/api/subcategory")
      .then((res) => res.json())
      .then((data) => setSubcategories(data))
      .catch((error) => console.error("Error fetching subcategories:", error));
  }, []);

  return (
    <>
      {/* Contenedor Principal */}
      <div className="container-inventory">
        <h1 className="productos-titulo">Inventario</h1>
        <hr className="productos-divider" />
      </div>

      {/* Banner Grid */}
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

      {/* Main Product List */}
      <div className="main-container">
        <div className="product-list-container">
          {/* Header - Buscar y añadir producto */}
          <div className="header">
            <div className="search-bar">
              <input type="text" placeholder="Buscar..." className="search-input" />
            </div>
            <button
              className="add-product-btn"
              onClick={() => navigate('/addInv')}
            >
              <i className="fas fa-plus"> </i> Agregar Producto
            </button>
          </div>

          {/* Botones de categoría y subcategoría */}
          <div className="category-btns-container">
            <button
              className="category-btn"
              onClick={() => navigate('/addCategory')}
            >
              <i className="fas fa-plus"></i> Agregar Nueva Categoría
            </button>
            <button
              className="subcategory-btn"
              onClick={() => navigate('/addSubCategory')}
            >
              <i className="fas fa-plus"></i> Agregar Nueva Subcategoría
            </button>
          </div>

          {/* Lista de productos */}
          <div className="product-list">
            {products.map((product) => (
              <div key={product._id || product.idproducts} className="product-item">
                {/* Imagen */}
                <div className="product-image">
                  <img
                    src={ProductoImg}
                    alt={product.nameProduct || product.name}
                    className="product-img"
                  />
                  <div className="camera-icon-container">
                    <i className="fas fa-camera camera-icon"></i>
                  </div>
                </div>

                {/* Info columnas */}
                <div className="product-info-columns">
                  <div className="product-column">
                    <div className="product-detail">
                      <span className="product-label">Nombre:</span>
                      <span className="product-value">{product.nameProduct || product.name}</span>
                    </div>
                    <div className="product-detail">
                      <span className="product-label">Descripción:</span>
                      <span className="product-value">{product.description}</span>
                    </div>
                  </div>

                  <div className="product-column">
                    <div className="product-detail">
                      <span className="product-label">Cantidad:</span>
                      <span className="product-value">{product.amount}</span>
                    </div>
                    <div className="product-detail">
                      <span className="product-label">Código EAN:</span>
                      <span className="product-value">{product.codeEAN}</span>
                    </div>
                  </div>

                  <div className="product-column">
                    <div className="product-detail">
                      <span className="product-label">Precio Unitario:</span>
                      <span className="product-value">${product.unitPrice}</span>
                    </div>
                    <div className="product-detail">
                      <span className="product-label">Subcategoría:</span>
                      <span className="product-value">{product.idSubCategory || "-"}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
