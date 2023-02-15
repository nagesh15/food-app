import React from "react";
import ReactDOM  from "react-dom";
import classes from './Modal.module.css';

function BackDrop(props) {
    return <div className={classes.backdrop}></div>
}

function ModalOverlay(props){
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

//portal element
const portalEle = document.getElementById('overlays');

function Modal(props){
    return <React.Fragment>
        {ReactDOM.createPortal(<BackDrop />,portalEle)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEle)}
    </React.Fragment>
}

export default Modal;