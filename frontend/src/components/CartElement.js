import React from 'react'

import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
const CartElement = () => {
    return (
         <Row className="mb-6">
            <Col md={5} lg={3} xl={3}>
              <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                <Image className="img-fluid w-100"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample"/>
                <a href="#!">
                  <div className="mask">
                    <Image className="img-fluid w-100"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"/>
                    <div className="mask rgba-black-slight"></div>
                  </div>
                </a>
              </div>
            </Col>
            <Col md={7} lg={9} xl={9}>
              <div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>name of product</h5>
                    <p className="mb-3 text-muted text-uppercase small">Description</p>
                    <p className="mb-2 text-muted text-uppercase small">amount</p>
                    <p className="mb-3 text-muted text-uppercase small">name of owner</p>
                  </div>
                  <div>
                    <small id="passwordHelpBlock" className="form-text text-muted text-center">
                      (Note, 1 piece)
                    </small>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i
                        className="fas fa-trash-alt mr-1"></i> Remove item </a>
                    <a href="#!" type="button" class="card-link-secondary small text-uppercase"><i
                        className="fas fa-heart mr-1"></i> Move to wish list </a>
                  </div>
                  <p className="mb-0"><span><strong id="summary">$17.99</strong></span></p>
                </div>
              </div>
            </Col>
          </Row>
    )
}

export default CartElement
