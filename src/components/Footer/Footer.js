import React from "react";
import {NavLink} from "react-router-dom";;

export default class Footer extends React.Component 
{
    render() {
        return (
            <footer className="footerGeneral">
                
                    <div className="footer-title">
                        <h6>ServiOficios - Copyright&copy; 2020</h6>
                    </div>
                    
                    <div className="footer-nav-menu">
                        <NavLink exact to="/" className="footer-nav-menu-item" autofocus="on">HOME</NavLink>
                        <NavLink exact to="/servicios" className="footer-nav-menu-item">SERVICIOS</NavLink>
                        <NavLink exact to="/nosotros" className="footer-nav-menu-item">NOSOTROS</NavLink>
                        <NavLink exact to="/login" className="footer-nav-menu-item">INGRESAR</NavLink>
                    </div>

                    <div className="footer-nav-social-media">
                        <h6>Seguinos por nuestras redes sociales</h6>
                        
                        <a href="#" className="footer-nav-social-media-item" autofocus="on">
                            <i class="fab fa-facebook"></i>
                            Facebook
                        </a>
                        <a href="#" className="footer-nav-social-media-item" autofocus="on">
                            <i class="fab fa-instagram"></i>
                            
                        </a>
                        <a href="#" className="footer-nav-social-media-item" autofocus="on">
                            <i class="fab fa-twitter"></i>
                            twitter
                        </a>
                        <a href="#" className="footer-nav-social-media-item" autofocus="on">
                            <i class="fab fa-youtube"></i>
                            Youtube
                        </a>
                    </div>
                
            </footer>
        )
    }
}