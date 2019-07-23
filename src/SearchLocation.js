import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SearchLocation extends Component {

      constructor(props){
        super(props)
        this.state = {
          redirectResults : false,
          valueInputOne : '',
            valueInputTwo : '',
            valueInputSite: '',
            valueInputMethodPayment:'',
            valueSelectFilter:''

        };
          this.onInputChangeOne = this.onInputChangeOne.bind(this);
          this.onInputChangeTwo = this.onInputChangeTwo.bind(this);
          this.onInputChangeSite = this.onInputChangeSite.bind(this);
          this.onInputChangeMethodPayment = this.onInputChangeMethodPayment.bind(this);

      }

      handleClick = () => {
 
        this.setState(() => ({
            redirectResults : true
        }))
      }

      onInputChangeOne (e) {

        this.setState({
            valueInputOne: e.target.value
        })
      }

    onInputChangeTwo (e) {

        this.setState({
            valueInputTwo: e.target.value
        })
    }
    onInputChangeSite (e) {

        this.setState({
            valueInputSite: e.target.value
        })
    }
    onInputChangeMethodPayment (e) {

        this.setState({
            valueInputMethodPayment: e.target.value
        })
    }

    handleChangeSelect = (e) => {
        this.setState({
            valueSelectFilter: e.target.value
        })
    }

      render() {
        if(this.state.redirectResults === true){
        return (<Redirect to ={'/'+this.state.valueInputSite+'/'+this.state.valueInputMethodPayment+'/'+this.state.valueInputOne+'/'+this.state.valueInputTwo+'/'+this.state.valueSelectFilter}/>)
        }

        console.log(this.state.valueSelectFilter)

        return (
          <div>
              <div className="row text-center">
                  <div className="col-xs-6">
                      <input type="text" onChange = {this.onInputChangeSite} value = {this.state.valueInputSite} className="form-control" placeholder="Ingrese sitio" aria-describedby="basic-addon2"/>
                  </div>
              </div>
              <div className="block-24"></div>
              <div className="row text-center">
                  <div className="col-xs-6">
                      <input type="text" onChange = {this.onInputChangeMethodPayment} value = {this.state.valueInputMethodPayment} className="form-control" placeholder="Ingrese metodo de pago" aria-describedby="basic-addon2"/>
                  </div>
              </div>
              <div className="block-24"></div>
              <div className="row text-center">
                  <div className="col-xs-6">
                      <input type="text" onChange = {this.onInputChangeOne} value = {this.state.valueInputOne} className="form-control" placeholder="Ingrese longitud" aria-describedby="basic-addon2"/>
                  </div>
              </div>
              <div className="block-24"></div>
              <div className="row text-center">
                  <div className="col-xs-6">
                      <input type="text" onChange = {this.onInputChangeTwo} value = {this.state.valueInputTwo} className="form-control" placeholder="Ingrese latitud" aria-describedby="basic-addon2"/>
                  </div>
              </div>
              <div className="block-24"></div>
              <div className="row">
              <div className="col-xs-6">
                  <div className="form-group">
                      <select className="form-control" id="sel1" onChange={this.handleChangeSelect}>
                          <option value="">Ninguno</option>
                          <option value="address_line">address_line</option>
                          <option value="agency_code">agency_code</option>
                          <option value="distance">distance</option>
                      </select>
                  </div>
              </div>
              </div>
              <div className="block-24"></div>
              <div className="row">
                  <div className="col-xs-6">
                      <button onClick={this.handleClick}>Enviar</button>
                  </div>
              </div>
          </div>
        )
      }
    }

    export default SearchLocation;
