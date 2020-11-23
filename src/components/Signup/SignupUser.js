import React from "react";

export default class SignupUser extends React.Component {

    render(){
        return(
            <form className="signup-user"> 
                <h3 className="login-title">Sign Up</h3>

                    <label className="signup-label">Nombre</label>
                    <input type="text" className="input-user" placeholder="Ingrese nombre" />

                    <label className="signup-label">Apellido</label>
                    <input type="text" className="input-user" placeholder="Ingrese apellido" />

                    <label className="signup-label">Email</label>
                    <input type="email" className="input-user" placeholder="Ingrese email" />

                    <label className="signup-label">Password</label>
                    <input type="password" className="input-pass" placeholder="Ingrese password" />

                <button type="submit" className="login-button">Sign Up</button>

            </form>
        )
    }
}



