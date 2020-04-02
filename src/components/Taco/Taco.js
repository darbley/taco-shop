import React from 'react';
import './style.scss';
import TacoIngredient from './TacoIngredient/TacoIngredient';

const Taco = (props) => {
    const arrIngredients = Object.keys(props.ingredients);
    const toppings = arrIngredients.map((ingKey) => {
        //console.log('key ',ingKey);
        //console.log('props.ingredient[ingKey]',props.ingredients[ingKey]);
        return [...Array(props.ingredients[ingKey])].map((_, i) => {
            return <TacoIngredient key={ingKey + i} type={ingKey} /> 
        })
    })
    return (
        <div>
            {toppings}
        </div>
)}
export default Taco;