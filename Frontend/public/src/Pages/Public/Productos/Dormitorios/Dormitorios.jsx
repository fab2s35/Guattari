import React, { useState } from 'react';
import './Dormitorios.css';
import CardProduct from "../../../../components/Products/CardProduct.jsx";
import useDataProducts from "../../../../components/Products/hooks/useDataProducts.jsx";

const Dormitorios = () => {
  const {
    addToCart,
    filteredProducts,
    selectedCategory,
    categories,
    setSelectedCategory,
  } = useDataProducts();

  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const sortedProducts = [...filteredProducts]
    .filter(p => p?.nameProduct && p?.unitPrice !== undefined)
    .sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'name':
          comparison = (a.nameProduct || '').localeCompare(b.nameProduct || '');
          break;
        case 'price':
          comparison = (a.unitPrice || 0) - (b.unitPrice || 0);
          break;
        case 'stock':
          comparison = (a.stock || 0) - (b.stock || 0);
          break;
        default:
          comparison = 0;
      }
      return sortOrder === 'desc' ? -comparison : comparison;
    });

  return (
    <div className="sofas-page">
      <div className="breadcrumb">
        <div className="breadcrumb-container">
          <nav>
            <span>Estancias</span> / <span>Dormitorios</span> / <span className="font-medium">Camas</span>
          </nav>
        </div>
      </div>

      <div className="section-container">
        <div className="section-title">Camas</div>

        <div className="filters">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="select"
          >
            <option value="Todas">Todas las categorías</option>
            {categories.map((categorie) => (
              <option key={categorie._id} value={categorie._id}>
                {categorie.name}
              </option>
            ))}
          </select>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Ordenar:</span>
            <select
              value={`${sortBy}-${sortOrder}`}
              onChange={(e) => {
                const [newSortBy, newOrder] = e.target.value.split('-');
                setSortBy(newSortBy);
                setSortOrder(newOrder);
              }}
              className="select"
            >
              <option value="name-asc">Nombre A-Z</option>
              <option value="name-desc">Nombre Z-A</option>
              <option value="price-asc">Precio menor a mayor</option>
              <option value="price-desc">Precio mayor a menor</option>
              <option value="stock-desc">Más disponibles</option>
              <option value="stock-asc">Menos disponibles</option>
            </select>
          </div>
        </div>

        {sortedProducts.length === 0 ? (
          <div className="no-products">
            <p>No hay productos disponibles en esta categoría.</p>
            <button
              onClick={() => setSelectedCategory('Todas')}
              className="button-primary"
            >
              Ver todos los productos
            </button>
          </div>
        ) : (
          <div className="grid-products">
            {sortedProducts.map((item) => (
              <CardProduct key={item._id} product={item} addToCart={addToCart} />
            ))}
          </div>
        )}

        {sortedProducts.length > 0 && (
          <div className="result-info">
            <p>Mostrando {sortedProducts.length} productos</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dormitorios;
