import React from 'react';
import './style.scss';
import Button from '../../../UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../UI/Spinner/Spinner';
import Input from '../../../UI/Forms/Input/Input';
//import { element } from 'prop-types';

class ContactData extends React.Component {
    state = {
        orderForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name',
                    },
                    value: ''
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street',
                    },
                    value: '',
                },
                zipCode: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Zip Code',
                    },
                    value: '',
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Country',
                    },
                    value: '',
                },
                email:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'email@address.com',
                    },
                    value: '',
                },
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {

                        options: [
                            { value: 'fastest', displayValue: 'Fastest'},
                            { value: 'cheapest', displayValue: 'Cheapest'}
                        ]
                    },
                    value: ''
                },
        },
        
        loading: false
    }

    componentDidMount = () => {
        

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
        updatedOrderForm[inputIdentity] = updatedFormElement;
        this.setState({
            orderForm: updatedOrderForm
        });
    }

    orderHandler = (e) => {
        e.preventDefault();
         this.setState({ loading: true });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price
        }
        console.log('order ',order);

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ 
                    loading: false,
                 });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ 
                    loading: false,
                    
                });
            });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (<form>
            
                        {formElementsArray.map((el) => {
                            return (
                                <Input 
                                    key={el.id} 
                                    elementType={el.config.elementType} 
                                    elementConfig={el.config.elementConfig} 
                                    value={el.config.value} 
                                    changed={(event) => this.inputChangeHandler(event, el.id)} 
                                />
                            )
                        })}
                        {/* <Input type="text" inputtype="input" name="name" placeholder="name" />
                        <Input type="email" inputtype="input" name="email" placeholder="email" />
                        <Input type="text" inputtype="input" name="street" placeholder="street" />
                        <Input type="text" inputtype="input" name="postal" placeholder="A1A 1A1" /> */}
                        <Button btnType="Success" btnClick={this.orderHandler} >ORDER</Button>
                    </form>);

        if(this.state.loading ){
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
export default ContactData;