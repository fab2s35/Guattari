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
import { Navigate } from "react-router-dom";
 
const Inventory = () => {
  // --- Productos con hook ---
  const {
    products,
    loading,
    addProduct,
    fetchProducts,
  } = useProducts();
 
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    idproducts: "",
    nameProduct: "",
    description: "",
    codeEAN: "",
    unitPrice: "",
    amount: "",
    idSubCategory: "",
    idBrand: "",
  });
 
  // Categorías
  const [categories, setCategories] = useState([]);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [newCategory, setNewCategory] = useState({ nameCategories: "" });
 
  // Subcategorías
  const [subcategories, setSubcategories] = useState([]);
  const [showAddSubcategoryModal, setShowAddSubcategoryModal] = useState(false);
  const [newSubcategory, setNewSubcategory] = useState({
    idsubcategory: "",
    nameSubCategory: "",
    idCategory: "",
    orderStatus: true,
  });
 
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
 
  // Guardar nuevo producto con hook
  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    await addProduct(newProduct);
    setShowAddProductModal(false);
    setNewProduct({
      idproducts: "",
      nameProduct: "",
      description: "",
      codeEAN: "",
      unitPrice: "",
      amount: "",
      idSubCategory: "",
      idBrand: "",
    });
  };
 
  // Guardar nueva categoría
  const handleSubmitCategory = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCategory),
      });
      if (res.ok) {
        setShowAddCategoryModal(false);
        setNewCategory({ nameCategories: "" });
        // Recargar categorías
        const refreshed = await fetch("http://localhost:4000/api/categories");
        const data = await refreshed.json();
        setCategories(data);
      }
    } catch (error) {
      console.error("Error al crear categoría:", error);
    }
  };
 
  // Guardar nueva subcategoría
  const handleSubmitSubcategory = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/subcategory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSubcategory),
      });
      if (res.ok) {
        setShowAddSubcategoryModal(false);
        setNewSubcategory({
          idsubcategory: "",
          nameSubCategory: "",
          idCategory: "",
          orderStatus: true,
        });
        // Recargar subcategorías
        const refreshed = await fetch("http://localhost:4000/api/subcategory");
        const data = await refreshed.json();
        setSubcategories(data);
      }
    } catch (error) {
      console.error("Error al crear subcategoría:", error);
    }
  };
 
  // Cambios inputs producto
  const handleChangeNewProduct = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };
 
  // Cambios inputs categoría
  const handleChangeNewCategory = (e) => {
    const { name, value } = e.target;
    setNewCategory((prev) => ({ ...prev, [name]: value }));
  };
 
  // Cambios inputs subcategoría
  const handleChangeNewSubcategory = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setNewSubcategory((prev) => ({ ...prev, [name]: val }));
  };
 
 
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
              onClick={() => {
  setShowAddProductModal(false);
  setShowAddCategoryModal(true);
  setShowAddSubcategoryModal(false);
}}
 
            >
              <i className="fas fa-plus"></i> Agregar Nueva Categoría
            </button>
            <button
              className="subcategory-btn"
              onClick={() => {
  setShowAddProductModal(false);
  setShowAddCategoryModal(false);
  setShowAddSubcategoryModal(true);
}}
 
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
 
      {/* MODAL AGREGAR PRODUCTO */}
      {showAddProductModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Nuevo Producto</h2>
            <form onSubmit={handleSubmitProduct} className="form-modal">
              <label>
                ID Producto:
                <input
                  type="text"
                  name="idproducts"
                  value={newProduct.idproducts}
                  onChange={handleChangeNewProduct}
                  required
                />
              </label>
              <label>
                Nombre Producto:
                <input
                  type="text"
                  name="nameProduct"
                  value={newProduct.nameProduct}
                  onChange={handleChangeNewProduct}
                  required
                />
              </label>
              <label>
                Descripción:
                <textarea
                  name="description"
                  value={newProduct.description}
                  onChange={handleChangeNewProduct}
                  required
                />
              </label>
              <label>
                Código EAN:
                <input
                  type="text"
                  name="codeEAN"
                  value={newProduct.codeEAN}
                  onChange={handleChangeNewProduct}
                  required
                />
              </label>
              <label>
                Precio Unitario:
                <input
                  type="number"
                  step="0.01"
                  name="unitPrice"
                  value={newProduct.unitPrice}
                  onChange={handleChangeNewProduct}
                  required
                />
              </label>
              <label>
                Cantidad:
                <input
                  type="number"
                  name="amount"
                  value={newProduct.amount}
                  onChange={handleChangeNewProduct}
                  required
                />
              </label>
              <label>
                Subcategoría:
                <select
                  name="idSubCategory"
                  value={newProduct.idSubCategory}
                  onChange={handleChangeNewProduct}
                  required
                >
                  <option value="">Seleccione subcategoría</option>
                  {subcategories.map((subcat) => (
                    <option key={subcat.idsubcategory} value={subcat.idsubcategory}>
                      {subcat.nameSubCategory}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Marca:
                <input
                  type="text"
                  name="idBrand"
                  value={newProduct.idBrand}
                  onChange={handleChangeNewProduct}
                  required
                />
              </label>
              <div className="modal-buttons">
                <button type="submit" className="btn-submit">
                  Guardar
                </button>
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setShowAddProductModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
 
      {/* MODAL AGREGAR CATEGORÍA */}
      {showAddCategoryModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Nueva Categoría</h2>
            <form onSubmit={handleSubmitCategory} className="form-modal">
              <label>
                Nombre Categoría:
                <input
                  type="text"
                  name="nameCategories"
                  value={newCategory.nameCategories}
                  onChange={handleChangeNewCategory}
                  required
                />
              </label>
              <div className="modal-buttons">
                <button type="submit" className="btn-submit">
                  Guardar
                </button>
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setShowAddCategoryModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
 
      {/* MODAL AGREGAR SUBCATEGORÍA */}
      {showAddSubcategoryModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Nueva Subcategoría</h2>
            <form onSubmit={handleSubmitSubcategory} className="form-modal">
              <label>
                ID Subcategoría:
                <input
                  type="text"
                  name="idsubcategory"
                  value={newSubcategory.idsubcategory}
                  onChange={handleChangeNewSubcategory}
                  required
                />
              </label>
              <label>
                Nombre Subcategoría:
                <input
                  type="text"
                  name="nameSubCategory"
                  value={newSubcategory.nameSubCategory}
                  onChange={handleChangeNewSubcategory}
                  required
                />
              </label>
              <label>
                Categoría:
                <select
                  name="idCategory"
                  value={newSubcategory.idCategory}
                  onChange={handleChangeNewSubcategory}
                  required
                >
                  <option value="">Seleccione categoría</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.nameCategories}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Estado Orden:
                <input
                  type="checkbox"
                  name="orderStatus"
                  checked={newSubcategory.orderStatus}
                  onChange={handleChangeNewSubcategory}
                />
              </label>
              <div className="modal-buttons">
                <button type="submit" className="btn-submit">
                  Guardar
                </button>
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setShowAddSubcategoryModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
 
export default Inventory;