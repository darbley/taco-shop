import React from 'react';
import './style.scss';

const Order = (props) => {
    const ingredients = [];

    for( let ingredientName in props.ingredients){
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }

    const ingredientOutput = ingredients.map(ig => {
        return (
            <span className="" key={ig.name}>{ig.name} ({ig.amount})</span>
        )
    })

    return(
        <div className="order">
            <p>{ingredientOutput}</p>
            <p>Price: USD<strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
    
}
export default Order;