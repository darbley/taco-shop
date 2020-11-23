import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const NavItem = (props) => (
    <li className={props.name}>
        <NavLink
            to={props.link}
        >
            {props.children}
        </NavLink>
    </li>
)
export default NavItem;