import React from 'react';
import './login.css'; //Conectar CSS

import LoginC from '../../img/register-login-profile/login-img.png';
import Logo from '../../img/register-login-profile/logo-Guattari.png';

function Login(){
    return(
        <>  
            <div className="conteiner-Login">
            <img src={LoginC} id="img-Login" class="img-fluid" alt="..."/>

            <div className="centrar"> 
            <form  className="text-Login">
            <img src={Logo} id="img-logo2" alt="" />
            <br />
            <h2>Iniciar Sesión</h2>
            <br />
            <div className="conteiner-Text-Conteiner">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <button class="btn-Login" type="submit" ><p>Iniciar Sesión</p></button>
            
            </div>
          
            </form>
            </div>
            </div>
            

        </>  

    );
}

export default Login;

/*<Link to="/recoverPassword" className="p2">
¿Olvidó su contraseña?
</Link>*/

/*<Link className="nav-item nav-link" id="p2" to="/recoverPassword">¿Olvidó su contraseña?</Link> */