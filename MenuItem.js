// MenuItem.js

import React from 'react';

const MenuItem = ({ item, addToCart }) => {
  const { id, name, description, price, image } = item;

  return (
    <div className="menu-item">
      <img src={image} alt={name} className="menu-item-image" />
      <div className="menu-item-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="price">${price}</p>
        <button onClick={() => addToCart(id)}>메뉴 담기</button>
      </div>
    </div>
  );
};

export default MenuItem;
