import React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
   
    render(){
        return(
            <div className="login-container-button">
                <h2 className="login-title-principal">Login</h2>
                <div className="login-button-container">
                    <Link to="/loginUser"><button className="login-button-principal">¿Sos Usuario?</button></Link>
                    <span className="login-space">sdlfkj</span>
                    <Link to="/loginProfessional"><button className="login-button-principal">¿Sos Profesional?</button></Link>
                </div>
            </div>
        
        )
    }
}