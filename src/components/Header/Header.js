import React from 'react';
import logo from '../../images/infinity-removebg-preview.png';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    <a href="/shop">Shop</a>
                    <a href="/orders">Orders</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;