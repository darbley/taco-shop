import React from 'react';
import './style.scss';

const Button = (props) => (
    <button className={`btn ${props.addClass}`} onClick={props.btnClick}>
        {props.children}
    </button>
)
export default Button;