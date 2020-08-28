import React from 'react';
import './style.scss';
import Taco from '../../components/Taco/Taco';
import BuildControls from '../../components/Taco/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    beef: 1,
    chicken: 1,
    pork: 1,
    bean: 1,
    fish: 1,
    lettuce: 0.3,
    tomato: 0.25,
    onion: 0.25,
    salsa: 0.35,
    sourCream: 0.25,
    guacamole: 0.8,
    cilantro: 0.3
}

class TacoBuilder extends React.Component {
    state = {
        ingredients: {
            tortilla: 0,
            beef: 0,
            chicken: 0,
            pork: 0,
            bean: 0,
            fish: 0,
            lettuce: 0,
            tomato: 0,
            onion: 0,
            salsa: 0,
            sourCream: 0,
            guacamole: 0,
            cilantro: 0
        },
        totalPrice: 4,
        purchaseable: false,
    }

    addIngredientHandler = (type) => {
        const currentCount = this.state.ingredients[type];
        const updatedCount = currentCount + 1;
        
        const updatedIngredients = {
            ...this.state.ingredients
        }
        //Update ingredient
        updatedIngredients[type] = updatedCount;

        //Add extra cost
        const price = INGREDIENT_PRICES[type];
        const currentPrice  = this.state.totalPrice;
        const newPrice      = currentPrice + price;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const currentCount = this.state.ingredients[type];
        //Make sure there is a single ingredient or return
        if(currentCount <= 0){
            return
        }

        const updatedCount = currentCount - 1;
        
        const updatedIngredients = {
            ...this.state.ingredients
        }
        //Update ingredient
        updatedIngredients[type] = updatedCount;

        //Add extra cost
        const price = INGREDIENT_PRICES[type];
        const currentPrice  = this.state.totalPrice;
        const newPrice      = currentPrice - price;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }

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
        this.setState({ purchaseable: sum > 0});
        
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        }
        //Return value of true or false
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        
        return (
            <div>
                <Taco ingredients={this.state.ingredients} />
                <BuildControls 
                    addIngredient={this.addIngredientHandler}   
                    removeIngredient={this.removeIngredientHandler} 
                    disabled={disableInfo}
                    purchaseable={this.state.purchaseable}
                    totalPrice={this.state.totalPrice}
                />
            </div>
        )
    }
}
export default TacoBuilder; 