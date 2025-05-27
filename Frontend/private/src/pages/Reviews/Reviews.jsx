import React, { useEffect, useState } from 'react';
import './Reviews.css';
import Banner from '../../img/Banner-Reviews.png';
import ProductoImg from '../../img/Inventory-Product-List/producto.png';

const API_URL = 'http://localhost:4000/api/review';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState(null);
  const [showAcceptedPopup, setShowAcceptedPopup] = useState(false);

  const fetchReviews = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setReviews(data);
    } catch (err) {
      console.error('Error al obtener reseñas:', err);
    }
  };

  const deleteReview = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setReviews(reviews.filter((r) => r._id !== id));
      setShowConfirmDelete(false);
    } catch (err) {
      console.error('Error al eliminar reseña:', err);
    }
  };

  const acceptReview = async (id) => {
    try {
      await fetch(`${API_URL}/${id}/accept`, { method: 'POST' });
      setShowAcceptedPopup(true);
      setTimeout(() => setShowAcceptedPopup(false), 2000);
    } catch (err) {
      console.error('Error al aceptar reseña:', err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <>
      <div className="container-reviews">
        <h1 className="productos-titulo">Reseñas</h1>
        <hr className="productos-divider" />
      </div>

      <div className="principalBanner">
        <img src={Banner} alt="Banner Principal" className="banner-img" />
      </div>

      <div className="container-reviews">
        <h1 className="productos-titulo">Listado de reseñas</h1>
        <hr className="productos-divider" />
      </div>

      <div className="main-container">
        <div className="review-list-container">
          <div className="header">
            <div className="search-bar">
              <input type="text" placeholder="Buscar..." className="search-input" />
            </div>
          </div>

          <div className="review-list">
            {reviews.map((review) => (
              <div key={review._id} className="review-item">
                <div className="review-image">
                  <img src={review.image || ProductoImg} alt={review.pro} className="review-img" />
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
                      <span className="review-value">{review.pro}</span>
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
                  <button className="action-btn delete-btn" onClick={() => {
                    setReviewToDelete(review._id);
                    setShowConfirmDelete(true);
                  }}>
                    <i className="fas fa-trash"></i>
                  </button>
                  <button className="action-btn" onClick={() => acceptReview(review._id)}>
                    <i className="fas fa-check"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="scrollbar"></div>
        </div>
      </div>

      {showConfirmDelete && (
        <div className="popup-overlay">
          <div className="popup">
            <p>¿Estás seguro de que deseas eliminar esta reseña?</p>
            <div className="popup-actions">
              <button onClick={() => deleteReview(reviewToDelete)}>Sí, eliminar</button>
              <button onClick={() => setShowConfirmDelete(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {showAcceptedPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>¡Reseña aceptada exitosamente!</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Reviews;
