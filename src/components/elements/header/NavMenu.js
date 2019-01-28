import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';

class NavMenu extends Component {
    state = {
        showMenu: false,
    };

    toggleMenu=()=>{
        !this.state.showMenu ? this.setState({showMenu: true}) : this.setState({showMenu: false});
        console.log(this.state.showMenu);
    };
    render() {
    return (
        <Fragment>
            <div className='NavMenu'>
                <button type='button' className='menu_btn' onClick={this.toggleMenu}>Menu</button>
                {<ul className={this.state.showMenu ? 'show' : 'menu_ul'}>
                    <li className='menu_li'><NavLink exact to="/">Главная</NavLink></li>
                    <li className='menu_li'><NavLink to="/catalog">Каталог оборудования</NavLink></li>
                    <li className='menu_li'><NavLink to="/advantage">Преимущество аренды</NavLink></li>
                    <li className='menu_li'><NavLink to="/delivery">Доставка</NavLink></li>
                </ul>}
            </div>

        </Fragment>
    );
    }
}

export default NavMenu;