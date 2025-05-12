import React, { useState } from 'react';
import './Reviews.css'; 
{/* Importar imágenes del banners*/}
import Banner from '../../img/Banner-Reviews.png';
{/* Importar imágenes de los productos*/}
import ProductoImg from '../../img/Inventory-Product-List/producto.png';

function Reviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "Juan Pérez",
      description: "Muy cómodo y elegante, perfecto para mi sala.",
      pro: "Sillón Swivel Lounge",
      puntuation: 4.5,
      date: "2024-11-21",
      image: ProductoImg
    },
    {
      id: 2,
      user: "Ana García",
      description: "El diseño es hermoso pero el color no combina con mi decoración.",
      pro: "Sillón Swivel Lounge",
      puntuation: 3.8,
      date: "2024-12-02",
      image: ProductoImg
    },
    {
      id: 3,
      user: "Luis Rodríguez",
      description: "Excelente calidad y llegó antes de lo esperado.",
      pro: "Sillón Swivel Lounge",
      puntuation: 5,
      date: "2025-01-15",
      image: ProductoImg
    },
  ]);

  return (
    <>
      <div className="container-inventory">
        <h1 className="productos-titulo">Reseñas</h1>
        <hr className="productos-divider" />
      </div>


        {/* Banner Principal */}
<div className="principalBanner"> 
        <img src={Banner} alt="Banner Principal" className="banner-img" />

    </div>

      <div className="container-inventory">
        <h1 className="productos-titulo">Listado de reseñas</h1>
        <hr className="productos-divider" />
      </div>

      <div className="main-container">
        <div className="review-list-container">
          <div className="header">
            <div className="search-bar">
              <input type="text" placeholder="Buscar..." className="search-input" />
            </div>
            <button className="add-review-btn">
              <i className="fas fa-plus"></i> Agregar Reseña
            </button>
          </div>

          <div className="review-list">
            {reviews.map((review) => (
              <div key={review.id} className="review-item">
                <div className="review-image">
                  <img src={review.image} alt={review.pro} className="review-img" />
                </div>

                <div className="review-info-columns">
                  <div className="review-column">
                    <div className="review-detail">
                      <span className="review-label">Usuario:</span>
                      <span className="review-value">{review.user}</span>
                    </div>
                    <div className="review-detail">
                      <span className="review-label">Reseña:</span>
                      <span className="review-value">{review.description}</span>
                    </div>
                  </div>

                  <div className="review-column">
                    <div className="review-detail">
                      <span className="review-label">Producto:</span>
                      <span className="review-value">{review.product}</span>
                    </div>
                    <div className="review-detail">
                      <span className="review-label">Puntuación:</span>
                      <span className="review-value">{review.puntuation}</span>
                    </div>
                    <div className="review-detail">
                      <span className="review-label">Fecha:</span>
                      <span className="review-value">{review.date}</span>
                    </div>
                  </div>
                </div>

                <div className="action-buttons">
                  <button className="action-btn delete-btn">
                    <i className="fas fa-trash"></i>
                  </button>
                  <button className="action-btn">
                    <i className="fas fa-check"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="scrollbar"></div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
