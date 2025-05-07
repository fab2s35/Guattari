import React from 'react';
import './MainPage.css'; 
//Imports de imgs
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
import tercerBanner from '../../img/tercerBanner.png';
import cuartoBanner from '../../img/cuartoBanner.png';
import categoria1Img from '../../img/Estancias/7.png';
import sofa1 from '../../img/sofasss/sofa1.png';
import sillaCP from '../../img/categoriasPopulares/sillas.png';
import mesaNocheCP from '../../img/categoriasPopulares/mesaNoche.png';
import alfombraCP from '../../img/categoriasPopulares/alfombra.png';
import lamparaCP from '../../img/categoriasPopulares/lamparas.png';
import comedorCP from '../../img/categoriasPopulares/comedor.png';
import estanteriaCP from '../../img/categoriasPopulares/estanteria.png';
import mesasCentroCP from '../../img/categoriasPopulares/mesasCentro.png';
import jarronesCP from '../../img/categoriasPopulares/jarron.png';
import lampshadeCP from '../../img/categoriasPopulares/lampshade.png';
import camaCP from '../../img/categoriasPopulares/cama.png';

function MainPage() {
  return (
    <>  
      <div id="slider-rooms" className="full-width-xs">
        <h2>Estancias</h2>
        <wc-carousel className="carousel" id="slider-rooms-carousel">

          <a href="/estancias" className="room-card">
            <sk-aspect-ratio ratio="wide">
              <img className="room-img" src={salaE} alt="Sala" onError="this.src='/webroot/img/icons/noImage.png'" />
            </sk-aspect-ratio>
            <div className="room-name">Sala</div>
          </a>

          <a href="/estancias" className="room-card">
            <sk-aspect-ratio ratio="wide">
              <img className="room-img" src={cocinaE} alt="Cocina" onError="this.src='/webroot/img/icons/noImage.png'" />
            </sk-aspect-ratio>
            <div className="room-name">Cocina</div>
          </a>

          <a href="/estancias" className="room-card">
            <sk-aspect-ratio ratio="wide">
              <img className="room-img" src={comedorE} alt="Comedor" onError="this.src='/webroot/img/icons/noImage.png'" />
            </sk-aspect-ratio>
            <div className="room-name">Comedor</div>
          </a>

          <a href="/estancias" className="room-card">
            <sk-aspect-ratio ratio="wide">
              <img className="room-img" src={bañoE} alt="Baño" onError="this.src='/webroot/img/icons/noImage.png'" />
            </sk-aspect-ratio>
            <div className="room-name">Baño</div>
          </a>

          <a href="/estancias" className="room-card">
            <sk-aspect-ratio ratio="wide">
              <img className="room-img" src={dormitorioE} alt="Dormitorios" onError="this.src='/webroot/img/icons/noImage.png'" />
            </sk-aspect-ratio>
            <div className="room-name">Dormitorios</div>
          </a>

          <a href="/estancias" className="room-card">
            <sk-aspect-ratio ratio="wide">
              <img className="room-img" src={decoracionE} alt="Decoración" onError="this.src='/webroot/img/icons/noImage.png'" />
            </sk-aspect-ratio>
            <div className="room-name">Decoración</div>
          </a>

          <a href="/estancias" className="room-card">
            <sk-aspect-ratio ratio="wide">
              <img className="room-img" src={iluminacionE} alt="Iluminación" onError="this.src='/webroot/img/icons/noImage.png'" />
            </sk-aspect-ratio>
            <div className="room-name">Iluminación</div>
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
      <a className="btn btn-primary btn-banner" href='/estancias' role="button"> Vive la experiencia Guattari </a>
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
        <button className="btn btn-primary btn-banner-right" 
        onClick={() => window.location.href = '/estancias'}>COMPRAR AHORA </button>

      </div>
    </div>
  </div>
</div>



<div className="bedroom-line">
    <h3>¿Qué vas a transformar hoy?</h3>
    <hr />
    <div className="bedroom-line-content">
        <div className="bedroom-container">
            <img src={salaM} alt="Salas" className="bedroom-line-img" />
            <button className="btn btn-primary btn-bedroom"
                onClick={() => window.location.href = '/salas'}> Salas
            </button>
        </div>
        <div className="bedroom-container">
            <img src={habitacionM} alt="Habitación" className="bedroom-line-img" />
            <button className="btn btn-primary btn-bedroom"
                onClick={() => window.location.href = '/habitaciones'}> Habitaciones
            </button>
        </div>
        <div className="bedroom-container">
            <img src={comedorM} alt="Comedor" className="bedroom-line-img" />
            <button className="btn btn-primary btn-bedroom"
                onClick={() => window.location.href = '/comedores'}> Comedores
            </button>
        </div>
        <div className="bedroom-container">
            <img src={decoracionM} alt="Decoración" className="bedroom-line-img" />
            <button className="btn btn-primary btn-bedroom"
                onClick={() => window.location.href = '/decoraciones'}> Decoraciones
            </button>
        </div>
    </div>
</div>




<div className="tercer-banner">
    <div className="tercer-banner-content">
      <div className="tercer-banner-img">
        <img src={tercerBanner} alt="Banner tercero" className="banner-img" />
  </div>
      <div className="tercer-banner-text">
        <h2 className='h2-text-1'>Guattari, diseño como lo</h2>
        <h2 className='h2-text-2'>imaginas.</h2>
        <p>Somos una tienda de diversos tipos de muebles y decoración para tu hogar, con un <b>estilo libre y diferente. </b>
           Juntamos la comodidad que conocemos de lo moderno con la calidad estética retro, sin olvidar nuestras raíces <b>postmodernistas</b>, 
          que pueden ser encontradas a través de cada producto.</p>
       </div>
  </div>
</div>





<div className="categorias-populares">
<h3>Categorias populares</h3>
    <hr></hr>
    <div className="categorias-populares-content">

    <div className="categorias-populares-container">

<a href="/categoria1" className="categorias-populares-item">
  <img src={sillaCP} alt="Categoría 1" className="categorias-populares-image" />
  <span className="categorias-populares-name">Sillas</span>
</a>

<a href="/categoria2" className="categorias-populares-item">
  <img src={mesaNocheCP} alt="Categoría 2" className="categorias-populares-image" />
  <span className="categorias-populares-name">Mesitas de noche</span>
</a>

<a href="/categoria3" className="categorias-populares-item">
  <img src={alfombraCP} alt="Categoría 3" className="categorias-populares-image" />
  <span className="categorias-populares-name">Alfombras y tapetes</span>
</a>

<a href="/categoria4" className="categorias-populares-item">
  <img src={lamparaCP} alt="Categoría 4" className="categorias-populares-image" />
  <span className="categorias-populares-name">Lamparas decorativas</span>
</a>

<a href="/categoria5" className="categorias-populares-item">
  <img src={comedorCP} alt="Categoría 5" className="categorias-populares-image" />
  <span className="categorias-populares-name">Conjunto de comedor</span>
</a>

<a href="/categoria1" className="categorias-populares-item">
  <img src={estanteriaCP} alt="Categoría 6" className="categorias-populares-image" />
  <span className="categorias-populares-name">Estanterías y librerías</span>
</a>

<a href="/categoria2" className="categorias-populares-item">
  <img src={mesasCentroCP} alt="Categoría 7" className="categorias-populares-image" />
  <span className="categorias-populares-name">Mesas de centro</span>
</a>

<a href="/categoria3" className="categorias-populares-item">
  <img src={jarronesCP} alt="Categoría 8" className="categorias-populares-image" />
  <span className="categorias-populares-name">Jarrones y macetas</span>
</a>

<a href="/categoria4" className="categorias-populares-item">
  <img src={lampshadeCP} alt="Categoría 9" className="categorias-populares-image" />
  <span className="categorias-populares-name">Pantallas de lampara</span>
</a>

<a href="/categoria5" className="categorias-populares-item">
  <img src={camaCP} alt="Categoría 10" className="categorias-populares-image" />
  <span className="categorias-populares-name">Camas</span>
</a>
</div>        
     </div>       
</div>




<hr className='border-1'></hr>
<div className="cuarto-banner">
  <div className="cuarto-banner-content">
    <div className="cuarto-banner-text">
      <h2>The style that never left.</h2>
    </div>
    <div className="cuarto-banner-img">
      <img src={cuartoBanner} alt="Banner cuarto" className="banner-img" />
    </div>
  </div>
</div>
<hr className='border-2'></hr>







</> 
  );
}

export default MainPage;
