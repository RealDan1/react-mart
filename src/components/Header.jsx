// !!!!!!!!!!!!!!!!!! header component to show logo, nav links, and display username when logged in

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
    const { username, isLoggedIn } = useSelector((state) => state.user); // get username and login state from redux

    return (
        <header className="header">
            <h1 className="logo">shopMate</h1> {/* simple logo for the app */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/register">register</Link>
                    </li>
                    <li>
                        <Link to="/products">products</Link>
                    </li>
                </ul>
            </nav>
            {isLoggedIn && <p>welcome, {username}</p>} {/* show welcome and username if user is logged in */}
        </header>
    );
}
