import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // import Provider from react-redux
import store from './store/store'; // import the Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            {' '}
            {/* !!!!!!!!!!!!!!!!!! provider wraps the whole app to provide access to redux store */}
            <BrowserRouter>
                {' '}
                {/* BrowserRouter enables routing in our app */}
                <App /> {/* main app component that includes all pages */}
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// Measuring performance - optional for analytics
reportWebVitals();
