import React from 'react';
import './style.scss';
import Logo from '../../../components/Logo/Logo';
import NavItems from '../../../components/Navigation/NavItems/NavItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => (
    <div className="toolbar">
        <header>
           <DrawerToggle clicked={props.drawerToggleClicked} />
           <div><Logo />
           </div>
            <NavItems isAuth={props.isAuth} />
        </header>
       
    </div>
)
export default Toolbar;