import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);


    useEffect(() => {
        fetch('/products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    const handleAddToCart = (product) =>{
        const tempCart = [...cartProducts, product];
        setCartProducts(tempCart);
    }



    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product product={product} key={product.key} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <Cart cartProducts={cartProducts}></Cart>
        </div>
    );
};

export default Shop;