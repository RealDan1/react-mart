import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [
            {
                username: 'JamesMay', // hardcoded email
                password: '12345', // hardcoded password
            },
        ],
        isLoggedIn: false, // login state
        currentUser: null, // stores currently logged-in user info
    },
    reducers: {
        login: (state, action) => {
            const { username, password } = action.payload; // payload contains the username and password
            const foundUser = state.users.find((user) => user.username === username && user.password === password); // checks if the entered credentials match any in the Redux store

            if (foundUser) {
                state.isLoggedIn = true; // login successful, set isLoggedIn to true
                state.currentUser = foundUser; // set the logged-in user details
            } else {
                alert('Invalid credentials'); // alert user if login fails
            }
        },
        logout: (state) => {
            state.isLoggedIn = false; // reset login state
            state.currentUser = null; // clear current user info on logout
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
