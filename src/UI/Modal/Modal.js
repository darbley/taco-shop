import React from 'react';
import './style.scss';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => (
    <React.Fragment>
        <Backdrop show={props.show} closeBackdrop={props.modalClose} />
        <div className={`modal ${props.show ? 'show-modal' : 'hide-modal'}`}>
            {props.children}
        </div>
    </React.Fragment>
)
export default Modal;