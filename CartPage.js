// CartPage.js

import React from 'react';

const CartPage = ({ cart, clearCart }) => {
  return (
    <div className="cart-page">
      <h1>장바구니</h1>
      {cart.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>장바구니 비우기</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;