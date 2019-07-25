import React, { Component } from 'react';
import Axios from "axios";

class Agency extends Component {

    constructor(props){
        super(props)
        this.state = {
            results: [],
            error : false
        };
    }

    handleClickUnLike = () => {

        Axios.get('http://localhost:8081/delete/' + this.props.obj.site_id + '/payment_methods/' + this.props.obj.payment_method_id + '/agencies/' + this.props.obj.id)
            .then(response =>this.setState({results: response.data},function () {
                alert(response.statusText)
            }))
            .catch(error => alert(error.response.statusText))
    }

    render() {
        return (
            <div>
                <div className="row contenedor-agencia-item" >
                    <div className="col-xs-2">
                        <p className="precio">{this.props.obj.description}</p>
                    </div>
                    <div className="col-xs-1">
                        <p className="texto-producto">{this.props.obj.payment_method_id}</p>
                    </div>
                    <div className="col-xs-1">
                        <p>{this.props.obj.agency_code}</p>
                    </div>
                    <div className="col-xs-1">
                        <p>{this.props.obj.site_id}</p>
                    </div>
                    <div className="col-xs-2">
                        <p>{this.props.obj.address.address_line}</p>
                    </div>
                    <div className="col-xs-3">
                        <p>{this.props.obj.address.location}</p>
                    </div>
                    <div className="col-xs-1">
                        <button className="btn-unlike" id={this.props.obj.id} onClick={this.handleClickUnLike} type="button" data-toggle="modal" data-target="#myModal">
                            <i className="fa fa-thumbs-down"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Agency;