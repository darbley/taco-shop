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

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}


export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrders = () => {
    return (dispatch) => {
        dispatch(fetchOrdersStart());
        axios.get('/orders.json')
            .then(response => {

                const fetchedOrders = [];
                for(let key in response.data){
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
                
            })
            .catch(error => {
                dispatch(fetchOrdersFail(error));
            })
    }
}