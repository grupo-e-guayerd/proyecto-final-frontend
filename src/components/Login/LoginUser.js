import React from "react";
import { Link } from "react-router-dom";

export default class LoginUser extends React.Component {
   
    render(){
        return(
            <form className="login">
                <h2 className="login-title">Entrar</h2>
                <input 
                    type="text" 
                    className="input-user" 
                    placeholder="Ingrese su usuario" 
                    name = "professional"
                />
                <input 
                    type="password" 
                    className="input-pass" 
                    placeholder="Ingrese su contraseña" 
                    name = "password"
                />

                
                <button className="login-button" >Entrar</button>

                <p  className="text-right" >
                    <Link to="/signupUser" className="login-create">Crear usuario</Link>
                    
                </p>
            </form> 
        )
    }
}