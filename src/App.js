import React from 'react';
import './assets/scss/styles.scss';
import Layout from './hoc/Layout/Layout';
import TacoBuilder from './containers/TacoBuilder/TacoBuilder';
//import Checkout from './containers/Checkout/Checkout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import AsyncComponent from './hoc/AsyncComponent/AsyncComponent';
//import Orders from './containers/Orders/Orders';
//import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import { connect } from 'react-redux';

const asyncCheckout = AsyncComponent(() => {
    return import ('./containers/Checkout/Checkout');
})

const asyncOrders = AsyncComponent(() => {
    return import ('./containers/Orders/Orders');
})

const asyncAuth = AsyncComponent(() => {
    return import ('./containers/Auth/Auth');
})

class App extends React.Component {

    componentDidMount(){
        this.props.onTryAutoSignIn();
    }
    render(){
        return (
            <Layout>
                <Switch>
                    { this.props.rdx_isAuthenticated && <Route path="/checkout" component={asyncCheckout} />}
                    { this.props.rdx_isAuthenticated && <Route path="/orders" component={asyncOrders} />}
                    <Route path="/auth" component={asyncAuth} />
                    { this.props.rdx_isAuthenticated && <Route path="/logout" component={Logout} />}
                    <Route path="/" exact component={TacoBuilder} />
                    <Redirect to="/" component={TacoBuilder} />
                </Switch>
            </Layout>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        rdx_isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTryAutoSignIn: () => {
            dispatch(actions.authCheckState())
        } 
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
