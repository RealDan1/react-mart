// !!!!!!!!!!!!!!!!!! main app component to show header, cart, and routes for each page

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import Products from './components/Products';
import Cart from './components/Cart';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header /> {/* displays the header at the top of every page */}
            <Cart /> {/* displays cart to show items added across pages */}
            <Routes>
                <Route path="/" element={<Home />} /> {/* home page route */}
                <Route path="/register" element={<Register />} /> {/* register page route */}
                <Route path="/products" element={<Products />} /> {/* products page route */}
            </Routes>
        </div>
    );
}

export default App;
