import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { remove } from '../store/cartSlice'
import Payment from './Payment'


const Cart = () => {
  const products = useSelector(state => state.cart);

  const dispatch = useDispatch();


  const removeToCart = (id) => {
    //dispatch a remove action
    dispatch(remove(id));
  }

  const cards = products.map(product => {
    return (
      <div className="col-md-12" style={{ marginBottom: '10px' }}>
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

          <Card.Footer style={{ backgroundColor: 'white'}}>
            <Button variant="danger" onClick={() => removeToCart(product.id)} style={{ marginRight: '20px' }}>Remove Item</Button>
            <Button variant="primary" onClick={() => removeToCart(product.id)}>Pay for Item</Button>
           
          </Card.Footer>

        </Card>
        <Payment />
      </div>
    )
  })


  return (
    <>
      <div className='row'>
        {cards}
      </div>

    </>
  )
}

export default Cart
