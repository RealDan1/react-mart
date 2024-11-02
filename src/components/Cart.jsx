// !!!!!!!!!!!!!!!!!! cart component to show items added to the cart

import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

export default function Cart() {
    const cartItems = useSelector((state) => state.cart.cart); // get cart items from redux

    return (
        <div className="cart text-light">
            <h2>Shopping Cart</h2> {/* cart header */}
            {cartItems.length === 0 ? (
                <p>No items in cart</p> // show if cart is empty
            ) : (
                cartItems.map((item, index) => (
                    <Card key={index} className="cart-item" style={{ marginBottom: '10px', backgroundColor: '#444' }}>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title> {/* title */}
                            <Card.Text>Price: R{item.price}</Card.Text> {/* price */}
                        </Card.Body>
                    </Card>
                ))
            )}
        </div>
    );
}
