import React from 'react';
import './style.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Tortilla', type: 'tortilla'},
    { label: 'Beef', type: 'beef'},
    { label: 'Chicken', type: 'chicken'},
    { label: 'Pork', type: 'pork'},
    { label: 'Bean', type: 'bean'},
    { label: 'Fish', type: 'fish'},
    { label: 'Lettuce', type: 'lettuce'},
    { label: 'Tomato', type: 'tomato'},
    { label: 'Onion', type: 'onion'},
    { label: 'Salsa', type: 'salsa'},
    { label: 'Sour Cream', type: 'sourCream'},
    { label: 'Guacamole', type: 'guacamole'},
    { label: 'Cilantro', type: 'cilantro'}
];

const BuildControls = (props) => (

    <div className="build-controls">
        {
            controls.map((ctrl) => {
                return (
                    <BuildControl 
                        label={ctrl.label} 
                        key={ctrl.label} 
                        addIngredient={() => props.addIngredient(ctrl.type)}
                        removeIngredient={() => props.removeIngredient(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}
                     />
                )
            })
        }
    </div>

)
export default BuildControls;