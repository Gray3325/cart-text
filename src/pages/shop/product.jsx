import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  // 商品數量
  const cartItemsAmount = cartItems[id];
  return (
    <div className='product' >
      <img src={productImage} alt='' />
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <b>${price}</b>
        </p>
      </div>
      <button className='addToCartBtn' onClick={() => addToCart(id)}>
        Add To Cart {cartItemsAmount > 0 && <> ({cartItemsAmount}) </>}
      </button>
    </div>
  );
};
