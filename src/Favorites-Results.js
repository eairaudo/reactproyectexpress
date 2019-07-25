import React, { Component } from 'react';
import Axios from 'axios'
import Favorites from "./Favorites";
import SearchLocation from "./SearchLocation";
import ErrorMessage from "./ErrorMessage"

class LocationResults extends Component {

    constructor(props){
        super(props)
        this.state = {
            results: [],
            error : false
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:8081/favorites/list')
            .then(response => this.setState({results: response.data}))
            .catch(error => this.setState({error: true}))
    }

    FavoritesList(){
        return this.state.results.map(function(object, i){
            return <Favorites obj={object} key={i} />;
        });
    }

    ErrorShow(){
        if(this.state.error){
            return <ErrorMessage />;
        }
    }


    render() {
        return (
            <div>
                <SearchLocation/>
                <div className="block-24"></div>
                <div className="block-24"></div>
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Lista de favoritos</h2>
                    </div>
                </div>
                <div className="block-24"></div>
                <div className="row">
                    <div className="col-xs-2">
                        <p className="txt-700">Nombre</p>
                    </div>
                    <div className="col-xs-1">
                        <p className="txt-700">Metodo de pago</p>
                    </div>
                    <div className="col-xs-1">
                        <p className="txt-700">Agencia</p>
                    </div>
                    <div className="col-xs-1">
                        <p className="txt-700">Sitio</p>
                    </div>
                    <div className="col-xs-2">
                        <p className="txt-700">Direccion</p>
                    </div>
                    <div className="col-xs-3">
                        <p className="txt-700">Location</p>
                    </div>
                    <div className="col-xs-2">
                        <p className="txt-700"></p>
                    </div>
                </div>
                <div className="block-24"></div>
                {this.FavoritesList()}
                {this.ErrorShow()}
            </div>
        )
    }
}

export default LocationResults;