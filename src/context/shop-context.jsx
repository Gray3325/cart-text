import React, { createContext, useState } from "react";
import { PRODUCTS } from "../product";

export const ShopContext = createContext(null);

// 設定購物車的預設值
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // 算出總金額
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
        }
    }
    return totalAmount;
  };

  // 把原本的品項加一並加入購物車
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // 把原本的品項減一並移出購物車
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updatecartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updatecartItemCount,
    getTotalCartAmount
  };
  //   console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
