import React from 'react';
import './mainPage.css'; 
import salaE from '../../img/caruselEstancias/salaE.jpg';
import cocinaE from '../../img/caruselEstancias/cocinaE.jpg';   
import comedorE from '../../img/caruselEstancias/comedorE.jpg';
import bañoE from '../../img/caruselEstancias/bañoE.jpg';
import dormitorioE from '../../img/caruselEstancias/dormitorioE.jpg';
import decoracionE from '../../img/caruselEstancias/decoracionE.jpg';
import iluminacionE from '../../img/caruselEstancias/iluminacionE.jpg';

function MainPage() {
  return (
    
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

    
  );
}

export default MainPage;
