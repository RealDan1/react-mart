import { createSlice } from '@reduxjs/toolkit';
import beltImage from '../assets/images/belt.jpeg';
import dressImage from '../assets/images/dress.jpeg';
import sneakersImage from '../assets/images/sneakers.jpeg';
import shirtImage from '../assets/images/shirt.jpeg';
import jacketImage from '../assets/images/jacket.jpg';
import jeansImage from '../assets/images/jeans.jpeg';
import sunglassesImage from '../assets/images/sunglasses.jpg';
import watchImage from '../assets/images/watch.jpeg';
import socksImage from '../assets/images/socks.jpeg';
import hatImage from '../assets/images/hat.jpeg';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [
            {
                title: 'Sneakers',
                description: 'Running Sneakers',
                price: 999.99,

                src: sneakersImage,
            },
            {
                title: 'T-shirt',
                description: 'Cotton T-shirt',
                price: 199.99,

                src: shirtImage,
            },
            {
                title: 'Jacket',
                description: 'Leather Jacket',
                price: 1499.99,

                src: jacketImage,
            },
            {
                title: 'Jeans',
                description: 'Denim Jeans',
                price: 799.99,
                src: jeansImage,
            },
            { title: 'Hat', description: 'Wool Hat', price: 249.99, color: ['red', 'navy', 'beige'], src: hatImage },
            {
                title: 'Socks',
                description: 'Cotton Socks',
                price: 59.99,
                src: socksImage,
            },
            { title: 'Dress', description: 'Silk Dress', price: 1299.99, src: dressImage },
            {
                title: 'Watch',
                description: 'Analog Wrist Watch',
                price: 4999.99,

                src: watchImage,
            },
            {
                title: 'Sunglasses',
                description: 'Polarized Sunglasses',
                price: 899.99,

                src: sunglassesImage,
            },
            { title: 'Belt', description: 'Leather Belt', price: 299.99, src: beltImage },
        ],
        cart: [], // initially, cart is empty
    },
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload); // add item
        },
        clearCart: (state) => {
            state.cart = []; // clear all items
        },
    },
});

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
