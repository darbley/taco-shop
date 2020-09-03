import React from 'react';
import './style.scss';
import Logo from '../../Logo/Logo';
import NavItems from '../../Navigation/NavItems/NavItems';

const SideDrawer = (props) => (
    <div className={`side-drawer`}>
        <Logo />
        <NavItems />
    </div>
)
export default SideDrawer;