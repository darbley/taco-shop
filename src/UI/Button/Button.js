import React from 'react';
import './style.scss';

const Button = (props) => (
    <button className={`btn ${props.addClass}`} onClick={props.btnClick} disabled={props.disabled}>
        {props.children}
    </button>
)
export default Button;