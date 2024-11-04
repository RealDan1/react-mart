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
            <Header />
            <Cart />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </div>
    );
}

export default App;
