import React, { Component } from 'react';

class Agency extends Component {


  render() {

    return (
      <div>
        <div >
          <div className="row" id={this.props.obj.id} onClick={this.handleClick} >
              <div className="col-xs-2">
                  <p className="precio">{this.props.obj.description}</p>
              </div>
              <div className="col-xs-2">
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
              <div className="col-xs-2">
                  <p>{this.props.obj.address.location}</p>
              </div>
              <div className="col-xs-2">
                  <p></p>
              </div>

          </div>
      </div>
      </div>
    );
  }
}

export default Agency;