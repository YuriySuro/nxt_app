import React from 'react';

class Modal extends React.PureComponent  {

    constructor(props) {
        super(props);
        this.closeBtn = null;
    }

    closeModal = () => {
        this.closeBtn.click();
    }

    submitModal = () => {
        alert('Submitting Modal');
        this.closeModal();
    }

    render() {

        return (
            <>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Create Movie
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create Movie</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.props.children}
                            </div>
                            <div className="modal-footer">
                                <button ref={(elem) => this.closeBtn=elem} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                {this.props.hasSubmit && 
                                    <button onClick={this.submitModal} type="button" className="btn btn-primary">Save changes</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


/* const Modal = ({ children, hasSubmit }) => {

    let closeBtn = null;

    const submitModal = () => {
        alert('Submitting Modal');
        closeBtn.click();
    }

    return (
        <>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Create Movie
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Movie</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button ref={(elem) => closeBtn = elem} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {hasSubmit && 
                                <button onClick={submitModal} type="button" className="btn btn-primary">Save changes</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} */

export default Modal;