import React from 'react';
import './style.scss';

const NavItem = (props) => (
    <li className={props.name}>
        <a
            href={props.link}
            className={props.active ? 'active':null}
        >
            {props.children}
        </a>
    </li>
)
export default NavItem;