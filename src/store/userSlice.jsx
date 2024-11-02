// !!!!!!!!!!!!!!!!!! create a redux slice to store the username and login state so we can use it across different pages
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user', // slice name for identifying
    initialState: { username: '', isLoggedIn: false }, // initial values, blank username and login state false
    reducers: {
        login: (state, action) => {
            const { username } = action.payload; // grab the username from action payload
            state.username = username; // save username in redux state so it can be accessed anywhere
            state.isLoggedIn = true; // set login state to true because user has logged in
        },
        logout: (state) => {
            state.username = ''; // clear username when user logs out
            state.isLoggedIn = false; // reset login state to false so the user isn’t logged in anymore
        },
    },
});

export const { login, logout } = userSlice.actions; // exporting actions so we can dispatch them in components
export default userSlice.reducer; // exporting the reducer to use in our store
