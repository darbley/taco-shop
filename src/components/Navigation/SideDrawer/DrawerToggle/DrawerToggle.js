import React from 'react';
import './style.scss';

const DrawerToggle = (props) => (
    <div onClick={props.clicked} className={`drawer-toggle-wrap`}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)
export default DrawerToggle;