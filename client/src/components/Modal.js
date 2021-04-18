import React from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  return ReactDOM.createPortal(
    <div className="modal-background" onClick={props.onDismiss}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <h4>{props.header}</h4>
        </div>
        <div className="content">
          <p>{props.content}</p>
        </div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
