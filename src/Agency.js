import React, { Component } from 'react';
import Axios from "axios";

class Agency extends Component {

    constructor(props){
        super(props)
        this.state = {
            results: []
        };

    }

    handleClickLike = () => {

        Axios.get('http://localhost:8081/favorites/'+this.props.obj.site_id+'/payment_methods/'+this.props.obj.payment_method_id+'/agencies/'+this.props.obj.id )
            .then(response => this.setState({results: response.data}))
            .catch(error => alert(error))
    }

  render() {

        console.log(this.state.results)
    return (
      <div>
        <div>
          <div className="row" >
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
                      Like
                  </button>
              </div>
              <div className="col-xs-1">
                  <button className="btn-unlike" id={this.props.obj.id} type="button" data-toggle="modal" data-target="#myModal">
                      UnLike
                  </button>
              </div>
          </div>
            <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Se añadio a favoritos</h4>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>

                </div>
            </div>
      </div>
          <div className="block-24"></div>
      </div>
    );
  }
}

export default Agency;