import React, { useState,useContext } from 'react';
import '@styles/Header.scss'
import Menu from '@components/Menu'
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shoppingCard from '@icons/icon_shopping_cart.svg'
import MyOrder from '@containers/MyOrders'
import MobileMenu from '@components/MobileMenu'
import AppContext from '../context/AppContext';
const Header = () => {
    const [toggle, setToggle] = useState(false);
    //const [toggleOrders ,setToggleOrders] = useState(false);
    const handleClick = () => {
        setToggle(!toggle)
    }
    const {state , clickShowMenu,showMenu,toggleOrders,clickShowOrders} = useContext(AppContext)
    return (
        <nav>
            <img src={menu} 
            alt="menu"
            className="menu"
            onClick={()=>clickShowMenu()}
            />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li
                        className="navbar-email"
                        onClick={handleClick}
                    >
                        platzi@example.com
                    </li>
                    <li
                    className="navbar-shopping-cart"
                    onClick={()=>clickShowOrders()}
                    >
                        <img src={shoppingCard} alt="shopping cart" />
                        {state.cart.length >0 ? <div>{state.cart.length}</div> :null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu/>}
            {showMenu && <MobileMenu/>}
            {toggleOrders && <MyOrder />}
        </nav>
    );
};

export default Header;