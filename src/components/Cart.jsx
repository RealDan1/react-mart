import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

export default function Cart() {
    const cartItems = useSelector((state) => state.cart.cart); // get cart items from redux

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="cart text-light">
            <h2>Shopping Cart</h2> {/* cart header */}
            {cartItems.length === 0 ? (
                <p>No items in cart</p> // show if cart is empty
            ) : (
                <>
                    {cartItems.map((item, index) => (
                        <Card
                            key={index}
                            className="cart-item"
                            style={{ marginBottom: '10px', backgroundColor: '#444' }}
                        >
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title> {/* title */}
                                <Card.Text>Price: R{item.price}</Card.Text> {/* price */}
                            </Card.Body>
                        </Card>
                    ))}
                    <br />
                    {totalPrice > 0 && (
                        <div className="total-price" style={{ marginTop: '20px', color: '#fff' }}>
                            {' '}
                            {/* !!CHANGE!! add total price display inside cart */}
                            <h2>Total Price: R{totalPrice}</h2>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
