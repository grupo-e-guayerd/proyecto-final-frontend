import React from "react";

export default class Search extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            subjectSearch: "jobs/",
            search: "",

            categoryArray: [],
            zonesArray: []
        }
    }

    changeHandler = (event)=>{ this.setState({ [event.target.name]: event.target.value }) } 
    search = ()=>{this.props.searchHandler(this.state.subjectSearch, this.state.search)}

    componentDidMount() {
        fetch(`https://api-servi-oficios.herokuapp.com/categories`)
        .then( reponse => reponse.json() )
        .then( jsonResponse => { this.setState({categoryArray: jsonResponse}) } )
        .catch( error => { /* TODO catch handler */ } )

        fetch(`https://api-servi-oficios.herokuapp.com/zones`)
        .then( reponse => reponse.json() )
        .then( jsonResponse => { this.setState({zonesArray: jsonResponse}) } )
        .catch( error => { /* TODO catch handler */ } )
    }

    render() {
        const { subjectSearch, search, categoryArray, zonesArray } = this.state;
        return (
            <div className="search-box-GE">
                <select className="search-select" name="subjectSearch" onChange={this.changeHandler}>
                    <option value="jobs/" >Categoría</option>
                    <option value="names/" >Profesional (nombre)</option>
                    <option value="zones/" >Zona</option>
                </select>
                <input 
                    className="search-input"
                    name="search"
                    suggestions="suggestions"
                    placeholder={this.props.placeholder || "Realizá una busqueda"}
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={this.changeHandler}
                    value={this.state.search}
                />
                <datalist id="suggestions">
                {
                    subjectSearch === "jobs/" && (
                        categoryArray.map( arrayObject => {
                            const CATEGORY = arrayObject.category[0].toUpperCase()+arrayObject.category.slice(1);
                            return <option key={arrayObject._id} value={CATEGORY}></option>
                        })
                    )
                }
                {
                    subjectSearch === "zones/" && (
                        zonesArray.map( arrayObject => {
                            const ZONE = arrayObject.zone[0].toUpperCase()+arrayObject.zone.slice(1);
                            return <option value={ZONE}></option>
                        })
                    )
                }
                </datalist>
                {/* TODO ¿porque no puedo evitar sugerencias del navegador y usar las mías? */}

                <button 
                    onClick={this.search} 
                    className="button-search" 
                    variant="outline-secondary"
                >Buscar
                </button>
            </div>
        )
    }
}