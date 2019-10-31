import ReactDOM from 'react-dom'
import React from 'react'

const Modal = (props) => {
    return ReactDOM.createPortal(
            <div className="modal-cover" tabIndex="-1" style={{zIndex: "1"}} role="dialog" aria-hidden="true">
                <div className="modal-dialog" onClick={(e) => {e.stopPropagation()}}>
                    <div className="modal-content"> 
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {props.header}
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.onDismiss}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                         <div className="modal-body">
                             {props.content}
                         </div>
                        {props.actions}
                    </div>
                </div>
            </div>,
            document.querySelector("#modal")
        )
}

export default Modal;