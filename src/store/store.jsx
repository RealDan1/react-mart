// !!!!!!!!!!!!!!!!!! this file sets up and exports the redux store

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // import the user slice reducer
import cartReducer from './cartSlice'; // import the cart slice reducer

const store = configureStore({
    reducer: {
        user: userReducer, // handle user state
        cart: cartReducer, // handle cart state
    },
});

export default store; // export the configured store
