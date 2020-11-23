import React from 'react';
import './style.scss';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends React.Component {
    state = {
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount = () => {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;

        for(let param of query.entries()){
            if(param[0] === 'price'){
                price = param[1];
            }else {
                ingredients[param[0]] = +param[1];
            }
           
        }
        this.setState({
            ingredients: ingredients,
            totalPrice: price
        })
    }

    checkoutContinue = () => {
        this.props.history.replace('/checkout/contact-info');
    }

    checkoutCancel = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>  
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    checkoutContinue={this.checkoutContinue} 
                    checkoutCancel={this.checkoutCancel} 
                />
                <Route path={this.props.match.url + '/contact-info'} render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
            </div>
        )
    }
}
export default Checkout;