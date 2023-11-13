// Modal.js

import React, {forwarRef, } from 'react';

const Modal = forwarRef({ cart, clearCart } => {
    let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setModalState(false);
      }
    }

  return (
    <div ref={wrapperRef} style={{width:"300px", height:"300px", border:"1px solid",}}>
      <div className="modal-content">
        <span className="clear" onClick={clearCart}>
          &times;
        </span>
        <h2>장바구니</h2>
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
    </div>
  );
});

export default Modal;
