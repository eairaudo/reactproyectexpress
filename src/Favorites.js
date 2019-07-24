import React, { Component } from 'react';

class Agency extends Component {

    constructor(props){
        super(props)
        this.state = {
            results: []
        };

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
                            <p></p>
                        </div>
                        <div className="col-xs-2">
                            <p>{this.props.obj.distance}</p>
                        </div>
                        <div className="col-xs-2">
                            <p></p>
                        </div>
                        <div className="col-xs-1">
                        </div>
                        <div className="col-xs-1">
                        </div>
                    </div>
                    <div className="block-24"></div>
                </div>
            </div>
        );
    }
}

export default Agency;