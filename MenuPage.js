// MenuPage.js

import React from 'react';
import MenuItem from './MenuItem';
import './index.css';

const MenuPage = ({ menuItems, addToCart }) => {
  return (
    <div className="menu-page">
      <h1>메뉴</h1>
      <div className="menu-items">
        {menuItems && menuItems.map((item) => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};


export default MenuPage;
