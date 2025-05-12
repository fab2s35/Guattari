import React from 'react';
import './Code.css'; //Conectar CSS

import ContraIMG02 from '../../img/Recuperar-contra/ContraIMG02.jpg'; //imagen
import Logo from '../../img/Recuperar-contra/logo-Guattari.png';

function Code(){
    return(
        <>  
        <div className="conteiner-Password">
            <img src={ContraIMG02} id="img-Password" class="img-fluid" alt="..."/>

            <div className="centrar"> 
            <img src={Logo} id="img-logo" alt="" />
            <hr class="linea-personalizada"/>
            <p className="text-p">Revise su bandeja de entrada. Le hemos enviado un código para verificar su identidad.</p>
            <form  className="text-Password">
           
           <div className="conteiner-Text-Conteiner">


                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Código</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

           </div>
           
            <button class="btn-Password" type="submit" ><p>Enviar</p></button>
            </form>
            
            </div>
            </div>
        

    </>  


    );
}

export default Code;