import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";

/**
 * Middleware para validar el token de autenticación y roles permitidos.
 * @param {Array} allowedUserTypes - Lista de tipos de usuario permitidos (ej: ["Admin", "Employee"]).
 */
export const validateAuthToken = (allowedUserTypes = []) => {
  return (req, res, next) => {
    try {
      // 1. Obtener el token de las cookies
      const { authToken } = req.cookies;

      if (!authToken) {
        return res.status(401).json({
          success: false,
          message: "Token no proporcionado. Debes iniciar sesión.",
        });
      }

      // 2. Verificar y decodificar el token
      const decoded = jsonwebtoken.verify(authToken, config.JWT.secret);
      req.user = decoded; // ahora puedes acceder a req.user.id, req.user.userType, etc.

      // 3. Validar si el rol del usuario está autorizado para esta ruta
      if (!allowedUserTypes.includes(decoded.userType)) {
        return res.status(403).json({
          success: false,
          message: "Acceso denegado. No tienes permisos suficientes.",
        });
      }

      // 4. Pasar al siguiente middleware
      next();

    } catch (error) {
      console.error("Error al validar token:", error.message);
      return res.status(401).json({
        success: false,
        message: "Token inválido o expirado. Vuelve a iniciar sesión.",
      });
    }
  };
};
