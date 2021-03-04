import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');

    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authCheckTimeout = (expirationTime) => {
    //thunk async
    return (dispatch) => {
        setTimeout(()=> {
            dispatch(logout());
        },expirationTime * 1000);
    }
    // return {
    //     type: actionTypes.AUTH_CHECK_TIMEOUT
    // }
}

export const authorize = (email, password, signUp) => {
    console.log('autho');
    // async redux-thunk dispatch
    return (dispatch) => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        // Default sign up
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLJz38aH-4BTyJlu_Tnqos5Ttf4LtWQWA';

        if(!signUp){
            // Change url to sign-in
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLJz38aH-4BTyJlu_Tnqos5Ttf4LtWQWA'
        }

        axios.post(url,authData)
            .then(response => {
                console.log('response is ',response);
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token',response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(authCheckTimeout(response.data.expiresIn));

            })
            .catch(error => {
                console.log('error is ',error.response);
                dispatch(authFail(error.response.data.error));
            })
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
    return (dispatch) => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(logout());
        }else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()){
                dispatch(logout())
            }else{
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token,userId));
                dispatch(authCheckTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
           
        }
        
    }
}