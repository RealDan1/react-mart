// !!!!!!!!!!!!!!!!!! redux slice to handle all products and the cart

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

const initialState = {
    products: [
        {
            title: 'Sneakers',
            description: 'Running Sneakers',
            price: 999.99,
            color: ['black', 'white', 'red'],
            src: sneakersImage,
        },
        {
            title: 'T-shirt',
            description: 'Cotton T-shirt',
            price: 199.99,
            color: ['blue', 'gray', 'green'],
            src: shirtImage,
        },
        {
            title: 'Jacket',
            description: 'Leather Jacket',
            price: 1499.99,
            color: ['brown', 'black', 'tan'],
            src: jacketImage,
        },
        {
            title: 'Jeans',
            description: 'Denim Jeans',
            price: 799.99,
            color: ['blue', 'black', 'gray'],
            src: jeansImage,
        },
        { title: 'Hat', description: 'Wool Hat', price: 249.99, color: ['red', 'navy', 'beige'], src: hatImage },
        {
            title: 'Socks',
            description: 'Cotton Socks',
            price: 59.99,
            color: ['white', 'black', 'gray'],
            src: socksImage,
        },
        { title: 'Dress', description: 'Silk Dress', price: 1299.99, color: ['red', 'black', 'gold'], src: dressImage },
        {
            title: 'Watch',
            description: 'Analog Wrist Watch',
            price: 4999.99,
            color: ['silver', 'gold', 'black'],
            src: watchImage,
        },
        {
            title: 'Sunglasses',
            description: 'Polarized Sunglasses',
            price: 899.99,
            color: ['black', 'brown', 'gray'],
            src: sunglassesImage,
        },
        { title: 'Belt', description: 'Leather Belt', price: 299.99, color: ['black', 'brown', 'tan'], src: beltImage },
    ],
    cart: [], // initially, cart is empty
};

const cartSlice = createSlice({
    name: 'cart', // identifies the slice in redux store
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload); // add item to cart
        },
        clearCart: (state) => {
            state.cart = []; // clear all items in cart
        },
    },
});

export const { addItem, clearCart } = cartSlice.actions; // actions to add or clear cart items
export default cartSlice.reducer; // reducer for redux store
