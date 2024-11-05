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
            <div className="left-section">
                <section className="reactmart-summary">
                    <h2>Welcome to ReactMart</h2>
                    <p>
                        Based in Cape Town, South Africa, ReactMart is your premier online destination for quality
                        electronics and lifestyle products. We pride ourselves on a curated selection of the latest
                        gadgets, top-notch customer service, and lightning-fast delivery. ReactMart has you covered.
                    </p>
                </section>

                <section className="customer-reviews">
                    <h2>What Our Customers Are Saying</h2>
                    <div className="review">
                        <p>
                            <i>
                                "Fantastic service! My order arrived in just two days, and the quality of the products
                                is top-notch."
                            </i>{' '}
                            - Sarah M.
                        </p>
                    </div>
                    <div className="review">
                        <p>
                            <i>
                                "I love ReactMart’s selection. They always have the latest tech, and their customer
                                service is outstanding!"
                            </i>{' '}
                            - Jason K.
                        </p>
                    </div>
                    <div className="review">
                        <p>
                            <i>"Support this local business! The shopping experience is so smooth and reliable."</i> -
                            Megan R.
                        </p>
                    </div>
                </section>
            </div>

            {/* login container on the right - only displayed if logged in*/}
            {isLoggedIn ? (
                <div className="welcome-paragraph">
                    <h1>Welcome {currentUser.username}</h1>
                </div>
            ) : (
                <div className="login-container">
                    {/* else show login if not logged in */}
                    <label htmlFor="login-input-username">Username:</label> {/* input for user username */}
                    <input
                        id="login-input-username"
                        type="text"
                        value={userInputUsername}
                        onChange={(e) => setUserInputUsername(e.target.value)} // update state with entered username
                    />
                    <label htmlFor="login-input-password">Password:</label>
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
                </div>
            )}
        </div>
    );
}

export default Home;
