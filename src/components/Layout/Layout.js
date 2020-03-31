import React from 'react';
import './style.scss';

const Layout = (props) => (
    <div className={`wrapper ${props.addClass}`}>
        {children}
    </div>
)
export default Layout;