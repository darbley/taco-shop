import React from 'react';
import { connect } from 'react-redux';
import * as tacoBuildActions from '../../store/actions/index';
import './style.scss';
import Taco from '../../components/Taco/Taco';
import BuildControls from '../../components/Taco/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../components/Taco/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

// const INGREDIENT_PRICES = {
//     tortilla: 0,
//     tortillaSoft: 0,
//     beef: 1,
//     chicken: 1,
//     pork: 1,
//     bean: 1,
//     fish: 1,
//     lettuce: 0.3,
//     tomato: 0.25,
//     onion: 0.25,
//     salsa: 0.35,
//     sourCream: 0.25,
//     guacamole: 0.8,
//     cilantro: 0.3
// }

class TacoBuilder extends React.Component {
    state = {
        orderNow: false,
        
    }

    componentDidMount() {
        this.props.onInitIngredients()
        // axios.get('https://taco-shop-c2d0c.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         console.log('response ',response);
        //         this.setState({ingredients: response.data});
        //     })
        //     .catch(error => {
        //         this.setState({
        //             error: true
        //         })
        //     });
    }

    // addIngredientHandler = (type) => {
    //     const currentCount = this.state.ingredients[type];
    //     const updatedCount = currentCount + 1;
        
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }
    //     //Update ingredient
    //     updatedIngredients[type] = updatedCount;

    //     //Add extra cost
    //     const price = INGREDIENT_PRICES[type];
    //     const currentPrice  = this.state.totalPrice;
    //     const newPrice      = currentPrice + price;
    //     this.setState({
    //         totalPrice: newPrice,
    //         ingredients: updatedIngredients
    //     })
    //     this.updatePurchaseState(updatedIngredients);
    // }

    // removeIngredientHandler = (type) => {
    //     const currentCount = this.state.ingredients[type];
    //     //Make sure there is a single ingredient or return
    //     if(currentCount <= 0){
    //         return
    //     }

    //     const updatedCount = currentCount - 1;
        
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }
    //     //Update ingredient
    //     updatedIngredients[type] = updatedCount;

    //     //Add extra cost
    //     const price = INGREDIENT_PRICES[type];
    //     const currentPrice  = this.state.totalPrice;
    //     const newPrice      = currentPrice - price;

    //     this.setState({
    //         totalPrice: newPrice,
    //         ingredients: updatedIngredients
    //     })
    //     this.updatePurchaseState(updatedIngredients);
    // }

    updatePurchaseState = (ingredients) => {
       

        // const sum = Object.keys(ingredients)
        //             .map((igKey) => {
        //                 return (
        //                     ingredients[igKey]
        //                 )
        //             })

        const sum = Object.values(ingredients)
            .reduce((sum, numbr) => {
                return sum + numbr
            }, 0);
        //console.log('sum obj val ',sum);
        //this.setState({ purchaseable: sum > 0});
        return sum > 0;
        
    }

    orderNowHandler = () => {
        this.setState({ orderNow: true });
    }

    modalCloseHandler = () => {
        this.setState({orderNow: false})    
    }
    purchaseContinueHandler = () => {
        // const queryParams = [];

        // for (let i in this.state.ingredients){
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        // }
        // queryParams.push('price=' + this.state.totalPrice);
        // const queryString = queryParams.join('&');

        this.props.history.push({
            pathname:  '/checkout',
            //search: '?'+ queryString
        });


        // this.setState({ loading: true });

        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: "buddy name",
        //         address: {
        //             street: '25 road street',
        //             zipCode: 'MFR83M',
        //             country: 'Canada'
        //         },
        //         email: 'testmail@gmail.com'
        //     },
        //     deliveryMethod: 'fastest'
        // }

        // axios.post('/orders.json', order)
        //     .then(response => {
        //         this.setState({ 
        //             loading: false,
        //             orderNow: false
        //          });
        //     })
        //     .catch(error => {
        //         this.setState({ 
        //             loading: false,
        //             orderNow: false
        //         });
        //     });

    }

    render() {
        const disableInfo = {
            ...this.props.rdx_ingredients
        }
        //Return value of true or false
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        let orderSummary = <Spinner />;
        let myTaco = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

        if(this.props.rdx_ingredients){
            myTaco = (
                <React.Fragment>
                    <Taco ingredients={this.props.rdx_ingredients} />
                    <BuildControls 
                        addIngredient={this.props.addIngredientHandler}   
                        removeIngredient={this.props.removeIngredientHandler} 
                        disabled={disableInfo}
                        purchaseable={this.updatePurchaseState(this.props.rdx_ingredients)}
                        totalPrice={this.props.rdx_totalPrice}
                        orderNow={this.orderNowHandler}
                    />
                </React.Fragment>
            )

            orderSummary = <OrderSummary 
                ingredients={this.props.rdx_ingredients} 
                purchaseCancel={this.modalCloseHandler}
                purchaseContinue={this.purchaseContinueHandler}
                totalPrice={this.props.rdx_totalPrice}
            />
        } 

        // if(this.state.loading){
        //     orderSummary = <Spinner />;
        // }

        return (
            <div>
                <Modal show={this.state.orderNow} closeBackdrop={this.modalCloseHandler}>
                    {orderSummary}
                </Modal>

                {myTaco}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return  {
        rdx_ingredients: state.tacoBuilder.ingredients,
        rdx_totalPrice: state.tacoBuilder.totalPrice,
        error: state.tacoBuilder.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIngredientHandler: (ingName) => {
            return(
                dispatch(tacoBuildActions.addIngredient(ingName))
            )
        },
        removeIngredientHandler: (ingName) => {
            return(
                dispatch(tacoBuildActions.removeIngredient(ingName))
            )
        },
        onInitIngredients: () => {
            return (
                dispatch(tacoBuildActions.initIngredients())
            )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(TacoBuilder, axios)); 