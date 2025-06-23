// src/services/registerService.js
export async function registerUser(formData) {
    try {
      const response = await fetch("http://localhost:4000/api/registerClients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include", 
      });
  
      const data = await response.json();
      return { ok: response.ok, data };
    } catch (error) {
      console.error("Error en registerUser:", error);  
      return {
        ok: false,
        data: { message: "Error al conectar con el servidor" },
      };
    }
  }
  
  