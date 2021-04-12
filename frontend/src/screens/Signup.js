import React from 'react'
import { Row, Col, Image, ListGroup, Card, Button, Form, Container} from 'react-bootstrap'
const Signup = () => {
    return (
        <Row>
        <Col md={6}>
        <div className="signup-form">
        <Form action="/" method="post">
            <h2>Register</h2>
            <p className="hint-text">Create your account. It's free and only takes a minute.</p>
            <Form.Group>
                <Row>
                    <Col> <Form.Control type="text" placeholder="Enter first name"></Form.Control></Col>
                    <Col> <Form.Control type="text" placeholder="Enter last name" /></Col>
                </Row>        	
            </Form.Group>
            <Form.Group>
            <Form.Control type="email" placeholder="Enter your email"></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Control type="text" placeholder="Enter your phone number"></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Control type="password" placeholder="Enter password"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control type="password" placeholder="confirm_password"></Form.Control>
            </Form.Group>        
            <Form.Group>
                <Form.Label><Form.Check type='checkbox'> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></Form.Check></Form.Label>
            </Form.Group>
            <Form.Group>
                <Button type="submit" class="btn btn-success btn-lg btn-block">Register Now</Button>
            </Form.Group>
        </Form>
        <div class="text-center">Already have an account? <a href="#">Sign in</a></div>
    </div>
    </Col>
    </Row>
    )
}

export default Signup
