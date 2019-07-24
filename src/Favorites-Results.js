import React, { Component } from 'react';
import Axios from 'axios'
import Favorites from "./Favorites";

class LocationResults extends Component {

    constructor(props){
        super(props)
        this.state = {
            results: {}
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:8081/favorites/list')
            .then(response => this.setState({results: response.data}))
            .catch(error => alert(error))
        console.log(this.state.results)
    }

    FavoritesList(){
        console.log(this.state.results)
        return this.state.results.map(function(object, i){
            return <Favorites obj={object} key={i} />;
        });
    }


    render() {

        console.log(this.state.results)
        return (
            <div>
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
                    <div className="col-xs-1">
                        <p className="txt-700">Direccion</p>
                    </div>
                    <div className="col-xs-2">
                        <p className="txt-700">Distance</p>
                    </div>
                    <div className="col-xs-2">
                        <p className="txt-700">Location</p>
                    </div>
                    <div className="col-xs-2">
                        <p className="txt-700"></p>
                    </div>
                </div>
                <div className="block-24"></div>
                {this.FavoritesList()}
            </div>
        )
    }
}

export default LocationResults;