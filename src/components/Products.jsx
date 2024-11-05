import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { Card, Button, CardGroup } from 'react-bootstrap';

function Products() {
    const dispatch = useDispatch(); // useDispatch to add items to cart
    const products = useSelector((state) => state.cart.products); // get products from redux state

    function handleAddToCart(item) {
        dispatch(addItem(item)); // dispatch item to redux cart
    }

    return (
        <div className="products">
            <CardGroup className="card-group">
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
                            // had to add inline styles to override bootstrap defaults
                        />{' '}
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>Price: R{item.price}</Card.Text>
                            <Card.Text>{item.description}</Card.Text>
                            <Button variant="primary" onClick={() => handleAddToCart(item)}>
                                Add to Cart
                            </Button>{' '}
                        </Card.Body>
                    </Card>
                ))}
            </CardGroup>
        </div>
    );
}

export default Products;
