import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api/productos'; // cambia si es necesario

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Obtener productos
  const fetchProducts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error al obtener productos:", err);
    } finally {
      setLoading(false);
    }
  };

  // Crear producto
  const addProduct = async (product) => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });
      const newProduct = await res.json();
      setProducts([...products, newProduct]);
    } catch (err) {
      console.error("Error al agregar producto:", err);
    }
  };

  // Actualizar producto
  const updateProduct = async (id, updatedData) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });
      fetchProducts(); // Refresca lista
    } catch (err) {
      console.error("Error al actualizar producto:", err);
    }
  };

  // Eliminar producto
  const deleteProduct = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Error al eliminar producto:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    addProduct,
    updateProduct,
    deleteProduct,
    fetchProducts,
  };
};

export default useProducts;
