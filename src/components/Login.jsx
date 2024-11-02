// !!!!!!!!!!!!!!!!!! home component with login form that uses redux for persisting login

import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/userSlice';

export default function Home() {
    const dispatch = useDispatch(); // allows dispatching actions to redux store
    const { isLoggedIn, username } = useSelector((state) => state.user); // get login state and username from redux
    const inputRef = useRef(); // reference to focus input on load
    const [userInput, setUserInput] = useState(''); // local state to store user input
    const validUsers = { email: 'user@example.com', password: 'password123' }; // hardcoded valid user credentials

    useEffect(() => {
        inputRef.current.focus(); // focus input on load
    }, []);

    const handleLogin = () => {
        if (userInput === validUsers.email) {
            // checks if input matches the valid email
            dispatch(login({ username: 'johnDoe' })); // dispatch login with a fixed username for now
        } else {
            alert('invalid login'); // shows alert if login fails
        }
    };

    return (
        <div className="home">
            {isLoggedIn ? (
                <div className="welcome-paragraph">
                    <h1>Welcome {username}</h1> {/* display welcome message when logged in */}
                </div>
            ) : (
                <div className="login-container">
                    <label htmlFor="login-input">user (email): </label> {/* input for user email */}
                    <input
                        id="login-input"
                        type="text"
                        value={userInput}
                        ref={inputRef}
                        onChange={(e) => setUserInput(e.target.value)} // sets input value to state
                    />
                    <button onClick={handleLogin}>login</button> {/* button to login user */}
                    <p>valid user email: {validUsers.email}</p> {/* displays valid email for easy testing */}
                </div>
            )}
        </div>
    );
}
