import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
    const { currentUser, isLoggedIn } = useSelector((state) => state.user); // get current user and login state from Redux

    //Add footer

    return (
        <header className="header">
            <div className="logo-user">
                <h1 className="logo">ReactMart</h1>
                {isLoggedIn && currentUser && <p className="user">User: {currentUser.username}</p>}{' '}
            </div>

            {/* show welcome and username if user is logged in */}
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
                    <li>
                        <Link to="/cart">cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
