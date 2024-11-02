import React from 'react';
import TotalPrice from './TotalPrice';
import Figure from 'react-bootstrap/Figure';
import logoImage from '../assets/images/logo.jpeg';

export default function About({ totalPrice }) {
  return (
    <div className="about">
      <TotalPrice totalPrice={totalPrice} />

      <Figure>
        <Figure.Image width={171} height={180} alt="171x180" src={logoImage} />
        <Figure.Caption>
          <p>
            Welcome to Asoka, where we offer a curated selection of stylish and
            high-quality apparel, accessories, and footwear for any occasion.
            From comfortable cotton T-shirts and durable denim jeans to elegant
            dresses and premium sneakers, our products are designed with both
            fashion and function in mind. Browse our diverse range of colors and
            styles, and find the perfect match for your personal taste.
          </p>

          <p>
            Contact Information: If you have any questions or inquiries, feel
            free to reach out to us at:
            <div className="contact-div">
              <ul className="contact-ul">
                <li className="contact-li">Email: contact@asoka.com</li>
                <li className="contact-li">Phone: +27 123 456 789</li>
                <li className="contact-li">
                  Location: Cape Town, South Africa
                </li>
              </ul>
            </div>
          </p>
        </Figure.Caption>
      </Figure>
    </div>
  );
}
