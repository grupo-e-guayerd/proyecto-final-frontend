import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <>
                {/* NAVBAR COMPONENT */}
                <nav className="navbar">
                    {/* NAVBAR TITLE */}
                    <div className="navbar-title">
                        
                        <h1><i class="fas fa-tools"></i> TituloApp</h1>
                    </div>

                    {/* NAVBAR LINKS */}
                    <div className="navbar-links">
                        <NavLink exact to="/" className="navbar-navlink">Home</NavLink>
                        <NavLink exact to="/servicios" className="navbar-navlink">Servicios</NavLink>
                        <NavLink exact to="/nosotros" className="navbar-navlink">Nosotros</NavLink>
                    </div>
                </nav>
            </>
        );
    }
}

export default NavBar;