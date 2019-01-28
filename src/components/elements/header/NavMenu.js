import React from 'react';
import './header_css/NavMenu.css';
import {NavLink} from 'react-router-dom';


const NavMenu = (props) => {
    return (
        <div className='NavMenu'>
            <ul className="menu_ul">
                    <li className='menu_li' ><NavLink to="/">Главная</NavLink></li>
                    <li className='menu_li' ><NavLink to="/catalog">Каталог оборудования</NavLink></li>
                    <li className='menu_li' ><NavLink to="/advantage">Преимущество аренды</NavLink></li>
                    <li className='menu_li' ><NavLink to="/delivery">Доставка</NavLink></li>
            </ul>
        </div>
    );
};

export default NavMenu;