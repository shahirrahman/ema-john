import React from 'react';
import logo from '../../images/logo.png';
import './HeaderPart.css'

const HeaderPart = () => {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Order</a>
                <a href="/inventory">Manage Inventorey</a>
            </nav>
        </header>
    );
};

export default HeaderPart;