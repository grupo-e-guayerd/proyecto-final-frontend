import React from "react";

export default class SignupProfessional extends React.Component {

    render(){
        return(
            <form className="login"> 
                <div className="add-professional">
                    <h2 className="add-title">Cargue un nuevo profesional</h2>
                    
                    <input type="text" className="add-input" placeholder="Nombre" name="name" />
                    <input type="text" className="add-input" placeholder="Ocupación" name="job"/>
                    <input type="text" className="add-input"  placeholder="URL de la imagen" name="imgUrl"/>
                    <input type="url" className="add-input" placeholder="Valor hora" name="hourPrice"/>
                    <input type="text" className="add-input" placeholder="Zona" name="zone" />
                    <input type="text" className="add-input" placeholder="Moneda" name="currency"/>
                    <textarea type="text" className="add-textarea"  placeholder="Descripción" name="description" />
                    <button className="add-button">Enviar</button>
                </div>

            </form>
        )
    }
}
