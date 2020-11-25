import React from "react";

export default class SignupUser extends React.Component {


    normalizeString = (string)=>{return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}


    render(){
        return(
            <form className="signup-user"> 
                <h3 className="login-title">Registrarse</h3>

                    <label className="signup-label">Nombre</label>
                    <input type="text" className="input-user" placeholder="Ingrese nombre" />

                    <label className="signup-label">Apellido</label>
                    <input type="text" className="input-user" placeholder="Ingrese apellido" />

                    <label className="signup-label">Email</label>
                    <input type="email" className="input-user" placeholder="Ingrese email" />

                    <label className="signup-label">Contraseña</label>
                    <input type="password" className="input-pass" placeholder="Ingrese contraseña" />

                <button type="submit" className="login-button">Registrarse</button>

            </form>
        )
    }
}



