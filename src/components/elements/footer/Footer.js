import React from 'react';
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