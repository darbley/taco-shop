import React from 'react';
import './style.scss';
import NavItem from './NavItem/NavItem';

const NavItems = (props) => (
    <nav className="nav-items">
        <ul>
            <NavItem link="/" active >Taco Builder</NavItem>
            <NavItem link="/" >Checkout</NavItem>
        </ul>
    </nav>
)
export default NavItems;