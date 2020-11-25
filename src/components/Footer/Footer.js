import React from "react";
import {NavLink} from "react-router-dom";;

export default class Footer extends React.Component 
{
    render() {
        return (
            <footer className="footerGeneral">

                    <div className="footer-up">
                    
                        <div className="footer-nav-menu">
                            <NavLink exact to="/" className="footer-nav-menu-item" autofocus="on">HOME</NavLink>
                            <NavLink exact to="/servicios" className="footer-nav-menu-item">SERVICIOS</NavLink>
                            <NavLink exact to="/nosotros" className="footer-nav-menu-item">NOSOTROS</NavLink>
                            <NavLink exact to="/login" className="footer-nav-menu-item">INGRESAR</NavLink>
                        </div>

                        <div className="footer-nav-social-media">

                            <a href="#" className="footer-nav-social-media-item" autofocus="on">
                                <i class="fab fa-facebook-square"></i>
                                <span className="footer-redes">Facebook</span>
                            </a>
                            <a href="#" className="footer-nav-social-media-item" autofocus="on">
                                <i class="fab fa-instagram"></i>&nbsp;
                                <span className="footer-redes">Instagram</span>
                            </a>
                            <a href="#" className="footer-nav-social-media-item" autofocus="on">
                                <i class="fab fa-twitter-square"></i>
                                <span className="footer-redes">Twitter</span>
                            </a>
                            <a href="#" className="footer-nav-social-media-item" autofocus="on">
                                <i class="fab fa-youtube-square"></i>
                                <span className="footer-redes">Youtube</span>
                            </a>
                    </div>

                    </div>

                    <span className="footer-line" />

                    <div className="footer-bottom">
                        <div className="footer-title">
                            <h6>Servioficios | Copyright&copy; 2020</h6>
                        </div>
                    </div>

            </footer>
        )
    }
}