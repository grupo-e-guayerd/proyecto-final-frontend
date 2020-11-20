import React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
   
    render(){
        return(
            <div className="login-container-button">
                <Link to="/loginUser"><button className="login-button-principal">¿Sos Usuario?</button></Link>
                <Link to="/loginProfessional"><button className="login-button-principal">¿Sos Profesional?</button></Link>
            </div>
        
        )
    }
}