import React from 'react';
import './style.scss';
import Logo from '../../../components/Logo/Logo';
import NavItems from '../../../components/Navigation/NavItems/NavItems';
const Toolbar = (props) => (
    <div className="toolbar">
        <header>
            <div>Menu</div>
           <div><Logo />
           </div>
            <NavItems />
        </header>
       
    </div>
)
export default Toolbar;