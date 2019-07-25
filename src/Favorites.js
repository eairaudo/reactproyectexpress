import React, { Component } from 'react';

class Agency extends Component {

    render() {
        return (
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
                    <div className="col-xs-2">
                        <p>{this.props.obj.address.address_line}</p>
                    </div>
                    <div className="col-xs-3">
                        <p>{this.props.obj.address.location}</p>
                    </div>
                </div>
                <div className="block-24"></div>
            </div>
        );
    }
}

export default Agency;