import React from 'react';
import { Search, PlusCircle, Edit, Trash2 } from 'lucide-react';
import contenedores from '../../img/contenedor.png';

export default function Proveedores() {
  // Datos de ejemplo solo para visualización
  const proveedoresEjemplo = [
    { id: 1, nombre: "Maderas del Norte", email: "contacto@maderasnorte.com", telefono: "+503 2345 6789", ubicacion: "Nacional" },
    { id: 2, nombre: "Maderas del Sur", email: "contacto@maderassur.com", telefono: "+503 2345 6789", ubicacion: "Nacional" },
    { id: 3, nombre: "Maderas del Este", email: "contacto@maderaseste.com", telefono: "+503 2345 6789", ubicacion: "Nacional" },
    { id: 4, nombre: "Maderas del Oeste", email: "contacto@maderasoeste.com", telefono: "+503 2345 6789", ubicacion: "Nacional" },
    { id: 5, nombre: "Maderas del Centro", email: "contacto@maderascentro.com", telefono: "+503 2345 6789", ubicacion: "Nacional" },
    { id: 6, nombre: "Maderas Importadas", email: "contacto@maderasimportadas.com", telefono: "+503 2345 6789", ubicacion: "Nacional" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Cabecera de la página */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Proveedores</h1>
        <div className="border-b border-gray-300 mb-4"></div>
        
        {/* Imagen de cabecera */}
        <div className="w-full h-48 bg-gray-200 mb-6 overflow-hidden">
          <img 
            src="contenedores"
            srcSet={contenedores} 
            alt="Contenedores de carga" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h2 className="text-lg font-medium text-gray-700 mb-2">Listado de proveedores</h2>
        <div className="border-b border-gray-300 mb-6"></div>
      </div>

      {/* Contenedor principal */}
      <div className="bg-gray-100 p-6 rounded-md">
        {/* Barra de búsqueda y botón de agregar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar..."
              className="pl-10 pr-4 py-2 w-full rounded-md border-gray-300 bg-white"
            />
          </div>
          <button
            className="flex items-center justify-center gap-2 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
          >
            <PlusCircle className="h-5 w-5" />
            <span>Agregar Proveedor</span>
          </button>
        </div>

        {/* Tabla de proveedores */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-md overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-3 text-gray-700">Proveedor</th>
                <th className="px-6 py-3 text-gray-700">Email</th>
                <th className="px-6 py-3 text-gray-700">Teléfono</th>
                <th className="px-6 py-3 text-gray-700">Ubicación</th>
                <th className="px-6 py-3 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {proveedoresEjemplo.map((proveedor) => (
                <tr key={proveedor.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{proveedor.nombre}</td>
                  <td className="px-6 py-4">{proveedor.email}</td>
                  <td className="px-6 py-4">{proveedor.telefono}</td>
                  <td className="px-6 py-4">{proveedor.ubicacion}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button
                        className="p-1.5 bg-red-600 text-white rounded-md hover:bg-red-700"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        className="p-1.5 bg-red-600 text-white rounded-md hover:bg-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}