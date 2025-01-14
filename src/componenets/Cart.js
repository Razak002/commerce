import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import { remove } from '../store/cartSlice';
import Payment from './Payment';

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <Container className="py-4">
      <h1 className="text-center text-secondary mb-4">Your Cart</h1>
      {products.length === 0 ? (
        <Alert variant="info" className="text-center">
          Your cart is empty. Add items to see them here!
        </Alert>
      ) : (
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} xs={12} md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <div className="flex justify-center text-center py-3">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.title}
                    style={{ width: '150px', height: '150px', objectFit: 'contain' }}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="text-truncate">{product.title}</Card.Title>
                  <Card.Text className="text-muted">INR: {product.price}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white d-flex justify-content-between">
                  <Button
                    variant="danger"
                    onClick={() => removeFromCart(product.id)}
                    className="whitespace-nowrap"
                    
                  >
                    Remove Item
                  </Button>
                  <Payment />
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Cart;
