import React from 'react';
import './NewPassword.css'; //Conectar CSS

import ContraIMG03 from '../../img/Recuperar-contra/ContraIMG03.jpg'; //imagen
import Logo from '../../img/Recuperar-contra/logo-Guattari.png';

function RecoverPassword(){
    return(
        <>  
        <div className="conteiner-Password">
            <img src={ContraIMG03} id="img-Password" class="img-fluid" alt="..."/>

            <div className="centrar"> 
            <img src={Logo} id="img-logo" alt="" />
            <hr class="linea-personalizada"/>
            <p className="text-p">Crea una nueva contraseña segura para proteger tu cuenta.</p>
            <form  className="text-Passwordr">
           
           <div className="conteiner-Text-Conteiner">


           <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                   <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirmar Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>

           </div>
           
            <button class="btn-Password" type="submit" ><p>Ingresar</p></button>
            </form>
            
            </div>
            </div>
        

    </>  


    );
}

export default RecoverPassword;