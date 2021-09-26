import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cartProducts } = props;
    let total = 0;
    let shippingCost = 0;
    for (const product of cartProducts) {
        total = total + product.price;
        shippingCost = shippingCost + product.shipping;
    }

    const beforeTax = total + shippingCost;
    const tax = beforeTax * .10;
    const grandTotal = beforeTax + tax;

    return (
        <div className="cart">
            <h2>Order Summary:</h2>
            <h3>Items Ordered: ${cartProducts.length}</h3>
            <br />
            <div className="costs">
                <p>Cost of Items: ${total.toFixed(2)}</p>
                <p>Shipping: ${shippingCost.toFixed(2)}</p>
                <p>Before Tax: ${beforeTax.toFixed(2)}</p>
                <p>Tax(10%): ${beforeTax.toFixed(2)}</p>
                <p>Grand Total: ${grandTotal.toFixed(2)}</p>
                
            </div>
        </div>
    );
};

export default Cart;