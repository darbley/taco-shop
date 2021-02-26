import React from 'react';
import './assets/scss/styles.scss';
import Layout from './hoc/Layout/Layout';
import TacoBuilder from './containers/TacoBuilder/TacoBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

function App() {
  return (
        <Layout>
            <Switch>
                <Route path="/checkout" component={Checkout} />
                <Route path="/orders" component={Orders} />
                <Route path="/auth" component={Auth} />
                <Route path="/logout" component={Logout} />
                <Route path="/" component={TacoBuilder} />
               
            </Switch>
        </Layout>
  );
}

export default App;
