import React from 'react';
import './style.scss';

const Input = (props) =>{ 
    let inputElement = null;
    let inputClass = '';

    if(props.invalid && props.shouldValidate && props.touched){
        inputClass = props.invalid ? 'invalid' : '';
    }

    switch(props.elementType){

        case('input'):
            inputElement = <input className={inputClass} {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;

        case('textarea'):
            inputElement = <textarea className={inputClass} {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case('select'):
            inputElement = (
                        <select
                            className={`dropdown-select ${inputClass}`}
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