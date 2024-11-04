import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import DeliveryModal from './DeliveryModal';

function Cart() {
    const cartItems = useSelector((state) => state.cart.cart); // get cart items from redux
    const [shipmentMethod, setShipmentMethod] = useState(''); // state for selected shipment method
    const [showModal, setShowModal] = useState(false); // state for controlling the modal visibility

    let totalPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
        // loop through each item in the cartItems array
        totalPrice += cartItems[i].price; // Add the price of each item to totalPrice
    }

    // round totalPrice to nearest two decimals
    totalPrice = Math.round(totalPrice * 100) / 100;

    const handleShipmentChange = (e) => {
        setShipmentMethod(e.target.value);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <>
                    {cartItems.map((item, index) => (
                        <Card key={index} className="cart-item">
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>Price: R{item.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                    {totalPrice > 0 && (
                        <div className="total-price">
                            <h2>Total Price: R{totalPrice}</h2>
                        </div>
                    )}

                    {/* shipment selection */}
                    {cartItems.length > 0 && (
                        <div className="shipment-section">
                            <h3>Choose Your Shipment Method</h3>
                            <select value={shipmentMethod} onChange={handleShipmentChange} className="shipment-select">
                                <option value="">Select a method</option>
                                <option value="standard">Standard: R100</option>
                                <option value="expedited">Expedited: R150</option>
                                <option value="nextDay">Next Day: R200 (when available)</option>
                            </select>
                            <Button variant="info" className="help-button" onClick={toggleModal}>
                                Help
                            </Button>
                        </div>
                    )}

                    {/* modal for shipment help */}
                    {showModal && <DeliveryModal onClose={toggleModal} />}
                </>
            )}
        </div>
    );
}

export default Cart;
