import React from "react";
import ReactDOM from "react-dom";
import './style.css'


const ModalSubmit= ({ isShowing, hide }) =>
isShowing
// if isShowing true we create a portal
? ReactDOM.createPortal(
    <>
      <div className="modal-overlay">
        <div className="modal-wrapper">
          <div className="modal">
            <div className="modal-header">
              {/* <button
                type="button"
                className="modal-close-button"
                onClick={hide}
              >
               
              </button>*/ }
            </div>
            <div className="modal-body">Votre activitée sera soumise après validation par notre équipe</div>
          </div>
        </div>
      </div>

      
    </>,
    document.body
  )
: null;


export default ModalSubmit;