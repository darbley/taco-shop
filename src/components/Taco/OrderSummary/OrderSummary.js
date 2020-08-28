import React from 'react';
import './style.scss';

const OrderSummary = (props) => {
    const toppings = Object.keys(props.ingredients)
        .map((igKey, i) => {
            return(
                <li key={igKey+i}><span>{igKey}</span>{props.ingredients[igKey]}</li>
            )
        })

    return (
        <div>
            <h1>Your Order</h1>
            <p>A delicious taco with the following:</p>

            <ul>
                {toppings}
            </ul>
        </div>
    )
}
export default OrderSummary;