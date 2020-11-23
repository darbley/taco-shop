import React from 'react';
import './style.scss';
import Button from '../../../UI/Button/Button';
import Taco from '../../Taco/Taco';

const CheckoutSummary = (props) => (
    <div className="checkout-summary">
       
        <Taco ingredients={props.ingredients} />
        <div className="btn-wrap">
            <Button btnType="Danger" addClass="danger" btnClick={props.checkoutCancel}>Cancel</Button>
            <Button btnType="Success" btnClick={props.checkoutContinue}>Success</Button>
        </div>
        
    </div>
)
export default CheckoutSummary;