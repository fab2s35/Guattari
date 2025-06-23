import { useState } from "react";
import toast from "react-hot-toast";

const CardProduct = ({ product, addToCart }) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
 const subTotal = product.price * quantity;

    addToCart(product, quantity);
    toast.success(
      `${product.nameProduct} agregado al carrito. Cantidad: ${quantity}`
    );
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "0.5rem",
        overflow: "hidden",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
        transition: "box-shadow 0.3s",
        position: "relative",
      }}
      className="group"
    >
      {/* Imagen del producto */}
      <div style={{ backgroundColor: "#f3f4f6", position: "relative" }}>
        <img
          src={product.photo}
          alt={product.nameProduct}
          style={{
            width: "100%",
            height: "160px",
            objectFit: "cover",
            transition: "transform 0.3s",
          }}
          className="group-hover:scale-105"
        />

        {product.stock <= 5 && product.stock > 0 && (
          <div
            style={{
              position: "absolute",
              top: "0.75rem",
              right: "0.75rem",
              backgroundColor: "#f97316",
              color: "white",
              padding: "0.25rem 0.5rem",
              borderRadius: "0.25rem",
              fontSize: "0.75rem",
              fontWeight: "600",
            }}
          >
            ¡Últimas {product.stock}!
          </div>
        )}

        {product.stock === 0 && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                backgroundColor: "#dc2626",
                color: "white",
                padding: "0.5rem 0.75rem",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: "600",
              }}
            >
              Sin stock
            </span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div style={{ padding: "1rem" }}>
        {/* Nombre */}
        <h3
          style={{
            fontSize: "0.875rem",
            fontWeight: "500",
            color: "#111827",
            marginBottom: "0.5rem",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.nameProduct}
        </h3>

        {/* Precio y colores */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.75rem",
          }}
        >
          <p
            style={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              color: "#111827",
            }}
          >
            ${product.unitPrice?.toFixed(2) || "0.00"}
          </p>

          {/* Colores */}
          <div style={{ display: "flex", gap: "0.25rem" }}>
            <div style={dotStyle("#ef4444")} />
            <div style={dotStyle("#3b82f6")} />
            <div style={dotStyle("#10b981")} />
          </div>
        </div>

        {/* Stock */}
        <p
          style={{
            fontSize: "0.75rem",
            color: "#6b7280",
            marginBottom: "0.75rem",
          }}
        >
          Stock: {product.stock} unidades
        </p>

        {/* Botón */}
        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          style={{
            width: "100%",
            padding: "0.5rem 1rem",
            borderRadius: "0.375rem",
            backgroundColor: product.stock === 0 ? "#923922" : "#923922",
            color: product.stock === 0 ? "#6b7280" : "white",
            fontSize: "0.875rem",
            border: "none",
            cursor: product.stock === 0 ? "not-allowed" : "pointer",
            transition: "background-color 0.3s",
          }}
        >
          {product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
};

// Función auxiliar para crear los estilos de los circulitos de colores
const dotStyle = (bgColor) => ({
  width: "1rem",
  height: "1rem",
  borderRadius: "9999px",
  backgroundColor: bgColor,
  border: "1px solid #d1d5db",
});

export default CardProduct;
