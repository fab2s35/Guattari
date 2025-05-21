import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormTemplate from '../../components/FormReu/Form.jsx';
import './supplier.css';

const AgregarProvedor = () => {
  const navigate = useNavigate(); // Hook para navegación

  const proveedorFields = [
    {
      label: 'Proveedor',
      name: 'nombre',
      type: 'text',
      required: true
    },
    {
      label: 'Email',
      name: 'direccion',
      type: 'text',
      required: true
    },
    {
      label: 'Teléfono',
      name: 'telefono',
      type: 'tel',
      required: true
    },
    {
      label: 'Ubicación',
      name: 'ubicacion',
      type: 'text',
      required: true
    }
  ];

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (formValues) => {
    console.log('Datos del proveedor:', formValues);
    // Aquí puedes agregar la lógica para enviar los datos al backend
    // Por ejemplo: axios.post('/api/sucursales', formValues);

    // Redireccionar a la página /branch después de guardar
    navigate('/supplier');
  };

  return (
    <div className="agregar-sucursal-container">
      <FormTemplate 
        title="Agregar Proveedor"
        fields={proveedorFields}
        submitButtonText="Agregar"
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AgregarProvedor;