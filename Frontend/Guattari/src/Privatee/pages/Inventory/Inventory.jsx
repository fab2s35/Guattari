import React from 'react';
import './Inventory.css'; 
import IbannerGrid1 from '../../img/Banner-Inventory/IbannerGrid1.png';
import IbannerGrid2 from '../../img/Banner-Inventory/IbannerGrid2.png';
import IbannerGrid3 from '../../img/Banner-Inventory/IbannerGrid3.png';


function Inventory() {
    return (
      <> 
      {/*Titulo de la pagina*/}
      <div className="container-inventory">
      <h1 className="productos-titulo">Inventario</h1>
      <hr className="productos-divider" />
      </div>
{/*Fin del itulo de la pagina*/}


{/*Banner grid de la página*/}
<div className="banner-grid">
  <div className="banner-grid-left">
    <img src={IbannerGrid1} alt="Banner 1" className="banner-grid-img" />
  </div>

  <div className="banner-grid-right">
    <div className="banner-grid-right-1">
      <img src={IbannerGrid2} alt="Banner 2" className="banner-grid-img" />
    </div>

    <div className="banner-grid-right-2">
      <img src={IbannerGrid3} alt="Banner 3" className="banner-grid-img" />
    </div>
  </div>
</div>
{/*Fin del banner grid de la página*/}


{/*Titulo de la seccion*/}
<div className="container-inventory">
      <h1 className="productos-titulo">Listado de productos</h1>
      <hr className="productos-divider" />
      </div>
{/*Fin del titulo de seccion*/}

    </> 
  );
}

export default Inventory;
