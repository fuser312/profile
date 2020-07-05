import React from 'react';
import ReactDOM from 'react-dom';
import "../styling/modal.css"
import ReactPlayer from "react-player"

const Modal = ({ isShowing, hide, title, videoLink}) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-overlay"/>
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <h2 className="paragraph">
                    {title}
                </h2>

               <div className="video">
                   <ReactPlayer
                       url = {videoLink}/>
               </div>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

export default Modal;
