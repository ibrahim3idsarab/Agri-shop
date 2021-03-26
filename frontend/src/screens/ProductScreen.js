import React, { useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../store'
import { listProductDetails } from '../actions/productAction'
import { productDetailsReducer } from '../reducers/productReducers'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductScreen = ({ match }) => {
    const dispatch = useDispatch()
    const productDetails= useSelector(state => state.productDetails)
    const {loading, error, product}= productDetails
    useEffect(()=>{
        dispatch(listProductDetails(match.params.id))
    },[match,dispatch]);
    return (
        <>
            <Link className='btn btn-light my-3' to='/'>Go Back</Link>
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message>:
                        <Row>
                        <Col md={6}>
                            <Image src={product.image} alt={product.name_product} fluid/>
                        </Col>
                        <Col md={3}>
                            <ListGroup>
                                <ListGroup.Item>
                                    <h3>{product.name_product}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Price: ${product.price}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Description: {product.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Price:
                                        </Col>
                                        <Col>
                                        <strong>${product.price}</strong>
                                        </Col>
        
                                    </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Status:
                                        </Col>
                                        <Col>
                                        {product.countInstock > 0 ? 'In Stock' : 'Out Of Stock'}
                                        </Col>
                                    </Row>
                                    </ListGroup.Item> 
                                    <ListGroup.Item>
                                        <Button className='btn-block' type='button' disabled={product.countInstock === 0}>
                                            Add To Cart
                                        </Button>
                                    </ListGroup.Item> 
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
            }

        </>
    )
}

export default ProductScreen
