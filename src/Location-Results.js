import React, { Component } from 'react';
import Axios from 'axios'
import Agency from "./Agency";
import SearchLocation from "./SearchLocation";


class LocationResults extends Component {

    constructor(props){
        super(props)
        this.state = {
            results: []
        };
    }

    componentDidMount() {
        const siteId = this.props.location.state.siteId
        const latitud = this.props.location.state.latitud
        const longitud = this.props.location.state.longitud
        const methodPayment = this.props.location.state.methodPayment
        const limit =   this.props.location.state.limit
        const offset = this.props.location.state.offset
        const filter = this.props.location.state.filter

        console.log(siteId, latitud,longitud,methodPayment,limit, offset, filter)

        Axios.get('http://localhost:8081/sites/'+siteId+'/payment_methods/'+methodPayment+'/agencies?latitud='+latitud+'&longitud='+longitud+'&limit='+limit+'&offset='+offset+'&orderBy='+filter)
            .then(response => this.setState({results: response.data}))
            .catch(error => alert(error))
        console.log(this.state.results)
    }

    LocationList(){
        console.log(this.state.results)
        return this.state.results.map(function(object, i){
            return <Agency obj={object} key={i} />;
        });
    }

    render() {

        return (
            <div>
                <SearchLocation/>
                <div className="block-24"></div>
                <div className="block-24"></div>
                <div className="block-24"></div>
                <div className="row encabezado-agencia">
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
                {this.LocationList()}
            </div>
        )
    }
}

export default LocationResults;