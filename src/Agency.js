import React, { Component } from 'react';
import Axios from "axios";

class Agency extends Component {

    constructor(props){
        super(props)
        this.state = {
            results: [],
            error: ''
        };

    }

    handleClickLike = () => {

        Axios.get('http://localhost:8081/favorites/' + this.props.obj.site_id + '/payment_methods/' + this.props.obj.payment_method_id + '/agencies/' + this.props.obj.id)
            .then(response =>this.setState({results: response.data},function () {
                alert(response.statusText)
            }))
            .catch(error => alert(error.response.statusText))
    }

    handleClickUnLike = () => {

        Axios.get('http://localhost:8081/delete/' + this.props.obj.site_id + '/payment_methods/' + this.props.obj.payment_method_id + '/agencies/' + this.props.obj.id)
            .then(response =>this.setState({results: response.data},function () {
                alert(response.statusText)
            }))
            .catch(error => alert(error.response.statusText))
    }


  render() {

        console.log(this.state.error)
    return (
      <div>
        <div>
          <div className="row contenedor-agencia-item" >
              <div className="col-xs-2">
                  <p>{this.props.obj.description}</p>
              </div>
              <div className="col-xs-1">
                  <p>{this.props.obj.payment_method_id}</p>
              </div>
              <div className="col-xs-1">
                  <p>{this.props.obj.agency_code}</p>
              </div>
              <div className="col-xs-1">
                  <p>{this.props.obj.site_id}</p>
              </div>
              <div className="col-xs-1">
                  <p>{this.props.obj.address.address_line}</p>
            </div>
              <div className="col-xs-2">
                  <p>{this.props.obj.distance}</p>
              </div>
              <div className="col-xs-2">
                  <p>{this.props.obj.address.location}</p>
              </div>
              <div className="col-xs-1">
                  <button className="btn-like" id={this.props.obj.id} onClick={this.handleClickLike} type="button" data-toggle="modal" data-target="#myModal">
                      <i className="fa fa-thumbs-up"></i>
                  </button>

              </div>
              <div className="col-xs-1">
                  <button className="btn-unlike" id={this.props.obj.id} onClick={this.handleClickUnLike} type="button" data-toggle="modal" data-target="#myModal">
                      <i className="fa fa-thumbs-down"></i>
                  </button>
              </div>
          </div>
      </div>
      </div>
    );
  }
}

export default Agency;