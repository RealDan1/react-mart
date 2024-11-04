import { createSlice } from '@reduxjs/toolkit';
import airpodsImage from '../assets/images/airpodsImage.jpg';
import galaxyWatchImage from '../assets/images/galaxyWatchImage.jpg';
import jblSpeakerImage from '../assets/images/jblSpeakerImage.jpg';
import logitechMouseImage from '../assets/images/logitechMouseImage.jpg';
import sonyHeadphonesImage from '../assets/images/sonyHeadphonesImage.jpg';
import fitbitChargeImage from '../assets/images/fitbitChargeImage.jpg';
import powercoreImage from '../assets/images/powercoreImage.jpg';
import nulaxyStandImage from '../assets/images/nulaxyStandImage.jpg';
import kingstonFlashDriveImage from '../assets/images/kingstonFlashDriveImage.jpg';
import sandiskSSDImage from '../assets/images/sandiskSSDImage.jpg';
import canonPrinterImage from '../assets/images/canonPrinterImage.jpg';
import tplinkRouterImage from '../assets/images/tplinkRouterImage.jpg';
import surfacePenImage from '../assets/images/surfacePenImage.jpg';
import dellMonitorImage from '../assets/images/dellMonitorImage.jpg';
import seagateHDDImage from '../assets/images/seagateHDDImage.jpg';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [
            {
                title: 'Apple AirPods Pro',
                description: 'Noise-cancelling wireless earbuds',
                price: 4999.99,
                src: airpodsImage,
            },
            {
                title: 'Samsung Galaxy Watch 5',
                description: 'Smartwatch with fitness tracking',
                price: 6999.99,
                src: galaxyWatchImage,
            },
            {
                title: 'JBL Flip 5 Bluetooth Speaker',
                description: 'Portable waterproof speaker',
                price: 2499.99,
                src: jblSpeakerImage,
            },
            {
                title: 'Logitech MX Master 3 Mouse',
                description: 'Wireless ergonomic mouse',
                price: 1999.99,
                src: logitechMouseImage,
            },
            {
                title: 'Sony WH-1000XM4 Headphones',
                description: 'Wireless noise-cancelling over-ear headphones',
                price: 6499.99,
                src: sonyHeadphonesImage,
            },
            {
                title: 'Fitbit Charge 5',
                description: 'Advanced fitness and health tracker',
                price: 2999.99,
                src: fitbitChargeImage,
            },
            {
                title: 'Anker PowerCore 10000',
                description: 'Portable charger with 10000mAh capacity',
                price: 799.99,
                src: powercoreImage,
            },
            {
                title: 'Nulaxy Laptop Stand',
                description: 'Ergonomic aluminum laptop stand',
                price: 499.99,
                src: nulaxyStandImage,
            },
            {
                title: 'Kingston 128GB USB 3.0 Flash Drive',
                description: 'High-speed data transfer USB drive',
                price: 299.99,
                src: kingstonFlashDriveImage,
            },
            {
                title: 'Sandisk 1TB External SSD',
                description: 'Portable solid-state drive for fast data storage',
                price: 2999.99,
                src: sandiskSSDImage,
            },
            {
                title: 'Canon PIXMA G3411 Printer',
                description: 'All-in-one ink tank printer',
                price: 2499.99,
                src: canonPrinterImage,
            },
            {
                title: 'TP-Link Archer C6 Router',
                description: 'Dual-band Wi-Fi router with MU-MIMO',
                price: 999.99,
                src: tplinkRouterImage,
            },
            {
                title: 'Microsoft Surface Pen',
                description: 'Stylus for Surface devices',
                price: 1499.99,
                src: surfacePenImage,
            },
            {
                title: 'Dell 24-inch Monitor',
                description: 'Full HD LED monitor with thin bezels',
                price: 3499.99,
                src: dellMonitorImage,
            },
            {
                title: 'Seagate 2TB External Hard Drive',
                description: 'Portable HDD for data backup',
                price: 1499.99,
                src: seagateHDDImage,
            },
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
