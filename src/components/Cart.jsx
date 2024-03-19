import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const product = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const removeFromCart = (id) => {
    //dispatch a remove action
    dispatch(remove(id))
  }

  const cards = product.map(products => (
    <div className='col-lg-3 col-md-4 col-sm-12' style={{ marginBottom: '10px' }}>
      <Card key={products.id} style={{ width: '18rem', height: '67vh' }} className='p-3 shadow mt-5'>
        <Card.Img variant="top" src={products.image} width={'100px'} height={'300px'} className='rounded' />
        <Card.Body>
          <Card.Title>{products.title.slice(0, 18)}...</Card.Title>
          <Card.Text>
            INR:{products.price}
          </Card.Text>
          <Button onClick={() => removeFromCart(products.id)} className='btn btn-outline-danger'>Remove Item</Button>
        </Card.Body>
      </Card>
    </div>
  ))
  return (
    <div>
      <div className='row p-5'>
        {cards}
      </div>
    </div>
  )
}

export default Cart