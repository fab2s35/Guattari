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
      qualification: 5
    },
    {
      _id: "2",
      cliente: "Carlos Rodríguez",
      comentario: "No era lo que esperaba. La talla no coincidía.",
      producto: "Camisa formal",
      estado: "pendiente",
      imagen: "https://images.unsplash.com/photo-1606813909027-0b37c3f801b8",
      qualification: 2
    }
  ];

  const obtenerReviews = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/reviews');
      if (!res.ok) throw new Error('Error al obtener reseñas');
      const data = await res.json();
      const reviewsAdaptadas = data.map(r => ({
        _id: r._id,
        cliente: r.idClient?.name || 'Sin nombre',
        comentario: r.comment,
        producto: r.idProduct?.name || 'Producto desconocido',
        estado: r.estado || 'pendiente',
        qualification: r.qualification,
        imagen: "https://via.placeholder.com/150" // Pon tu lógica real o un campo en el modelo
      }));
      setReviews(reviewsAdaptadas);
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
      const res = await fetch(`http://localhost:4000/api/reviews/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: 'aceptado' })
      });
      if (!res.ok) throw new Error("Error al actualizar estado");
      setReviews(prev => prev.map(r => r._id === id ? { ...r, estado: 'aceptado' } : r));
    } catch (err) {
      alert("No se pudo aceptar la reseña");
    }
  };

  const eliminarReview = async (id) => {
    if (!window.confirm("¿Deseas eliminar esta reseña?")) return;
    try {
      const res = await fetch(`http://localhost:4000/api/reviews/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error("Error al eliminar");
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
      <img src={Banner} alt="Banner" className="banner-img" />
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
                  <p className="qualification">Calificación: {review.qualification} ⭐</p>
                  <p className={`estado ${review.estado}`}>Estado: {review.estado}</p>
                  <div className="review-actions">
                    {review.estado !== 'aceptado' && (
                      <button className="aceptar-btn" onClick={() => aceptarReview(review._id)}>
                        ✓ Aceptar
                      </button>
                    )}
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
