import React from "react";
import Form from 'react-bootstrap/Form';

export default class SignupProfessional extends React.Component {
    constructor(){
        super();
        this.state= {
            name: "",
            job: "",
            imgUrl: "",
            hourPrice: "",
            currency: "",
            zone: "",
            description: "",
            //Categories - fetch
            categories: []
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
            name: this.state.name,
            job: this.state.job,
            imgUrl: this.state.imgUrl,
            hourPrice: this.state.hourPrice,
            currency: this.state.currency,
            zone: this.state.zone,
            description:this.state.description,
            status: true
        }

        fetch("https://api-servi-oficios.herokuapp.com/professionalPendings" , {mode:"no-cors"} , {
            method: "POST",
            body: JSON.stringify(OBJ_NEWPRO),
            headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .then(professional => console.log(professional))
        .catch(error => console.log(error))
    }

    getCategories = () => {
        fetch("https://api-servi-oficios.herokuapp.com/categories" , {
            method: "GET"
        })
        .then( response => response.json())
        .then( jsonCategories => {this.setState({categories : jsonCategories})} )
        .catch( error => console.log(error))
    }

    componentDidMount(){
        this.getCategories()
    }


    render(){
        const {categories , name , job , imgUrl , hourPrice , currency , zone , description } = this.state
        return(
            <form className="signup"> 
                <div className="signup-professional">
                    
                    <h2 className="signup-title">Ingrese sus datos</h2>
                    
                    <label className="signup-label">Ingrese su nombre completo</label>
                    <input 
                        type="text" 
                        className="signup-input" 
                        placeholder=" " 
                        name="name" 
                        value={name} 
                        onChange={this.handleChange}
                    />
                    
                    <label className="signup-label">Seleccione su ocupación</label>
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
                    <label className="signup-label">Ingrese la URL de su foto</label>
                    <input 
                        type="url" 
                        className="signup-input" 
                        placeholder="URL de la imagen" 
                        name="imgUrl" 
                        value={imgUrl} 
                        onChange={this.handleChange}
                    />
                    {/* <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="Example file input" />
                    </Form.Group> */}
                    <label className="signup-label">Ingrese el valor hora de su trabajo</label>
                    <input 
                        type="text" 
                        className="signup-input" 
                        placeholder="Valor hora" 
                        name="hourPrice" 
                        value={hourPrice} 
                        onChange={this.handleChange}
                    />
                    <label className="signup-label">En qué zona trabaja</label>
                    <input 
                        type="text" 
                        className="signup-input" 
                        placeholder="Zona" 
                        name="zone" 
                        value={zone} 
                        onChange={this.handleChange}
                    />
                    <label className="signup-label">Seleccione la moneda de su país</label>
                    
                    <select className="signup-input" name="currency" onChange={this.handleChange}>
                        <option value={currency} >ARS</option>
                    </select>
                   {/*  <input 
                        type="text" 
                        className="signup-input" 
                        placeholder="Moneda" 
                        name="currency" 
                        value={currency} 
                        onChange={this.handleChange}
                    /> */}
                    <label className="signup-label">Ingrese una descripción</label>
                    <textarea 
                        type="text" 
                        className="signup-textarea" 
                        placeholder="Descripción" 
                        name="description" 
                        value={description} 
                        onChange={this.handleChange}
                    />
                    <button className="signup-button" onClick={this.handleSubmit}> Enviar </button>
                </div>
            </form>
        )
    }
}
