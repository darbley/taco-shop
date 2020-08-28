import React from 'react';
import './style.scss';

const Modal = (props) => (
    <div className={`modal ${props.show ? 'show-modal' : 'hide-modal'}`}>
        {props.children}
    </div>
)
export default Modal;