import React from 'react';
import './style.scss';

const Layout = (props) => (
    <div className={`wrapper ${props.addClass}`}>
        <div>Toolbar, SideDrawer, Backdrop</div> 
        {props.children}
    </div>
)
export default Layout;