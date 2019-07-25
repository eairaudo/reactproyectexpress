import React, { Component } from 'react';

class ModalMessage extends Component {

    render() {
        return (
            <div>
                <div id="myModal" className="modal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">{this.props.message}</h4>
                            </div>
                            <div className="modal-footer">
                                <button type="button" data-dismiss="modal">Cerrar</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default ModalMessage;