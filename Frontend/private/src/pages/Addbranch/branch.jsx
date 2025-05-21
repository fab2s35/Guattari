import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormTemplate from '../../components/FormReu/Form.jsx';
import './branch.css';

const AgregarSucursal = () => {
  const navigate = useNavigate(); // Hook para navegación

  const sucursalFields = [
    {
      label: 'Sucursal',
      name: 'nombre',
      type: 'text',
      required: true
    },
    {
      label: 'Dirección',
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
      label: 'Encargado',
      name: 'encargado',
      type: 'text',
      required: true
    }
  ];

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (formValues) => {
    console.log('Datos de la sucursal:', formValues);
    // Aquí puedes agregar la lógica para enviar los datos al backend
    // Por ejemplo: axios.post('/api/sucursales', formValues);

    // Redireccionar a la página /branch después de guardar
    navigate('/branch');
  };

  return (
    <div className="agregar-sucursal-container">
      <FormTemplate 
        title="Agregar sucursal"
        fields={sucursalFields}
        submitButtonText="Agregar"
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AgregarSucursal;