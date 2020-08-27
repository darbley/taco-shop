import React from 'react';
import './style.scss';

const BuildControl = (props) => (
        <div className="build-control">
            <h4>{props.label}</h4>
            <button onClick={props.removeIngredient} disabled={props.disabled}>Less</button>
            <button onClick={props.addIngredient}>More</button>
        </div>
)
export default BuildControl;