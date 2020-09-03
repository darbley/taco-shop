import React from 'react';
import './style.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => (
    <div className={`wrapper ${props.addClass}`}>
        <Toolbar />
        <SideDrawer />
        <main>
            {props.children}
        </main>
        
    </div>
)
export default Layout;