import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import './Nav.css';
import logoImage from './images/logo.png';
import welcomeImage from './images/welcome.png';
import imageImage from './images/image.png';
import image1Image from './images/image1.png';
import image2Image from './images/image2.png';
import image3Image from './images/image3.png';
import image4Image from './images/image4.png';
import image5Image from './images/image5.png';
import image6Image from './images/image6.png';
import image7Image from './images/image7.png';
import image8Image from './images/image8.png';
import image9Image from './images/image9.png';



function BasicExample() {
  return (
    <div>
      <Navbar bg="light" className="navbar" expand="">
        <Container className="navbar-container">
          <Nav className="mr-auto nav-links">
            <Nav.Link as={Link} to="/auth/register">Admin</Nav.Link>
            <Nav.Link as={Link} to="/create-client">Client space</Nav.Link>
            <Nav.Link as={Link} to="/create-supplier">Supplier space</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/create-post">ajouter produit</Nav.Link>
          </Nav>
          <Image src={logoImage} alt="Logo" className="logo" />
        </Container>
      </Navbar>

      <Image src={welcomeImage} alt="Welcome" fluid />

      <div className="product-container">
        <div className="product">
         
          <div className="product-info">
          <div className="product-images-container">
      <Image src={image1Image} alt="img" className="img" />
    </div>
            <h3>Product 1</h3>
            <p>Price: 50 DNT</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          
          <div className="product-info">
          <div className="product-images-container">
          <Image src={image2Image} alt="img" className="img" />
    </div>
            <h3>Product 4</h3>
            <p>Price: 70 DNT</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="product-info">
          <div className="product-images-container">
          <Image src={image3Image} alt="img" className="img" />
    </div>
            <h3>Product 7</h3>
            <p>Price: 80 DNT</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="product">
          <div className="product-info">
          <div className="product-images-container">
          <Image src={image4Image} alt="img" className="img" />
    </div>
            <h3>Product 2</h3>
            <p>Price: 50 DNT</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="product-info">
          <div className="product-images-container">
          <Image src={image5Image} alt="img" className="img" />
    </div>
            <h3>Product 5</h3>
            <p>Price: 70 DNT</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="product-info">
          <div className="product-images-container">
          <Image src={image6Image} alt="img" className="img" />
    </div>
            <h3>Product 9</h3>
            <p>Price: 80 DNT</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="product">
          <div className="product-info">
          <div className="product-images-container">
            <Image src={image7Image} alt="img" className="img" />
    </div>
            <h3>Product 3</h3>
            <p>Price: 50 DNT</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="product-info">
          <div className="product-images-container">
          <Image src={image8Image} alt="img" className="img" />
    </div>
            <h3>Product 6</h3>
            <p>Price: 70 DNT</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="product-info">
          <div className="product-images-container">
          <Image src={image9Image} alt="img" className="img" />
    </div>
            <h3>Product 10</h3>
            <p>Price: 70 DNT</p>
            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

         
      </div>

      <div className="bottom-image-container">
        <img src={imageImage} alt="imag" className="bottom-image" />
      </div>
    </div>
  );
}

export default BasicExample;
