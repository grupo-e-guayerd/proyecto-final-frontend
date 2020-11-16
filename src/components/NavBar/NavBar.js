import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <>
                {/* NAVBAR COMPONENT */}
                <nav className="navbar-GE">
                    {/* NAVBAR TITLE */}
                    <div className="navbar-title-GE">
                        
                        <h1><i className="fas fa-tools"></i> TituloApp</h1>
                    </div>

                    {/* NAVBAR LINKS */}
                    <div className="navbar-links-GE">
                        <NavLink exact to="/" className="navbar-navlink-GE">Home</NavLink>
                        <NavLink exact to="/servicios" className="navbar-navlink-GE">Servicios</NavLink>
                        <NavLink exact to="/nosotros" className="navbar-navlink-GE">Nosotros</NavLink>
                    </div>
                </nav>
            </>
        );
    }
}

export default NavBar;