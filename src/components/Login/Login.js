import React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
   
    render(){
        return(
            <div className="login-container-button">
                <h2 className="login-title-principal">Login</h2>
                <Link to="/loginUser"><button className="login-button-principal-1">¿Sos Usuario?</button></Link>
                <Link to="/loginProfessional"><button className="login-button-principal-2">¿Sos Profesional?</button></Link>
            </div>
        
        )
    }
}