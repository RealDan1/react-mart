# ReactMart

ReactMart is an e-commerce web application built with React. The app lets users browse products, add them to their cart, choose a shipment method, and register or log in. It’s designed for a smooth and intuitive shopping experience.

## Getting Started

1. **Install dependencies**:
   Make sure to install the required dependencies in bash.

    npm install

2. **Run the server**:
   Start the node server in bash

    npm start

## Using the App

-   **Browse Products**:
    Visit the "Products" page to see a list of available items. Each product shows its title, price, and description. Add items to your cart with the “Add to Cart” button.

-   **Shopping Cart**:
    Access your cart through the “Cart” page. It functions as a regular cart, and you can view the total at the bottom. You can also choose your preferred shipment method.

-   **Register/Login**:
    For a customized experience, you can register or log in with a username and password. The login form is pre-filled with a sample account: `Username: JamesMay`, `Password: 12345`.

## Technologies Used

-   **Redux**:
    Manages the global state of the cart and user information, making it easy to add or remove items from the cart and to handle user login status across components.

-   **Formik**:
    Used for validating the registration form, ensuring that user inputs meet specific criteria for names, email, and password.

-   **Bootstrap**:
    Provides styling and layout for the components, giving ReactMart a clean and responsive design.
