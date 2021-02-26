import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../UI/Spinner/Spinner';

class Orders extends React.Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount = () => {
        this.props.onFetchOrders(this.props.rdx_token);
        // axios.get('/orders.json')
        //     .then(response => {

        //         const fetchedOrders = [];
        //         for(let key in response.data){
        //             fetchedOrders.push({
        //                 ...response.data[key],
        //                 id: key
        //             });
        //         }
        //         this.setState({
        //             loading: false,
        //             orders: fetchedOrders
        //         })
        //     })
        //     .catch(error => {
        //         this.setState({
        //             loading: false
        //         })
        //     })
    }

    render() {
        let orders = <Spinner />;
        if(!this.props.loading){
            orders = (
                this.props.rdx_orders.map((order) => {
                    return (
                        <Order 
                            key={order.id} 
                            ingredients={order.ingredients}
                            price={order.price}
                        />
                    )
                })
            )
        }
        return (
            <div className="orders">
                {orders}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        rdx_orders: state.order.orders,
        rdx_token: state.auth.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchOrders: (token) => {
            return (
                dispatch(actions.fetchOrders(token))
            )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));