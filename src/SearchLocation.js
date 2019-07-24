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
            valueSelectFilter:'',
            valueInputLimit:'',
            valueInputOffset:''

        };
        this.onInputChangeOne = this.onInputChangeOne.bind(this);
        this.onInputChangeTwo = this.onInputChangeTwo.bind(this);
        this.onInputChangeSite = this.onInputChangeSite.bind(this);
        this.onInputChangeMethodPayment = this.onInputChangeMethodPayment.bind(this);
        this.onInputChangeLimit = this.onInputChangeLimit.bind(this);
        this.onInputChangeOffset = this.onInputChangeOffset.bind(this);

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

    onInputChangeLimit (e) {

        this.setState({
            valueInputLimit: e.target.value
        })
    }

    onInputChangeOffset (e) {

        this.setState({
            valueInputOffset: e.target.value
        })
    }

    handleChangeSelect = (e) => {
        this.setState({
            valueSelectFilter: e.target.value
        })
    }

    render() {
        if(this.state.redirectResults === true){
            return (<Redirect to ={'/'+this.state.valueInputSite+'/'+this.state.valueInputMethodPayment+'/'+this.state.valueInputOne+'/'+this.state.valueInputTwo+'/'+this.state.valueInputLimit+'/'+this.state.valueInputOffset+'/'+this.state.valueSelectFilter}/>)
        }

        console.log(this.state.valueSelectFilter)

        return (
                <div>
                    <nav className="navbar navbar-default navbar-fixed-top navbar-amarilla">
                        <div className="container-fluid">
                           <div className="row">
                                   <div className="col-xs-1">
                                       <input type="text" onChange = {this.onInputChangeSite} value = {this.state.valueInputSite} className="form-control" placeholder="Site" aria-describedby="basic-addon2"/>
                                   </div>
                                   <div className="col-xs-1">
                                       <input type="text" onChange = {this.onInputChangeMethodPayment} value = {this.state.valueInputMethodPayment} className="form-control" placeholder="M. Pago" aria-describedby="basic-addon2"/>
                                   </div>
                                   <div className="col-xs-2">
                                       <input type="text" onChange = {this.onInputChangeOne} value = {this.state.valueInputOne} className="form-control" placeholder="longitud" aria-describedby="basic-addon2"/>
                                   </div>
                                   <div className="col-xs-2">
                                       <input type="text" onChange = {this.onInputChangeTwo} value = {this.state.valueInputTwo} className="form-control" placeholder="latitud" aria-describedby="basic-addon2"/>
                                   </div>
                                   <div className="col-xs-1">
                                       <input type="text" onChange = {this.onInputChangeLimit} value = {this.state.valueInputLimit} className="form-control" placeholder="limit" aria-describedby="basic-addon2"/>
                                   </div>
                                   <div className="col-xs-1">
                                       <input type="text" onChange = {this.onInputChangeOffset} value = {this.state.valueInputOffset} className="form-control" placeholder="offset" aria-describedby="basic-addon2"/>
                                   </div>
                                   <div className="col-xs-2">
                                       <div className="form-group">
                                           <select className="form-control" id="sel1" onChange={this.handleChangeSelect}>
                                               <option value="">Ninguno</option>
                                               <option value="address_line">address_line</option>
                                               <option value="agency_code">agency_code</option>
                                               <option value="distance">distance</option>
                                           </select>
                                       </div>
                                   </div>
                                   <div className="col-xs-2">
                                       <button className="boton-enviar" onClick={this.handleClick}>Enviar</button>
                                   </div>
                               </div>
                        </div>
                    </nav>
                </div>
        )
    }
}

export default SearchLocation;
