import React from 'react';
import './Register.css'; //Conectar CSS

import RegisterIMG from '../../img/register-login-profile/register-img.png';
import Logo from '../../img/register-login-profile/logo-Guattari.png';

function Register(){
    return(
        <>  
            <div className="conteiner-Register">
            <img src={RegisterIMG} id="img-Register" class="img-fluid" alt="..."/>

            <div className="centrar"> 
            <img src={Logo} id="img-logo" alt="" />
            <form  className="text-Register">
           
           <div className="conteiner-Text-Conteiner">

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirmar Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>

           </div>
           
            <button class="btn-register" type="submit" ><p>Crear Cuenta</p></button>
            </form>
            
            </div>
            </div>
            

        </>  

    );
}

export default Register;