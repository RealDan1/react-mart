// !!!!!!!!!!!!!!!!!! products component to display all products and add to cart using redux

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { Card, Button, CardGroup } from 'react-bootstrap';
import DropDown from './DropDown';

function Products() {
    const dispatch = useDispatch(); // useDispatch to add items to cart
    const products = useSelector((state) => state.cart.products); // get products from redux state

    function handleAddToCart(item) {
        dispatch(addItem(item)); // dispatch item to redux cart
    }

    return (
        <div className="products">
            <CardGroup>
                {products.map((item) => (
                    <Card
                        key={item.title}
                        className="product-card text-light"
                        style={{ width: '18rem', backgroundColor: '#333' }}
                    >
                        <Card.Img
                            variant="top"
                            src={item.src}
                            alt={`${item.title} image`}
                            style={{ maxWidth: '100%', maxHeight: 'auto' }}
                        />{' '}
                        {/* product image */}
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title> {/* product title */}
                            <Card.Text>Price: R{item.price}</Card.Text> {/* price */}
                            <Card.Text>{item.description}</Card.Text> {/* description */}
                            <DropDown color1={item.color[0]} color2={item.color[1]} color3={item.color[2]} />{' '}
                            {/* color dropdown */}
                            <Button variant="primary" onClick={() => handleAddToCart(item)}>
                                Add to Cart
                            </Button>{' '}
                            {/* add to cart */}
                        </Card.Body>
                    </Card>
                ))}
            </CardGroup>
        </div>
    );
}

export default Products;
