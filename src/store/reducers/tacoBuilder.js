import * as actionTypes from '../actions/actionTypes';

const INGREDIENT_PRICES = {
    tortilla: 0,
    tortillaSoft: 0,
    beef: 1,
    chicken: 1,
    pork: 1,
    bean: 1,
    fish: 1,
    lettuce: 0.25,
    tomato: 0.25,
    onion: 0.25,
    salsa: 0.35,
    sourCream: 0.25,
    guacamole: 0.8,
    cilantro: 0.3
}


const initialState = {
    ingredients: null,
    totalPrice: 0,
    error: false
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.ADD_INGREDIENT :
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1, 
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT :
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
                
            };

        case actionTypes.SET_INGREDIENTS :
            return {
                ...state,
                ingredients: action.ingredients,
                error: false
            };

        case actionTypes.FETCH_INGREDIENTS_FAIL :
            return {
                ...state,
                error: true
            }

        default: 
            return state;
    }

    //return state;
}

export default reducer;