import React, { Component } from 'react';
import Modal from '../../UI/Modal/Modal';


const withErrorHandler = (WrappedComponent, axios ) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount () {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            })
            // axios.interceptors.request.use(req => {
            //     this.setState({error: null})
            // })
            // axios.interceptors.response.use(null, error => {
            //     this.setState({
            //         error: error
            //     });
            // })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        handleErrorConfirmed = () => {
            this.setState({ error: null });
        }

        render(){
            return (
                <React.Fragment>
                    <Modal show={this.state.error} closeBackdrop={this.handleErrorConfirmed}>
                        {this.state.error ? this.state.error.message : null }
                        Something didn't work
                    </Modal>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            );
        }
    }
    
    
}
export default withErrorHandler;