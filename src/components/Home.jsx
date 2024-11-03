import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/userSlice';

export default function Home() {
    const dispatch = useDispatch(); // allows dispatching actions to Redux store
    const { isLoggedIn, currentUser } = useSelector((state) => state.user); // get login state and user info from Redux

    const [userInputEmail, setUserInputEmail] = useState(''); // state for email input
    const [userInputPassword, setUserInputPassword] = useState(''); // state for password input

    const handleLogin = () => {
        // dispatch login with entered username and password
        dispatch(login({ username: userInputEmail, password: userInputPassword }));
    };

    return (
        <div className="home">
            {isLoggedIn ? (
                <div className="welcome-paragraph">
                    <h1>Welcome {currentUser.username}</h1> {/* display welcome message when logged in */}
                </div>
            ) : (
                <div className="login-container">
                    <label htmlFor="login-input-email">Email:</label> {/* input for user email */}
                    <input
                        id="login-input-email"
                        type="text"
                        value={userInputEmail}
                        // ref={inputRef}
                        onChange={(e) => setUserInputEmail(e.target.value)} // update state with entered email
                    />
                    <label htmlFor="login-input-password">Password:</label> {/* input for password */}
                    <input
                        id="login-input-password"
                        type="password"
                        value={userInputPassword}
                        onChange={(e) => setUserInputPassword(e.target.value)} // update state with entered password
                    />
                    <button onClick={handleLogin}>Login</button> {/* button to trigger login */}
                    <p>Use "jamesmay@topgear.com" / "12345" for login</p> {/* Display valid credentials for testing */}
                </div>
            )}
        </div>
    );
}
