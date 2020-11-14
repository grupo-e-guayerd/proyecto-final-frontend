import React from "react";

export default class Footer extends React.Component 
{
    render() {
        return (
            <footer className="footerGeneral">
                <h6>
                    Copyright&copy; 2020 - Página creada por el Grupo E de Guayerd - Todos los derechos reservados  
                    {this.props.extraText !== undefined && (
                        " - " + this.props.extraText)}
                </h6>
            </footer>
        )
    }
}