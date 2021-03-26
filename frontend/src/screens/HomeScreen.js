import React, { useState, useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productListReducer} from '../reducers/productReducers'
import { listProducts } from '../actions/productAction'
import store from '../store'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
import Loader from "../components/Loader"
import Message from '../components/Message'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList 
    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch]);

    return (
        <>
            <h1>Latest products</h1>
            {loading ? <Loader/> : error ? <Message>{error}</Message>:
                       <Row>
                       {products.map(product=>(
                           <Col key={product._id } sm={12} md={6} lg={4} xl={3}>
                               <Product product={product}/>
                           </Col>
                       ))}
           
                      </Row>
            }
        </>
    )
}

export default HomeScreen