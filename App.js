import React, { useState } from "react";
import "./App.css";
import MenuPage from "./MenuPage";
import Modal from './Modal';

function App() {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "음식 1",
      description: "맛있는 음식 1",
      price: 10,
      image: "food1.png",
    },
    {
      id: 2,
      name: "음식 2",
      description: "맛있는 음식 2",
      price: 15,
      image: "food2.png",
    },
    {
      id: 3,
      name: "음식 3",
      description: "맛있는 음식 3",
      price: 15,
      image: "food3.png",
    },

    // 나머지 음식들...
  ]);

  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 메뉴 담기 함수
  const addToCart = (itemId) => {
    // itemId에 해당하는 메뉴를 찾음
    const selectedItem = menuItems.find((item) => item.id === itemId);

    // 찾은 메뉴를 장바구니에 추가
    if (selectedItem) {
      setCart((prevCart) => [...prevCart, selectedItem]);
    }
  };

  const clearCart = () => {
    // 장바구니를 비우는 함수
    setCart([]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Good Field App</h1>
      </header>

      <main className="container">
        {/* 메뉴 페이지 */}
        <MenuPage menuItems={menuItems} addToCart={addToCart} />
        
        {/* 장바구니 버튼 또는 닫기 버튼 */}
        {isModalOpen ? (
          <button onClick={closeModal}>닫기</button>
        ) : (
          <button onClick={openModal}>장바구니</button>
        )}

        {/* 모달 */}
        {isModalOpen && <Modal cart={cart} closeModal={closeModal} clearCart={clearCart} />}
      </main>

      <footer className="footer">
        <p>© Good Field</p>
      </footer>
    </div>
  );
}
export default App;
