import React from 'react';
import './login.css'; //Conectar CSS

import LoginC from '../../../img/register-login-profile/login-img.png';
import Logo from '../../../img/register-login-profile/logo-Guattari.png';

function Login(){
    return(
        <>  
            <div className="conteiner-Register">
            <img src={LoginC} id="img-Register" class="img-fluid" alt="..."/>

            <div className="centrar"> 
            <form  className="text-Register">
            <img src={Logo} id="img-logo" alt="" />
            <br />
            <h2><b>Iniciar Sesión</b></h2>
            <br />
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <button class="btn-register" type="submit" >Iniciar Sesión</button>
            </form>
            </div>
            </div>
            

        </>  

    );
}

export default Login;