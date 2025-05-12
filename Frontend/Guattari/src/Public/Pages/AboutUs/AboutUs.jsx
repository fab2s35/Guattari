import React from 'react';
import './AboutUs.css'; //Conectar CSS
import AUBanner from '../../img/aboutUsBanner/Banner_AboutUs_One.png';
import AUBanner2 from '../../img/aboutUsBanner/Banner_AboutUs_two.png';
import AUBanner3 from '../../img/aboutUsBanner/Banner_AboutUs_Three.png';
import GuattariLogo from '../../img/aboutUsBanner/GUATTARI_logo.png';
import AUSofa from '../../img/muebles-AboutUs/sofa-One.png';
import AUSofaTwo from '../../img/muebles-AboutUs/sofa-Two.png';
import AUSofaThree from '../../img/muebles-AboutUs/sofa-Three.png';
import AUMision from '../../img/muebles-AboutUs/misioon.png';
import AUVision from '../../img/muebles-AboutUs/visioon.png';
import AUValores from '../../img/muebles-AboutUs/valores.png';

//Integrantes
import Fab from '../../img/muebles-AboutUs/fab.png';
import Pao from '../../img/muebles-AboutUs/pao.png';
import Dav from '../../img/muebles-AboutUs/dav.png';


function AboutUs() {
    return(
        <>  
        
        <div  className="BannerAboutUs-container">
            

            <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
            
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={AUBanner} id='imgBannerOne' class="d-block w-100" alt="Banner About Us One"/>
                        <div className="carousel-caption">
                            <h1 class="title-AboutUs"><b>Sobre Nosotros</b></h1> 
                            <button class="btnBanner">Conoce más</button>
                            <hr class="white-line"/>
                            <img src={GuattariLogo} id="imgGuattariLogo" alt="Logo Guattari" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={AUBanner2} id='imgBannerOne' class="d-block w-100" alt="Banner About Us Two"/>
                        <div className="carousel-caption">
                            <h1 class="title-AboutUs"><b>Nuestra Historia</b></h1>
                            <button class="btnBanner">Conoce más</button>
                            <hr class="white-line"/>
                            <img src={GuattariLogo} id="imgGuattariLogo" alt="Logo Guattari" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={AUBanner3} id='imgBannerOne' class="d-block w-100" alt="Banner About Us Three"/>
                        <div className="carousel-caption">
                            <h1 class="title-AboutUs"><b>Nuestro Equipo</b></h1>
                            <button class="btnBanner">Conoce más</button>
                            <hr class="white-line"/>
                            <img src={GuattariLogo} id="imgGuattariLogo" alt="Logo Guattari" />
                        </div>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

            </div>   

           
        </div>




        <div>

            <div className="Card-History"> 

                <div class="text-AboutUs">
                    <p>Una tienda de muebles y decoración para el hogar con un estilo enfocado en juntar la comodidad de lo moderno con la 
                        estética retro o vintage, junto con elementos del postmodernismo.</p>
                    <br />
                    <h2> <b>Nuestra Historia </b></h2>
                    <br />
                    <p> Guattari inició con la de idea de querer poseer algo que era complicado de encontrar, como lo es el diseño del hogar 
                        que no encaja con los mismo tipos de muebles que se nos son vendidos por cada tienda departamental que se encuentra 
                        en el mercado, un diseño del hogar que sigue su propio tipo de tendencia, reviviendo eras y estilos que brindan una 
                        sensación diferente a cada lugar en el que son colocados. </p>

                </div>

                <div>
                <div class="card-group">
                    <div class="card">
                        <img src={AUSofa} id="imgSofa" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Inicio</h5>
                        <p class="card-text"> Fue el inicio de Guattari, una marca que nació con la pasión de rescatar la esencia y el estilo 
                        de épocas pasadas, reinventándolos para los hogares modernos. Inspirados en el diseño clásico y la nostalgia de los 
                        muebles vintage, Guattari comenzó su camino con la misión de ofrecer piezas únicas, que combinan la elegancia de lo 
                        retro con la funcionalidad contemporánea.</p>
                        <p class="card-text"><small class="text-body-secondary">12 de marzo de 2021</small></p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={AUSofaTwo} id="imgSofa"class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Expanción</h5>
                        <p class="card-text">A medida que la demanda crecía, se empezó a expandir el negocio, lo que llevó a la apertura de nuevas 
                        sucursales. Cada nueva tienda representaba una oportunidad para acercar el estilo único de Guattari a más personas, consolidando 
                        así su presencia en el mercado y fortaleciendo la identidad de la marca en distintas zonas.</p>
                        <p class="card-text"><small class="text-body-secondary">28 de septiembre de 2023</small></p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={AUSofaThree} id="imgSofa" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Digitalización</h5>
                        <p class="card-text">Guattari marca el inicio de una nueva era en el diseño de interiores, fusionando lo mejor del mobiliario retro 
                        con la comodidad de las compras en línea. Ofrecemos muebles únicos, restaurados con historia y estilo, accesibles desde cualquier lugar.
                        Descubre piezas que no solo decoran, sino que cuentan historias y dan carácter a tu hogar.</p>
                        <p class="card-text"><small class="text-body-secondary">27 de abril de 2025</small></p>
                        </div>
                    </div>
                    </div>
                </div>
                <br />
                <div class="text-AboutUs">
                    <h3>¿Por qué el nombre de Guattari?</h3>
                    <br />
                    <p>Por el filosofo pionero en el posmodernismo<br /> “Felix Guattari”</p>
                </div>


            </div>

        </div>





        <div className="conteiner-mision">
        <img src={AUMision} id="imgMision" class="rounded float-end" alt="..."/>
            <div className="fondo-mision">
            <h2 className="textMision"><b>Misión</b></h2>
            <p className="textMision">Ser una empresa que proporcione a nivel nacional productos que satisfagan la necesidad de los clientes desde un
                punto de vista artístico y práctico, destacando en el mercado con una estética nostálgica junto a la comodidad 
                y funcional de lo moderno.</p>
            </div>
        </div>


        <div className="conteiner-vision">
        <img src={AUVision} id="imgVision" class="rounded float-start" alt="..."/>
            <div className="fondo-vision">
            <h2 className="textVision"><b>Visión</b></h2>
            <p className="textVision">Ser una empresa que proporcione a nivel nacional productos que satisfagan la necesidad de los clientes desde un
                punto de vista artístico y práctico, destacando en el mercado con una estética nostálgica junto a la comodidad 
                y funcional de lo moderno.</p>
            </div>
        </div>


        <div className="conteiner-valores">
            <div className="fondo-valores">
            <img src={AUValores} id="imgValores" class="rounded float-end" alt="..."/>
            <h2 className="textValores"><b>Valores</b></h2>
            <p className="textValores">1) Compromiso al realizar y exportar productos en una excelente condición. <br />
            2) Constante innovación a la hora de crear productos. <br />
            3) Proporcionar muebles que lleguen a nuestros estándares de calidad junto a un precio justo.
            </p>
            </div>
        </div>


        <div>
            <br /><br /><br />
            <div class="title-Integrantes">
                <h2> 
                <b>Nuestro Equipo </b>
                </h2>
                <br />
            </div>
                <div class="card-group">
                    <div class="card">
                        <img src={Fab} id="imgIntegrante" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Fabiola Osorto</h5> <p><small class="text-body-secondary">CEO</small></p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Pao} id="imgIntegrante"class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Paola Rivera</h5>
                        <p><small class="text-body-secondary">CEO</small></p>
                        </div>
                    </div>

                    
                    <div class="card">
                        <img src={Dav} id="imgIntegrante" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">David Zepeda</h5>
                        <p><small class="text-body-secondary">CEO</small></p>
                        </div>
                    </div>
                    </div>
                </div>
            

        </>  

    );

}

export default AboutUs;



