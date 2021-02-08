import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseTacoSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_TACO_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseTacoFail = (error) => {
    return {
        type: actionTypes.PURCHASE_TACO_FAIL,
        error: error
    }
}

export const purchaseTacoStart = () => {
    return {
        type: actionTypes.PURCHASE_TACO_START
    }
}

 export const purchaseTaco = (orderData) => {
    return (dispatch) => {
        dispatch(purchaseTacoStart());
        axios.post('/orders.json', orderData)
            .then(response => {
                console.log('rsp ',response);
                dispatch(purchaseTacoSuccess(response.data.name, orderData));
            })
            .catch(error => {
               dispatch(purchaseTacoFail(error));
            });
    }
} 