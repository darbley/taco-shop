import React from 'react';
import './style.scss';
import Logo from '../../Logo/Logo';
import NavItems from '../../Navigation/NavItems/NavItems';
import Backdrop from '../../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
    let sideDrawerStatus = 'close';
    if(props.open === true){
        sideDrawerStatus = 'open';
    }
    return (
        <React.Fragment>
            
            <Backdrop show={props.open} closeBackdrop={props.closed} />
            <div className={`side-drawer ${sideDrawerStatus}`} onClick={props.closed}>
                <Logo />
                <NavItems isAuth={props.isAuth} closeBackdrop={props.closed} />
            </div>
    
        </React.Fragment>
    )
} 
export default SideDrawer;