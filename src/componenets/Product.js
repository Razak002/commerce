import React, { useEffect } from 'react';
import { Button, Card, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  if (status === 'loading') {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <img src="./loader.gif" alt="Loading..." />
      </div>
    );
  }

  if (status === 'error') {
    return (
      <Alert key="danger" variant="danger" className="text-center">
        Something went wrong! Please try again later.
      </Alert>
    );
  }

  return (
    <div className="container">
      <div className="text-center mb-4">
        <h1 className="display-5 text-gray">Current Items in store</h1>
      </div>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-md-4" key={product.id}>
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
                <Card.Text className="text-muted">${product.price}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white text-center">
                <Button
                  variant="primary"
                  onClick={() => addToCart(product)}
                  className="w-100"
                >
                  🛒 Add To Cart
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
