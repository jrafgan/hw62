import React from 'react';
import NavMenu from "./NavMenu";
import Logo from "./Logo";

const Header = () => {
    return (
        <div className='header'>
            <Logo/>
            <NavMenu/>
        </div>
    );
};

export default Header;