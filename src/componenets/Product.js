import React from 'react'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import { Alert } from 'react-bootstrap';


const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector(state => state.products);

  useEffect(() => {

    // dispatch an action for fetch products

    dispatch(getProducts());

    // fetch('https://fakestoreapi.com/products')
    // .then(data => data.json())
    // .then(result => getProducts(result)

  }, []);

  if (status === 'Loading') {
    return <p>Loading....
    </p>
  }
  if (status === 'error') {
    return <Alert key='danger' variant='danger'> something went wrong!!! try again later
  </Alert >
}

const addToCart = (product) => {
  //dispatch action required
  dispatch(add(product))
}

const cards = products.map(product => {
  return (
    <div className="col-md-3" style={{ marginBottom: '10px' }}>
      <Card key={product.id} className='h-100'>
        <div className='text-center'>
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            INR: {product.price}
          </Card.Text>
        </Card.Body>

        <Card.Footer style={{ backgroundColor: 'white' }}>
          <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  )
})

return (
  <>
    <h1>Product Dashboard</h1>
    <div className='row'>
      {cards}
    </div>
  </>
)


}


export default Product