import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Sidecart = ({ isOpen, onClose }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartWithSubtotal = savedCart.map(item => ({
      ...item,
      subtotal: item.subtotal ?? (item.quantity * (item.unitPrice || 0)),
    }));
    setCart(cartWithSubtotal);
  }, [isOpen]);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success("Carrito actualizado");
  };

  const handleQuantityChange = (idProduct, delta) => {
    const newCart = cart.map((item) => {
      if (item.idProduct === idProduct) {
        const newQuantity = item.quantity + delta;
        if (newQuantity < 1) return item;
        return {
          ...item,
          quantity: newQuantity,
          subtotal: newQuantity * item.unitPrice,
        };
      }
      return item;
    });
    updateCart(newCart);
  };

  const handleRemove = (idProduct) => {
    const newCart = cart.filter((item) => item.idProduct !== idProduct);
    updateCart(newCart);
  };

  const total = cart.reduce((acc, item) => acc + (item.subtotal || 0), 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ transitionDuration: "300ms" }}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-xl font-bold">Tu carrito</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-black text-lg">
          ✕
        </button>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-150px)]">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Carrito vacío</p>
        ) : (
          cart.map((item) => (
            <div key={item.idProduct} className="mb-4 border-b pb-2">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <button
                    onClick={() => handleQuantityChange(item.idProduct, -1)}
                    className="px-2 py-1 border rounded-l"
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.idProduct, 1)}
                    className="px-2 py-1 border rounded-r"
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold">${item.subtotal.toFixed(2)}</p>
              </div>
              <button
                onClick={() => handleRemove(item.idProduct)}
                className="text-sm text-red-600 mt-2"
              >
                Eliminar
              </button>
            </div>
          ))
        )}
      </div>
      <div className="p-4 border-t">
        <p className="text-lg font-bold mb-2">Total: ${total.toFixed(2)}</p>
        <button
          disabled={cart.length === 0}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
          onClick={() => toast.success("Compra finalizada (simulada)")}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default Sidecart;
