import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>the Road to React</p>
        <p className='product__price'>
          <small>$</small>
          <strong>27.65</strong>
        </p>
        <div className='product__rating'>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>

      <img src='https://m.media-amazon.com/images/I/31apmbgpwkL.jpg' alt='' />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
