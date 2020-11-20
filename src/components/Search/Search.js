import React from "react";

export default class Search extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            search: ""
        }
    }

    changeHandler = (event)=>{ this.setState({search: event.target.value}) } 
    search = ()=>{this.props.searchHandler(this.state.search)}

    render() {
        return (
            <div className="search-box-GE">
                <input 
                    className="search"
                    placeholder={this.props.placeholder || "Realizá una busqueda"}
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={this.changeHandler}
                    value={this.state.search}
                />
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