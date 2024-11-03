import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

export default function Cart() {
    const cartItems = useSelector((state) => state.cart.cart); // get cart items from redux

    let totalPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
        // Loop through each item in the cartItems array
        totalPrice += cartItems[i].price; // Add the price of each item to totalPrice
    }

    // Round totalPrice to nearest two decimals
    totalPrice = Math.round(totalPrice * 100) / 100;

    return (
        <div className="cart text-light">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <>
                    {cartItems.map((item, index) => (
                        <Card
                            key={index}
                            className="cart-item"
                            style={{ marginBottom: '10px', backgroundColor: '#444' }}
                        >
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>Price: R{item.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                    <br />
                    {totalPrice > 0 && (
                        <div className="total-price" style={{ marginTop: '20px', color: '#fff' }}>
                            {' '}
                            <h2>Total Price: R{totalPrice}</h2>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
