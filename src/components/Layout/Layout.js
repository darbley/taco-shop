import React from 'react';
import './style.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => (
    <div className={`wrapper ${props.addClass}`}>
        <Toolbar />
        <main>
            {props.children}
        </main>
        
    </div>
)
export default Layout;