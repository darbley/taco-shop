import React from 'react';
import {connect} from 'react-redux';
import './style.scss';
import Button from '../../../UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../UI/Spinner/Spinner';
import Input from '../../../UI/Forms/Input/Input';
//import { element } from 'prop-types';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/'

class ContactData extends React.Component {
    state = {
        orderForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name',
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street',
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                zipCode: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Zip Code',
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 5,
                        maxLength: 5
                    },
                    valid: false,
                    touched: false
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Country',
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                email:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'email@address.com',
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {

                        options: [
                            { value: 'fastest', displayValue: 'Fastest'},
                            { value: 'cheapest', displayValue: 'Cheapest'}
                        ]
                    },
                    value: 'fastest',
                    validation: {},
                    valid: true
                },
        }
        
        //loading: false
    }

    componentDidMount = () => {
        

    }

    checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid
        }

        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangeHandler = (event, inputIdentity) => {
        console.log('the evevnt ', event.target.value);
        // Make a clone from the current state.
        const updatedOrderForm = {
            ...this.state.orderForm
        }

        // Must deep copy nested objects as they still point to their original object reference.
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentity]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentity] = updatedFormElement;

        let formIsValid = true;
        for (let formElement in updatedOrderForm){
            formIsValid = updatedOrderForm[formElement].valid && formIsValid;
        }
        this.setState({
            orderForm: updatedOrderForm,
            formIsValid: formIsValid
        });
    }

    orderHandler = (e) => {
        e.preventDefault();
         //this.setState({ loading: true });

        const formData = {};
        for (let formElement in this.state.orderForm){
            formData[formElement] = this.state.orderForm[formElement].value;
        }

        const order = {
            ingredients: this.props.rdx_ingredients,
            price: this.props.rdx_totalPrice,
            orderData: formData,
            userId: this.props.rdx_userId
        }
        console.log('order ',order);

        this.props.onOrderTaco(order, this.props.rdx_token);

        // axios.post('/orders.json', order)
        //     .then(response => {
        //         this.setState({ 
        //             loading: false,
        //          });
        //         this.props.history.push('/');
        //     })
        //     .catch(error => {
        //         this.setState({ 
        //             loading: false,
                    
        //         });
        //     });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (<form onSubmit={this.orderHandler}>
            
                        {formElementsArray.map((el) => {
                            return (
                                <Input 
                                    key={el.id} 
                                    elementType={el.config.elementType} 
                                    elementConfig={el.config.elementConfig} 
                                    value={el.config.value} 
                                    changed={(event) => this.inputChangeHandler(event, el.id)} 
                                    invalid={!el.config.valid}
                                    shouldValidate={el.config.validation}
                                    touched={el.config.touched}
                                />
                            )
                        })}
                        {/* <Input type="text" inputtype="input" name="name" placeholder="name" />
                        <Input type="email" inputtype="input" name="email" placeholder="email" />
                        <Input type="text" inputtype="input" name="street" placeholder="street" />
                        <Input type="text" inputtype="input" name="postal" placeholder="A1A 1A1" /> */}
                        <Button btnType="Success" disabled={!this.state.formIsValid} >ORDER</Button>
                    </form>);

        if(this.props.rdx_loading ){
            form = <Spinner />;
        }
        return (
            <div className="contact-data">
                        <h4>Enter Your Contact Info</h4> 
                        {form}
                    </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rdx_ingredients: state.tacoBuilder.ingredients,
        rdx_totalPrice: state.tacoBuilder.totalPrice,
        rdx_loading: state.order.loading,
        rdx_token: state.auth.token,
        rdx_userId: state.auth.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onOrderTaco: (orderData, token) => {
            return (
                dispatch(actions.purchaseTaco(orderData, token))
            )
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));