import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, price, stock, star, seller} = props.product;
    return (
        <div className="single-product">
            <div className="img-div">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                <h4>By: {seller}</h4>
                <h2>${price}</h2>
                <p>Rating: {star}</p>
                <p>Only {stock} left in stock</p>
                <button className="btn-generic">🛒Add to cart</button>
            </div>
        </div>
    );
};

export default Product;