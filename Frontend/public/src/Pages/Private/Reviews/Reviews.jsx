import React, { useState, useEffect } from 'react';
import Banner from '../../../img/imgPrivate/Banner-Inventory/map.png';
import './Reviews.css'; 

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [cargando, setCargando] = useState(true);

  const ejemploReviews = [
    {
      _id: "1",
      cliente: "Ana López",
      comentario: "¡Excelente producto! Me encantó la calidad y el servicio fue muy rápido.",
      producto: "Zapatos de cuero",
      estado: "pendiente",
      imagen: "https://images.unsplash.com/photo-1593032465171-d3ba46b1c5b3",
    },
    {
      _id: "2",
      cliente: "Carlos Rodríguez",
      comentario: "No era lo que esperaba. La talla no coincidía.",
      producto: "Camisa formal",
      estado: "pendiente",
      imagen: "https://images.unsplash.com/photo-1606813909027-0b37c3f801b8",
    }
  ];

  const obtenerReviews = async () => {
    try {
      const res = await fetch('/api/reviews');
      if (!res.ok) throw new Error('Error al obtener reseñas');
      const data = await res.json();
      setReviews(data);
    } catch (error) {
      console.error('Fallo la carga de reseñas, usando datos de ejemplo');
      setReviews(ejemploReviews);
    } finally {
      setCargando(false);
    }
  };

  const aceptarReview = async (id) => {
    if (!window.confirm("¿Estás seguro de aceptar esta reseña?")) return;
    try {
      await fetch(`http://localhost:4000/api/reviews/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: 'aceptado' })
      });
      setReviews(prev => prev.map(r => r._id === id ? { ...r, estado: 'aceptado' } : r));
    } catch (err) {
      alert("No se pudo aceptar la reseña");
    }
  };

  const eliminarReview = async (id) => {
    if (!window.confirm("¿Deseas eliminar esta reseña?")) return;
    try {
      await fetch(`http://localhost:4000/api/reviews/${id}`, { method: 'DELETE' });
      setReviews(prev => prev.filter(r => r._id !== id));
    } catch (err) {
      alert("Error al eliminar la reseña");
    }
  };

  useEffect(() => {
    obtenerReviews();
  }, []);

  return (
    <div className="reviews-container">
      <h1 className="page-title">Reseñas de Clientes</h1>

      <div className="banner">
        <img
          src= {Banner}
          alt="banner de reseñas"
          className="banner-img"
        />
      </div>

      {cargando ? (
        <p className="cargando">Cargando reseñas...</p>
      ) : (
        <div className="reviews-grid">
          {reviews.length === 0 ? (
            <p className="no-reviews">No hay reseñas disponibles</p>
          ) : (
            reviews.map((review) => (
              <div className="review-card" key={review._id}>
                <img src={review.imagen} alt={review.producto} className="product-img" />
                <div className="review-content">
                  <h3>{review.producto}</h3>
                  <p><strong>Cliente:</strong> {review.cliente}</p>
                  <p className="comentario">"{review.comentario}"</p>
                  <p className={`estado ${review.estado}`}>Estado: {review.estado}</p>
                  <div className="review-actions">
                    <button className="aceptar-btn" onClick={() => aceptarReview(review._id)}>
                      ✓ Aceptar
                    </button>
                    <button className="eliminar-btn" onClick={() => eliminarReview(review._id)}>
                      🗑 Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Reviews;
