import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [matchedData, setMatchedData] = useState(products);


    useEffect(() => {
        fetch('/products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setMatchedData(data)
            })
    }, [])

    const handleAddToCart = (product) => {
        const tempCart = [...cartProducts, product];
        setCartProducts(tempCart);
    }

    const handleSearch = event => {
       const searchText = event.target.value;
       if (!searchText) {
           return;
       }
       const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
       setMatchedData(matchedProducts);
    }


    return (
        <>
            <div className="search-container">
                <input onChange={handleSearch} type="text" placeholder="🔍 Search your text here" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        matchedData.map(product => <Product product={product} key={product.key} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <Cart cartProducts={cartProducts}></Cart>
            </div>
        </>
    );
};

export default Shop;