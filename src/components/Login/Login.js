import React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
   
    render(){
        return(
            <div>
                <Link to="/loginUser"><button>¿Sos Usuario?</button></Link>
                <Link to="/loginProfessional"><button>¿Sos Profesional?</button></Link>
            </div>
        
        )
    }
}