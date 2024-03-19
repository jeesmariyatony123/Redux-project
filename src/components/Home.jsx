import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import Alert from 'react-bootstrap/Alert'
import StatusCode from '../utils/StatusCode';

const Home = () => {

    // const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const { data: products,status } = useSelector(state => state.products)

    useEffect(() => {
        //instead dispatch an action for fetchProducts
        dispatch(getProducts())
        //api
        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then(result => setProducts(result))
        
    }, [])

    if(status===StatusCode.LOADING){
        return <h4 className='pt-5 mt-5 text-center'>Loading...</h4>
    }
    if(status===StatusCode.ERROR){
        return <Alert className='mt-5' key="danger" variant="danger">Something went wrong ! Try again Later...</Alert>
    }
    const addToCart = (products) => {
        //dispatch an add action
        dispatch(add(products))
    }

    const cards = products.map(products => (
        <div className=' col-lg-3 col-md-4 col-sm-12' style={{ marginBottom: '10px' }}>
            <Card key={products.id} style={{ width: '18rem', height: '67vh' }} className='p-3 shadow mt-5'>
                <Card.Img variant="top" src={products.image} width={'100px'} height={'270px'} className='rounded' />
                <Card.Body>
                    <Card.Title>{products.title.slice(0, 18)}...</Card.Title>
                    <Card.Text>
                        INR:{products.price}
                    </Card.Text>
                    <Button onClick={() => addToCart(products)} className='btn btn-outline-primary'>Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    ))

    return (
        <div className='row p-5 text-center'>
            {cards}
        </div>
    )
}

export default Home