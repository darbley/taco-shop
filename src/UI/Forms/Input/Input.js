import React from 'react';
import './style.scss';

const Input = (props) =>{ 
    let inputElement = null;

    switch(props.elementType){

        case('input'):
            inputElement = <input className="" {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;

        case('textarea'):
            inputElement = <textarea className="" {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case('select'):
            inputElement = (
                        <select
                            className="dropdown-select"
                            value={props.value}
                            onChange={props.changed}
                        >
                            {props.elementConfig.options.map((option) => {
                                return(
                                    <option key={option.value} value={option.value}>{option.displayValue}</option>
                                )
                            })}
                            <option></option>
                        </select>
            );
            break;

        default:
            inputElement = <input className="" {...props.elementConfig} value={props.value} onChange={props.changed} />

    }

    return(
        <div className="input-wrap">
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
}
export default Input;