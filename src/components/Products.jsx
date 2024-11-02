import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DropDown from './DropDown';
import CardGroup from 'react-bootstrap/CardGroup';
import beltImage from '../assets/images/belt.jpeg';
import dressImage from '../assets/images/dress.jpeg';
import sneakersImage from '../assets/images/sneakers.jpeg';
import shirtImage from '../assets/images/shirt.jpeg';
import jacketImage from '../assets/images/jacket.jpg';
import jeansImage from '../assets/images/jeans.jpeg';
import sunglassesImage from '../assets/images/sunglasses.jpg';
import watchImage from '../assets/images/watch.jpeg';
import socksImage from '../assets/images/socks.jpeg';
import hatImage from '../assets/images/hat.jpeg';
import TotalPrice from './TotalPrice';

function Products({ handleTotal, totalPrice }) {
  let productData = [
    {
      title: 'Sneakers',
      description: 'Running Sneakers',
      price: 999.99,
      color: ['black', 'white', 'red'],
      src: sneakersImage,
    },
    {
      title: 'T-shirt',
      description: 'Cotton T-shirt',
      price: 199.99,
      color: ['blue', 'gray', 'green'],
      src: shirtImage,
    },
    {
      title: 'Jacket',
      description: 'Leather Jacket',
      price: 1499.99,
      color: ['brown', 'black', 'tan'],
      src: jacketImage,
    },
    {
      title: 'Jeans',
      description: 'Denim Jeans',
      price: 799.99,
      color: ['blue', 'black', 'gray'],
      src: jeansImage,
    },
    {
      title: 'Hat',
      description: 'Wool Hat',
      price: 249.99,
      color: ['red', 'navy', 'beige'],
      src: hatImage,
    },
    {
      title: 'Socks',
      description: 'Cotton Socks',
      price: 59.99,
      color: ['white', 'black', 'gray'],
      src: socksImage,
    },
    {
      title: 'Dress',
      description: 'Silk Dress',
      price: 1299.99,
      color: ['red', 'black', 'gold'],
      src: dressImage,
    },
    {
      title: 'Watch',
      description: 'Analog Wrist Watch',
      price: 4999.99,
      color: ['silver', 'gold', 'black'],
      src: watchImage,
    },
    {
      title: 'Sunglasses',
      description: 'Polarized Sunglasses',
      price: 899.99,
      color: ['black', 'brown', 'gray'],
      src: sunglassesImage,
    },
    {
      title: 'Belt',
      description: 'Leather Belt',
      price: 299.99,
      color: ['black', 'brown', 'tan'],
      src: beltImage,
    },
  ];

  // bootstrap cards with variable item, color, price, image and title etc based on the productData object
  return (
    <div className="products">
      <ul>
        <CardGroup>
          {productData.map((item) => {
            return (
              <li key={item.title}>
                <Card className="product-card" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.src} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      Price: R{item.price}
                      <br />
                      Description:
                      {item.description}
                    </Card.Text>
                    <DropDown
                      color1={item.color[0]}
                      color2={item.color[1]}
                      color3={item.color[2]}
                    />
                    <Button
                      variant="primary"
                      onClick={() => {
                        handleTotal(item.price);
                      }}
                    >
                      Buy
                    </Button>
                  </Card.Body>
                </Card>
              </li>
            );
          })}
        </CardGroup>
      </ul>
      <TotalPrice totalPrice={totalPrice} />
    </div>
  );
}

export default Products;
