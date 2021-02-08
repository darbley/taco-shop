import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingName
    }
}

export const removeIngredient = (ingName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const fetchIngredientsFail = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAIL
    }
}

export const initIngredients = () => {
    // dispatch available via thunk
    return dispatch => {

        axios.get('https://taco-shop-c2d0c.firebaseio.com/ingredients.json')
            .then(response => {
                console.log('response ',response);
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                console.log('error ',error);
            });

    }
}