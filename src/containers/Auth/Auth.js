import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import Input from '../../UI/Forms/Input/Input';
import Button from '../../UI/Button/Button';
import * as actions from '../../store/actions/index';
import Spinner from '../../UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';

class Auth extends React.Component {

    state = {
        authForm: {
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'example@mail.com'
                    },
                    value: '',
                    validation: {
                        required: true,
                        isEmail: true
                    },
                    valid: false,
                    touched: false
                },
                password: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'password'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 6
                    },
                    valid: false,
                    touched: false
                }
        },
        signUp: true
    }

    componentDidMount() {
        if(!this.props.rdx_buildingTaco && this.props.authRedirectPath !== '/'){
            //Not building go homepage
            this.props.onSetAuthRedirectPath('/');
        }
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
        const updatedAuthForm = {
            ...this.state.authForm,
            [inputIdentity]: {
                ...this.state.authForm[inputIdentity],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.authForm[inputIdentity].validation),
                touched: true
            }   
        }
        this.setState({ authForm: updatedAuthForm });
    }

    submitHandler = (e) => {
        e.preventDefault();
        let email = this.state.authForm.email.value;
        let password = this.state.authForm.password.value;
        let signUp   = this.state.signUp;

        this.props.onAuthorize(email, password, signUp);
    }

    toggleAuthMode = () => {
        this.setState((prevState) => {
            return{
                signUp: !prevState.signUp
            }
        })
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.authForm){
            formElementsArray.push({
                id: key,
                config: this.state.authForm[key]
            })
        }

        let form = formElementsArray.map( (el) => {
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
        });

        if(this.props.rdx_loading){
            form = <Spinner />
        }

        let errorMessage = null;
        if(this.props.rdx_error){
            errorMessage = (
                <p>{this.props.rdx_error.message}</p>
            )
        }

        let authRedirect = null;
        this.props.rdx_isAuthorized ? authRedirect = <Redirect to={this.props.rdx_authRedirectPath} /> : authRedirect = null;

        return (
            <>
            {authRedirect}
            <div className='blockwrap auth '>
                {errorMessage}
                <form id="auth-form" onSubmit={this.submitHandler}>
                    {form}
                    <Button type="submit" btnType="Success">Submit</Button>
                    
                </form>
                <Button btnType="Danger" btnClick={this.toggleAuthMode}>Switch To {this.state.signUp ? 'Sign In' : 'Sign Up'}</Button>

            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rdx_loading: state.auth.loading,
        rdx_error: state.auth.error,
        rdx_isAuthorized: state.auth.token !== null,
        rdx_buildingTaco: state.tacoBuilder.building,
        rdx_authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuthorize: (email, password, signUp) => {
            return (
                dispatch(actions.authorize(email, password, signUp))
            )
        },
        onSetAuthRedirectPath: (path) => {
            return (
                dispatch(actions.setAuthRedirectPath(path))
            )
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);