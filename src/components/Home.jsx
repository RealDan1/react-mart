import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/userSlice';

function Home() {
    const dispatch = useDispatch();
    const { isLoggedIn, currentUser } = useSelector((state) => state.user); // get login state and user info from Redux

    const [userInputUsername, setUserInputUsername] = useState(''); // state for username input
    const [userInputPassword, setUserInputPassword] = useState(''); // state for password input

    const handleLogin = () => {
        // dispatch login with entered username and password
        dispatch(login({ username: userInputUsername, password: userInputPassword }));
    };

    return (
        <div className="home">
            {isLoggedIn ? (
                <div className="welcome-paragraph">
                    <h1>Welcome {currentUser.username}</h1> {/* display welcome message when logged in */}
                </div>
            ) : (
                <div className="login-container">
                    <label htmlFor="login-input-username">Username:</label> {/* input for user username */}
                    <input
                        id="login-input-username"
                        type="text"
                        value={userInputUsername}
                        onChange={(e) => setUserInputUsername(e.target.value)} // update state with entered username
                    />
                    <label htmlFor="login-input-password">Password:</label> {/* input for password */}
                    <input
                        id="login-input-password"
                        type="password"
                        value={userInputPassword}
                        onChange={(e) => setUserInputPassword(e.target.value)} // update state with entered password
                    />
                    <button onClick={handleLogin} className="login-button">
                        Login
                    </button>
                    <p>
                        <i>Use "JamesMay" / "12345" for login</i>
                    </p>{' '}
                    {/* Display valid credentials for testing */}
                </div>
            )}
        </div>
    );
}
export default Home;
