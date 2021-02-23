import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const purchaseInit = (state, action) => {
    return updateObject(state, {
            purchased: false
        }
    );
}

const purchaseTacoStart = (state, action) => {
    return updateObject(state, {
            loading: true
        }
    );
}

const purchaseTacoSuccess = (state, action) => {
    return updateObject(state, {
            loading: false,
            purchased: true,
            orders: state.orders.concat({
                ...action.orderData,
                id: action.orderId
            })
        }
    );
}

const purchaseTacoFail = (state, action) => {
    return updateObject(state, {
            loading: false
        }
    );
}

const fetchOrdersStart = (state, action) => {
    return updateObject(state, {
            loading: true
        }
    ); 
}

const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, {
            orders: action.orders,
            loading: false
        }
    );
}

const fetchOrdersFail = (state, action) => {
    return updateObject(state, {
            loading: false,
            error: action.error
        }
    );
}

const reducer = (state = initialState,  action) => {
    switch(action.type){
        case actionTypes.PURCHASE_INIT :
            return purchaseInit(state, action);
            // return updateObject(state, {
            //         purchased: false
            //     }
            // );
            // return {
            //     ...state,
            //     purchased: false
            // }
        case actionTypes.PURCHASE_TACO_START :
            return purchaseTacoStart(state, action);
            // return updateObject(state, {
            //         loading: true
            //     }
            // );
            // return {
            //     ...state,
            //     loading: true
            // }
        case actionTypes.PURCHASE_TACO_SUCCESS :
            return purchaseTacoSuccess(state, action);
            // return updateObject(state, {
            //         loading: false,
            //         purchased: true,
            //         orders: state.orders.concat({
            //             ...action.orderData,
            //             id: action.orderId
            //         })
            //     }
            //);
            // return {
            //     ...state,
            //     loading: false,
            //     purchased: true,
            //     orders: state.orders.concat({
            //         ...action.orderData,
            //         id: action.orderId
            //     })
            // }
        
        case actionTypes.PURCHASE_TACO_FAIL :
            return purchaseTacoFail(state, action);
            // return updateObject(state, {
            //         loading: false
            //     }
            // );
            // return {
            //     ...state,
            //     loading: false
            // }
        
        case actionTypes.FETCH_ORDERS_START :
            return fetchOrdersStart(state, action);
            // return updateObject(state, {
            //         loading: true
            //     }
            // );
            // return {
            //     ...state,
            //     loading: true
            // }
        
        case actionTypes.FETCH_ORDERS_SUCCESS :
            return fetchOrdersSuccess(state, action);
            // return updateObject(state, {
            //         orders: action.orders,
            //         loading: false
            //     }
            // );
            // return {
            //     ...state,
            //     orders: action.orders,
            //     loading: false
            // }

        case actionTypes.FETCH_ORDERS_FAIL :
            return fetchOrdersFail(state, action);
            // return updateObject(state, {
            //         loading: false,
            //         error: action.error
            //     }
            // );
            // return {
            //     ...state,
            //     loading: false,
            //     error: action.error
            // }
        
        default:
            return state;
    }
}

export default reducer;