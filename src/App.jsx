import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Products from './components/Products';
import About from './components/About';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function App() {
  let [totalPrice, setTotalPrice] = useState(0);

  //parent app.jsx will hand down a handleTotal function to children and then in turn will display the total price data consistently across tabs (using useState)
  function handleTotal(price) {
    // round total to nearest 2 decimals
    setTotalPrice(Math.round((totalPrice += price) * 100) / 100);
  }
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/products"
          element={
            //hand down function and total to children
            <Products handleTotal={handleTotal} totalPrice={totalPrice} />
          }
        />
        <Route path="/about" element={<About totalPrice={totalPrice} />} />
      </Routes>
    </div>
  );
}

export default App;
