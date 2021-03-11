import React from 'react';
import './style.scss';
import NavItem from './NavItem/NavItem';

const NavItems = (props) => (
    <nav className="nav-items">
        <ul>
            <NavItem link="/" >Taco Builder</NavItem>
            {props.isAuth ? 
                <NavItem link="/orders" exact >Orders</NavItem>
                :
                null
            }
            {!props.isAuth ?
                <NavItem link="/auth" exact >Authorize</NavItem> 
                :
                <NavItem link="/logout" exact >Logout</NavItem> 
            }
            
        </ul>
    </nav>
)
export default NavItems;