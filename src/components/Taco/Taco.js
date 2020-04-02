import React from 'react';
import './style.scss';
import TacoIngredient from './TacoIngredient/TacoIngredient';

const Taco = (props) => {
    const arrIngredients = Object.keys(props.ingredients);
   
    let toppings = arrIngredients.map((ingKey) => {
        //console.log('key ',ingKey);
        //console.log('props.ingredient[ingKey]',props.ingredients[ingKey]);
        return [...Array(props.ingredients[ingKey])].map((_, i) => {
            return <TacoIngredient key={ingKey + i} type={ingKey} /> 
        })
    })//flatten array with reduce
    .reduce( (arr,el) => {
        return arr.concat(el)
    }, []);

    // check to see if there are any toppings selected
    if (toppings.length === 0){
        toppings = <p>Please select your toppings</p>
    }
    console.log('toppings ',toppings);
    return (
        <div>
            {toppings}
        </div>
)}
export default Taco;