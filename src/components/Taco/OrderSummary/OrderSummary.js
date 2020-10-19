import React from 'react';
import './style.scss';
import Button from '../../../UI/Button/Button';

class OrderSummary extends React.Component {
    render() {
        const toppings = Object.keys(this.props.ingredients)
        .map((igKey, i) => {
            return(
                <li key={igKey+i}><span>{igKey}</span>{this.props.ingredients[igKey]}</li>
            )
        })
        return (
            <div>
                <h1>Your Order</h1>
                <p>A delicious taco with the following:</p>

                <ul>
                    {toppings}
                </ul>
                <h2>Price Total: <span>{this.props.totalPrice.toFixed(2)}</span></h2>
                <p>Continue to checkout?</p>

                <Button addClass="danger" btnClick={this.props.purchaseCancel}>Cancel</Button>
                
                <Button addClass="success" btnClick={this.props.purchaseContinue}>Continue</Button>
                
            </div>
        )
    }
}
export default OrderSummary;