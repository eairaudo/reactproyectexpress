import React, { Component } from 'react';
import Axios from 'axios'
import Agency from "./Agency";

class LocationResults extends Component {

      constructor(props){
        super(props)
        this.state = {
          results: []
        };
      }

      componentDidMount() {
          const siteId = this.props.match.params.siteId
          const latitud = this.props.match.params.latitud
          const longitud = this.props.match.params.longitud
          const methodPayment = this.props.match.params.methodPayment
          const filter = this.props.match.params.filter
         Axios.get('http://localhost:8081/sites/'+siteId+'/payment_methods/'+methodPayment+'/agencies/'+latitud+'/'+longitud+'/'+filter)
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

          console.log(this.state.results)
        return (
          <div>
              <div className="row">
                  <div className="col-xs-2">
                      <p className="txt-700">Nombre</p>
                  </div>
                  <div className="col-xs-2">
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
                  <div className="col-xs-2">
                      <p className="txt-700">Location</p>
                  </div>
                  <div className="col-xs-2">
                      <p className="txt-700"></p>
                  </div>
              </div>
              <div className="block-24"></div>
              {this.LocationList()}
          </div>
        )
      }
    }

    export default LocationResults;