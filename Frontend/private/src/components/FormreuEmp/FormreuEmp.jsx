import React from 'react';
import './FormreuEmp.css';
/*import FormTemplate from '../../components/FormreuEmp/FormreuEmp.jsx';     Comentario temp*/ 
import FormreuEmp from '../../components/FormreuEmp/FormreuEmp.jsx';

/**
 * Componente de formulario reutilizable
 * @param {Object} props
 * @param {string} props.title - Título del formulario
 * @param {Array} props.fields - Campos del formulario [{label: "Nombre", name: "nombre", type: "text"}, ...]
 * @param {string} props.submitButtonText - Texto del botón de envío
 * @param {function} props.onSubmit - Función que se ejecuta al enviar el formulario
 */
const FormTemplate = ({ title, fields, submitButtonText, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un objeto con los valores del formulario
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    // Llamar a la función onSubmit pasándole los valores
    onSubmit(formValues);
  };

  return (
    <div className="form-template-container">
      <h1 className="form-title">{title}</h1>
      <hr className="form-divider" />

      <div className="form-content-wrapper">
        <div className="form-content">
          <div className="form-panel">
            <form onSubmit={handleSubmit}>
              {fields.map((field, index) => (
                <div key={index} className="form-field">
                  <label htmlFor={field.name} className="form-label">
                    {field.label}
                  </label>

                  {field.type === 'accordion' ? (
                    <details className="accordion-field">
                      <summary className="accordion-summary">
                        {field.summary || `Seleccionar ${field.label}`}
                      </summary>
                      <select
                        id={field.name}
                        name={field.name}
                        className="form-input"
                        required={field.required !== false}
                      >
                        <option value="">Seleccione una opción</option>
                        {field.options?.map((option, i) => (
                          <option key={i} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </details>
                  ) : (
                    <input
                      type={field.type || 'text'}
                      id={field.name}
                      name={field.name}
                      className="form-input"
                      placeholder={field.placeholder || ''}
                      required={field.required !== false}
                    />
                  )}
                </div>
              ))}

              <div className="form-submit-container">
                <button type="submit" className="form-submit-button">
                  {submitButtonText || 'Agregar'}
                </button>
              </div>
            </form>
            <FormreuEmp {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTemplate;
