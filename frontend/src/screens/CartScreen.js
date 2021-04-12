import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import CartElement  from '../components/CartElement'
import { addToCart } from '../actions/cartAction'


const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()
    useEffect(()=>{
      console.log('Hello')
    })
    return (
      <>
      <Link className='btn btn-light my-3' to='/'>Go Back</Link>
        <Row>
            <Col>
            <Card className="mb-6">
        <div className="pt-4 wish-list">

          <h5 className="mb-4">Cart (<span>2</span> items)</h5>
          <hr className="mb-4"/>
          <CartElement/>
          <p className="text-primary mb-0"><i className="fas fa-info-circle mr-1"></i> Do not delay the purchase, adding
            items to your cart does not mean booking them.</p>

        </div>
      </Card>
      <div className="mb-3">
        <div className="pt-4">

          <h5 className="mb-4">Expected shipping delivery</h5>

          <p className="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
        </div>
      </div>
      <div className="mb-3">
        <div className="pt-4">

          <h5 className="mb-4">We accept</h5>

          <Image className="mr-2" width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
            alt="Visa"/>
          <Image className="mr-2" width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
            alt="American Express"/>
          <Image className="mr-2" width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
            alt="Mastercard"/>
          <Image className="mr-2" width="45px"
            src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
            alt="PayPal acceptance mark"/>
        </div>
      </div>

    </Col>
    <Col lg={4}>
      <div className="mb-3">
        <div className="pt-4">

          <h5 className="mb-3">The total amount of</h5>

          <ListGroup className="list-group-flush">
            <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Temporary amount
              <span>$25.98</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center px-0">
              Shipping
              <span>Gratis</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>The total amount of</strong>
                <strong>
                  <p className="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span><strong>$53.98</strong></span>
            </ListGroup.Item>
          </ListGroup>

          <button type="button" className="btn btn-primary btn-block">go to checkout</button>

        </div>
      </div>
      <div className="mb-3">
        <div className="pt-4">

          <a className="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample"
            aria-expanded="false" aria-controls="collapseExample">
            Add a discount code (optional)
            <span><i className="fas fa-chevron-down pt-1"></i></span>
          </a>

          <div className="collapse" id="collapseExample">
            <div className="mt-3">
              <div className="md-form md-outline mb-0">
                <input type="text" id="discount-code" className="form-control font-weight-light"
                  placeholder="Enter discount code"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  </Row>
  </>
    )
}

export default CartScreen
