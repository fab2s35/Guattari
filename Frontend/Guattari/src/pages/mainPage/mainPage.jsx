import React from 'react';
import './mainPage.css'; 
import salaE from '../../img/caruselEstancias/salaE.jpg';
import cocinaE from '../../img/caruselEstancias/cocinaE.jpg';   
import comedorE from '../../img/caruselEstancias/comedorE.jpg';
import bañoE from '../../img/caruselEstancias/bañoE.jpg';
import dormitorioE from '../../img/caruselEstancias/dormitorioE.jpg';
import decoracionE from '../../img/caruselEstancias/decoracionE.jpg';
import iluminacionE from '../../img/caruselEstancias/iluminacionE.jpg';
import bannerPrincipal from '../../img/bannerPrincipal.png'; 
import bannerGrid1 from '../../img/bannerGrid1.png';
import bannerGrid2 from '../../img/bannerGrid2.png';
import bannerGrid3 from '../../img/bannerGrid3.png';
import guattariLogo from '../../img/GUATTARI_logo-ver1.png';
import salaM from '../../img/salaM.png';
import habitacionM from '../../img/habitacionM.png';
import comedorM from '../../img/comedorM.png';
import decoracionM from '../../img/decoracionM.png';

function MainPage() {
  return (
 <>  
    <div id="slider-rooms" class="full-width-xs">
         <h2>Estancias</h2>
  <wc-carousel class="carousel" id="slider-rooms-carousel">

    <a href="/puertorico/es/rooms/dormitorio" class="room-card">
      <sk-aspect-ratio ratio="wide">
        <img class="room-img" src={salaE}  alt="Sala" onerror="this.src='/webroot/img/icons/noImage.png'" />
      </sk-aspect-ratio>
      <div class="room-name">Sala</div>
    </a>

    <a href="/puertorico/es/rooms/sala" class="room-card">
      <sk-aspect-ratio ratio="wide">
        <img class="room-img" src={cocinaE} alt="Cocina" onerror="this.src='/webroot/img/icons/noImage.png'" />
      </sk-aspect-ratio>
      <div class="room-name">Cocina</div>
    </a>

    <a href="/puertorico/es/rooms/jardin-terraza-y-balcon" class="room-card">
      <sk-aspect-ratio ratio="wide">
        <img class="room-img" src={comedorE} alt="Comedor" onerror="this.src='/webroot/img/icons/noImage.png'" />
      </sk-aspect-ratio>
      <div class="room-name">Comedor</div>
    </a>

    <a href="/puertorico/es/rooms/casa-de-vacaciones" class="room-card">
      <sk-aspect-ratio ratio="wide">
        <img class="room-img" src={bañoE} alt="Baño" onerror="this.src='/webroot/img/icons/noImage.png'" />
      </sk-aspect-ratio>
      <div class="room-name">Baño</div>
    </a>

    <a href="/puertorico/es/rooms/comedor" class="room-card">
      <sk-aspect-ratio ratio="wide">
        <img class="room-img" src={dormitorioE} alt="Dormitorios" onerror="this.src='/webroot/img/icons/noImage.png'" />
      </sk-aspect-ratio>
      <div class="room-name">Dormitorios</div>
    </a>

    <a href="/puertorico/es/rooms/cocinas" class="room-card">
      <sk-aspect-ratio ratio="wide">
        <img class="room-img" src={decoracionE} alt="Decoración" onerror="this.src='/webroot/img/icons/noImage.png'" />
      </sk-aspect-ratio>
      <div class="room-name">Decoración</div>
    </a>

    <a href="/puertorico/es/rooms/espacio-de-trabajo" class="room-card">
      <sk-aspect-ratio ratio="wide">
        <img class="room-img" src={iluminacionE}alt="Iluminación" onerror="this.src='/webroot/img/icons/noImage.png'" />
      </sk-aspect-ratio>
      <div class="room-name">Iluminación</div>
    </a>
  </wc-carousel>
</div>



<div id="principalBanner" className="full-width"> 
  <img src={bannerPrincipal} alt="Banner Principal" className="banner-img" />

  <div className="banner-left">
    <div className="banner-content-background">
      <p>Trae las ideas que amas</p>
      <p>a tus espacios más</p>
      <p>íntimos.</p>
    </div>
  </div>

  <div className="banner-right">
    <div className="banner-content-background">
      <p>Guattari coloca a tu alcanze lo necesario</p>
      <p>para hacer el proceso de llenar tus </p>
      <p>lugares en un sueño hecho realidad</p>
      <button className="btn btn-primary btn-banner">Vive la experiencia Guattari</button>
    </div>
  </div>
</div>




<div className="banner-grid">
  <div className="banner-grid-left">
    <img src={bannerGrid1} alt="Banner 1" className="banner-grid-img" />
    <img src={guattariLogo} alt="Guattari Logo" className="guattari-logo" />
    <div className="banner-text-1">Guattari es todo lo que deseas a la punta de tus manos.</div>
  </div>

  <div className="banner-grid-right">
    <div className="banner-grid-right-1">
      <img src={bannerGrid2} alt="Banner 2" className="banner-grid-img" />
      <div className="banner-text-2">Comienza a disfrutar todo lo que Guattari tiene que ofrecer.</div>
    </div>

    <div className="banner-grid-right-2">
      <img src={bannerGrid3} alt="Banner 3" className="banner-grid-img" />
      <div className="banner-grid-right-2-content">
        <div className="banner-text-3">Guattari. Cuando y donde nos necesites.</div>
        <button className="btn btn-primary btn-banner-right">COMPRAR AHORA</button>
      </div>
    </div>
  </div>
</div>



<div className="bedroom-line">
    <h3>¿Qué vas a transformar hoy?</h3>
    <hr></hr>
    <div className="bedroom-line-content">
        <div className="bedroom-container">
    <img src={salaM} alt="Salas" className="bedroom-line-img" />
    <button className="btn btn-primary btn-bedroom">Salas</button>
        </div>
        <div className="bedroom-container">
    <img src={habitacionM} alt="Habitacion" className="bedroom-line-img" />
    <button className="btn btn-primary btn-bedroom">Habitaciones</button>
        </div>
        <div className="bedroom-container">
    <img src={comedorM} alt="Comedor" className="bedroom-line-img" />
    <button className="btn btn-primary btn-bedroom">Comedores</button>
        </div>
        <div className="bedroom-container">
    <img src={decoracionM} alt="Decoracion" className="bedroom-line-img" />
    <button className="btn btn-primary btn-bedroom">Decoraciones</button>
        </div>
    </div>
</div>

</> 
  );
}

export default MainPage;
