import React from 'react';
import './footer_css/Footer.css';
import RightColumn from "./RightColumn";
import MiddleColumn from "./MidleColumn";
import LeftColumn from "./LeftColumn";

const Footer = () => {
    return (
        <div className='footer'>
            <LeftColumn/>
            <MiddleColumn/>
            <RightColumn/>
        </div>
    );
};

export default Footer;