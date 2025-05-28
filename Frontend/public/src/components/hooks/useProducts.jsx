// useProducts.js
import { useState, useCallback } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Obtener productos
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/api/products");
      if (!response.ok) throw new Error("Error al obtener productos");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Agregar producto
  const addProduct = async (newProduct) => {
    try {
      const response = await fetch("http://localhost:4000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      if (!response.ok) throw new Error("Error al agregar el producto");
      const addedProduct = await response.json();
      setProducts((prevProducts) => [...prevProducts, addedProduct]);
    } catch (error) {
      setError(error.message);
      console.error("Error adding product:", error);
    }
  };

  // Actualizar producto
  const updateProduct = async (updatedProduct) => {
    try {
      const response = await fetch(`http://localhost:4000/api/products/${updatedProduct._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });
      if (!response.ok) throw new Error("Error al actualizar el producto");
      const updated = await response.json();
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === updated._id ? updated : product
        )
      );
    } catch (error) {
      setError(error.message);
      console.error("Error updating product:", error);
    }
  };

  // Eliminar producto
  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/products/${productId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Error al eliminar el producto");
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      setError(error.message);
      console.error("Error deleting product:", error);
    }
  };

  return { products, loading, error, fetchProducts, addProduct, updateProduct, deleteProduct };
};

export default useProducts;

