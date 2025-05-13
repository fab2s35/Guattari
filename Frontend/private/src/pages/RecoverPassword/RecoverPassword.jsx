import React from 'react';
import './RecoverPassword.css'; //Conectar CSS

import ContraIMG01 from '../../img/Recuperar-contra/ContraIMG01.jpg'; //imagen
import Logo from '../../img/Recuperar-contra/logo-Guattari.png';

function RecoverPassword(){
    return(
        <>  
        <div className="conteiner-Password">
            <img src={ContraIMG01} id="img-Password" class="img-fluid" alt="..."/>

            <div className="centrar"> 
            <img src={Logo} id="img-logo" alt="" />
            <hr class="linea-personalizada"/>
            <p className="text-p">Ingrese el correo electrónico asociado a su cuenta para enviarle un <br /> código de verificación.</p>
            <form className="text-Password">
           <div className="conteiner-Text-Conteiner">


                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

           </div>
           
            <button class="btn-Password" type="submit" ><p>Crear Cuenta</p></button>
            </form>
            
            </div>
            </div>
        
            </>  



    );
}

export default RecoverPassword;