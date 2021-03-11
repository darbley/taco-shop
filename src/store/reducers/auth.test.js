import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer ', () => {
    let intialState;

    beforeEach(() => {
        intialState = {
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }
    });

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })


    it('should store the token upon login', () => {
        expect(reducer(intialState, {
                type: actionTypes.AUTH_SUCCESS,
                idToken: '9399393',
                userId: 10
            })).toEqual({
            token: '9399393',
            userId: 10,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    })
});