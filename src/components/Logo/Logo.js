import React from 'react';
import './style.scss';
import imgLogo from './i/taco-logo-a.png';

const Logo = (props) => (
    <div>
        <img src={imgLogo} className="logo" alt="logo" />
    </div>
)
export default Logo;