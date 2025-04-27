import React from 'react';
import './AboutUs.css'; //Conectar CSS
import AUBanner from '../../img/Banner_AboutUs_1.jpg';
import AUBanner2 from '../../img/Banner_AboutUs_2.jpg';
import AUBanner3 from '../../img/Banner_AboutUs_3.jpg';

//Arreglar despues
import './Inicio.html'; //Pagina de Inicio


function AboutUs() {
    return(
        <div  className="BannerAboutUs-container">

            <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={AUBanner} class="d-block w-100" alt="Banner About Us One"/>
                    </div>
                    <div class="carousel-item">
                        <img src={AUBanner2} class="d-block w-100" alt="Banner About Us Two"/>
                    </div>
                    <div class="carousel-item">
                        <img src={AUBanner3} class="d-block w-100" alt="Banner About Us Tree"/>
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


            <div>
                
            </div> 
        </div>

    );

}
