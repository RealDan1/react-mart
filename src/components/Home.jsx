import React from 'react';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  //auto focus the user input
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //declare user and loggedIn state variables
  const [user, setUser] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //change login state so the component re-renders and loads the welcome
  const handleLogin = () => {
    if (user !== '') {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    //just change the value to false and the ternary will just switch to the other statement (result: the user has log back in to see the welcome)
    setIsLoggedIn(false);
    //reset userName since user must type it in again(so it doesn't persist upon logout)
    setUser('');
  };

  return (
    // only display the Welcome if user has clicked login and entered a value into input field
    <div className="home">
      {isLoggedIn && user !== '' ? (
        <div className="welcome-paragraph">
          <h1>Welcome {user} </h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="login-container">
          <label htmlFor="login-input">User: </label>
          <input
            id="login-input"
            type="text"
            value={user}
            ref={inputRef}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
