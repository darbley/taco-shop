import React from 'react';
import './style.scss';
import NavItem from './NavItem/NavItem';

const NavItems = (props) => (
    <nav className="nav-items">
        <ul>
            <NavItem link="/" >Taco Builder</NavItem>
            <NavItem link="/orders" exact>Orders</NavItem>
        </ul>
    </nav>
)
export default NavItems;