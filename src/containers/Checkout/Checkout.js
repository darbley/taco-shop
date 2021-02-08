import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import './style.scss';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends React.Component {
    // state = {
    //     ingredients: null,
    //     totalPrice: 0
    // }

    componentWillMount = () => {
        // const query = new URLSearchParams(this.props.location.search);
        // const ingredients = {};
        // let price = 0;

        // for(let param of query.entries()){
        //     if(param[0] === 'price'){
        //         price = param[1];
        //     }else {
        //         ingredients[param[0]] = +param[1];
        //     }
           
        // }
        // this.setState({
        //     ingredients: ingredients,
        //     totalPrice: price
        // })
    }

    checkoutContinue = () => {
        this.props.history.replace('/checkout/contact-info');
    }

    checkoutCancel = () => {
        this.props.history.goBack();
    }

    render() {
        let summary = <Redirect to="/" />;
        if(this.props.rdx_ingredients){
            summary = <div>  
                            <CheckoutSummary 
                                ingredients={this.props.rdx_ingredients} 
                                checkoutContinue={this.checkoutContinue} 
                                checkoutCancel={this.checkoutCancel} 
                            />
                            <Route 
                                path={this.props.match.url + '/contact-info'} 
                                //render={(props) => (<ContactData ingredients={this.props.rdx_ingredients} price={this.props.rdx_totalPrice} {...props} />)} 
                                component={ContactData}
                            />
                        </div>
        } 

        return (
           summary
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rdx_ingredients: state.tacoBuilder.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);