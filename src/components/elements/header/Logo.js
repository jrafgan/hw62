import React from 'react';
import Logo_img from '../../../images/logo.png';

const Logo = () => {
    return (
        <div className='Logo'>
            <img className="logo_img" alt='logo' src={Logo_img}/>
            <p className='logo_p'>PAS</p>
        </div>
    );
};

export default Logo;