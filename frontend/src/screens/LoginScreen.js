import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form, Container} from 'react-bootstrap'
import Signup from './Signup'
import './login.css'
const LoginScreen = () => {
    return (
<Container className='container-login'>
<Link className='btn btn-light my-3' to='/'>Go Back</Link>
 <Card className='login-card'>
<Card.Body>
    <Link className='float-right btn btn-outline-primary' to='/signup'>Sign up</Link>
	<h4 className="card-title mb-4 mt-1">Sign in</h4>
	<p>
		<a href="" className="btn btn-block btn-outline-info"> <i className="fab fa-twitter"></i>   Login via Twitter</a>
		<a href="" className="btn btn-block btn-outline-primary"> <i className="fab fa-facebook-f"></i>   Login via facebook</a>
	</p>
	<hr/>
	<Form>
    <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group> 
    <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>  
    <br/>                                 
    <Row>
        <Col md={6}>
            <Form.Group>
                <Button className="btn btn-primary btn-block"> Login  </Button>
            </Form.Group>
        </Col>
        <Col className="text-right">
            <a className="small" href="#">Forgot password?</a>
        </Col>                                            
    </Row>                                                             
</Form>
</Card.Body>
</Card>
</Container>
    )
}

export default LoginScreen
