import React from "react";

export default class SignupProfessional extends React.Component {
    constructor(){
        super();
        this.state= {
            name: "",
            job: "",
            imgUrl: "",
            hourPrice: "",
            currency: "ARS",
            zone: "",
            description: "",
            email: "",
            phone: "",
            seniority: "",
            dni: "",
            
            //Categories - fetch
            categories: [],
            zones: [],

            send: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const OBJ_NEWPRO = { 
            name: this.normalizeString(this.state.name),
            dni: this.state.dni,
            email: this.state.email,
            phone:this.state.phone,
            job: this.state.job,
            seniority: this.state.seniority,
            imgUrl: this.state.imgUrl,
            hourPrice: this.state.hourPrice,
            currency: this.state.currency,
            zone: this.state.zone,
            description:this.state.description,
            status: true,
            rating: 3,
            registrationDate: new Date()  
        }
        
        fetch( "https://api-servi-oficios.herokuapp.com/pendings", {
            method: "POST",
            body: JSON.stringify(OBJ_NEWPRO),
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(professional => {
            this.setState({send: true})
        })
        .catch(error => {})
    }

    getCategories = () => {
        fetch("https://api-servi-oficios.herokuapp.com/categories" , {
            method: "GET"
        })
        .then( response => response.json())
        .then( jsonCategories => {this.setState({categories : jsonCategories})} )
        .catch( error => {})
    }
    
    getZones = () => {
        fetch("https://api-servi-oficios.herokuapp.com/zones" , {
            method: "GET"
        })
        .then( response => response.json())
        .then( jsonZones => {this.setState({zones : jsonZones})} )
        .catch( error => {})
    }
    normalizeString = (string)=>{return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}

    componentDidMount(){
        this.getCategories()
        this.getZones()
    }


    render(){
        const {categories, zones, name, dni, email, phone, seniority , imgUrl , hourPrice  , description } = this.state
        return(
            <>

            {
                !this.state.send && (
                    <form className="signup"> 
                        <div className="signup-professional">
                            
                            <h2 className="signup-title">Registrarse</h2>
                            
                            <label className="signup-label">Ingresa tu nombre completo</label>
                            <input 
                                type="text" 
                                className="signup-input" 
                                placeholder="Nombre y Apellido " 
                                name="name" 
                                value={name} 
                                onChange={this.handleChange}
                            />
                            <label className="signup-label">Ingresa la URL de tu foto</label>
                            <input 
                                type="url" 
                                className="signup-input" 
                                placeholder="URL de la imagen" 
                                name="imgUrl" 
                                value={imgUrl} 
                                onChange={this.handleChange}
                            />
                            <label className="signup-label">Ingresa tu DNI</label>
                            <input 
                                type="number" 
                                className="signup-input" 
                                placeholder="XX.XXX.XXX" 
                                name="dni" 
                                value={dni} 
                                onChange={this.handleChange}
                            />
                            <label className="signup-label">Ingresa tu e-mail</label>
                            <input 
                                type="mail" 
                                className="signup-input" 
                                placeholder="ejemplo@ejemplo.com" 
                                name="email" 
                                value={email} 
                                onChange={this.handleChange}
                            />
                            <label className="signup-label">Ingresa tu teléfono</label>
                            <input 
                                type="number" 
                                className="signup-input" 
                                placeholder="(+54 11 ........... )" 
                                name="phone" 
                                value={phone} 
                                onChange={this.handleChange}
                            />
                            
                            <label className="signup-label">Selecciona tu ocupación</label>
                            <select name="job" className="signup-input" onChange={this.handleChange}>
                            {   
                                !categories.error && categories.map( category => { 
                                    return (
                                        <option 
                                            key={category._id} 
                                            value={category.category}
                                        >
                                            {category.category[0].toUpperCase() + category.category.slice(1)}
                                        </option> 
                                    ) 
                                })
                            }
                            </select>

                            <label className="signup-label">¿Desde cuándo ejerces? </label>
                            <input 
                                type="text" 
                                className="signup-input" 
                                placeholder="Años de antigüedad" 
                                name="seniority" 
                                value={seniority} 
                                onChange={this.handleChange}
                            />
                            
                            <label className="signup-label">Selecciona la moneda de tu país</label>
                            
                            <select className="signup-input" name="currency" onChange={this.handleChange}>
                                <option value="ars">ARS</option>
                            </select>

                            <label className="signup-label">Ingresa el valor-hora de tu trabajo</label>
                            <input 
                                type="number" 
                                className="signup-input" 
                                placeholder="¿Cuánto cobras?" 
                                name="hourPrice" 
                                value={hourPrice} 
                                onChange={this.handleChange}
                            />

                            <label className="signup-label">¿En qué zona trabajas?</label>
                            <select name="zone" className="signup-input" onChange={this.handleChange}>
                            {   
                                !zones.error && zones.map( zone => { 
                                    return (
                                        <option 
                                            key={zone._id} 
                                            value={zone.zone}
                                        >
                                            {zone.zone[0].toUpperCase() + zone.zone.slice(1)}
                                        </option> 
                                    ) 
                                })
                            }
                            </select>
            
                            <label className="signup-label">Ingresa una descripción de lo que haces</label>
                            <textarea 
                                type="text" 
                                className="signup-textarea" 
                                placeholder="Descripción" 
                                name="description" 
                                value={description} 
                                onChange={this.handleChange}
                            />

                            <input type="checkbox"></input>
                            <label className="signup-label"> Acepto todos los términos y condiciones.</label>
                            
                            <button className="signup-button" onClick={this.handleSubmit}> Enviar </button>
                        </div>

                </form> 
                )
            }
            {
            this.state.send && (
                <div className="send-request-success">
                    Su solicitud ha sido enviada.
                </div>
            )
            }
        </>
)
    }
}
