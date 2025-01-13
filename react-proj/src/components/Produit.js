// Product.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
 

const products = [
    { id: 1, name: 'Product 1', description: 'Description of product 1', imageUrl: 'https://via.placeholder.com/300x200' },
    { id: 2, name: 'Product 2', description: 'Description of product 2', imageUrl: 'https://via.placeholder.com/300x200' },
    { id: 3, name: 'Product 3', description: 'Description of product 3', imageUrl: 'https://via.placeholder.com/300x200' },
    { id: 4, name: 'Product 4', description: 'Description of product 4', imageUrl: 'https://via.placeholder.com/300x200' },
    { id: 5, name: 'Product 5', description: 'Description of product 5', imageUrl: 'https://via.placeholder.com/300x200' },
    { id: 6, name: 'Product 6', description: 'Description of product 6', imageUrl: 'https://via.placeholder.com/300x200' }
];

const Product = () => {
    const { id } = useParams();
    const product = products.find(p => p.id.toString() === id);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <Container>
            <h1 className="mt-4 mb-4">{product.name}</h1>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Img variant="top" src={product.imageUrl} />
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Product;
