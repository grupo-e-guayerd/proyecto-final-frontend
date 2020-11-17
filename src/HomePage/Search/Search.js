import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default class Search extends React.Component{
    render (){
        return(
            <div>
                <InputGroup className="mb-3">
                    <FormControl 
                        className="carousel-search"
                        placeholder="Busca el oficio deseado"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button className="button-search" variant="outline-secondary">Buscar</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        )
    }
}