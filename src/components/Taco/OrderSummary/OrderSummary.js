import React from 'react';
import './style.scss';
import Button from '../../../UI/Button/Button';

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
            <h2>Price Total: <span>{props.totalPrice.toFixed(2)}</span></h2>
            <p>Continue to checkout?</p>

            <Button addClass="danger" btnClick={props.purchaseCancel}>Cancel</Button>
             
            <Button addClass="success" btnClick={props.purchaseContinue}>Continue</Button>
            
        </div>
    )
}
export default OrderSummary;