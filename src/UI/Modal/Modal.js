import React from 'react';
import './style.scss';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component {

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log('nextProps ',nextProps)
        if(nextProps.show !== this.props.show || nextProps.children !== this.props.children){
            return true;
        }else{
            return false;
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} closeBackdrop={this.props.closeBackdrop} />
                <div className={`modal ${this.props.show ? 'show-modal' : 'hide-modal'}`}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}
export default Modal;