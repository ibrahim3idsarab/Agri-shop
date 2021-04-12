import React from 'react'
import './comment.css'
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
const Comment = () => {
    return (
        <div>
              <ListGroup>
              <ListGroup.Item>
                  <Row>
                      <Col md={3}>
                      <Image src='http://lorempixel.com/40/40/people/1/'  alt='image-user' fluid/>
                      </Col>
                      <Col>
                      it is good products
                      </Col>
                  </Row>
              </ListGroup.Item>
              <li class="list-group-item list-group-item-primary">This is a primary list group item</li>
              <li class="list-group-item list-group-item-secondary">This is a secondary list group item</li>
              <li class="list-group-item list-group-item-success">This is a success list group item</li>
              <li class="list-group-item list-group-item-danger">This is a danger list group item</li>
              <li class="list-group-item list-group-item-warning">This is a warning list group item</li>
              <li class="list-group-item list-group-item-info">This is a info list group item</li>
              <li class="list-group-item list-group-item-light">This is a light list group item</li>
              <li class="list-group-item list-group-item-dark">This is a dark list group item</li>
           </ListGroup> 
       <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
           <img src="http://lorempixel.com/40/40/people/1/" alt="Avatar" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>IBRAHIM EID</strong>
              <br />
              I LIKE THIS PRODUCT
            </p>
          </div>
        </div>
      </article>
      <br></br>
      <article class="comment">
      <a class="comment-img" href="#non">
        <img src="https://pbs.twimg.com/profile_images/444197466133385216/UA08zh-B.jpeg" alt="" width="50" height="50"/>
      </a>
      <div class="comment-body">
        <div class="text">
          <p>Hello, this is an example from me</p>
        </div>
        <p class="attribution">by <a href="#non">Besnik Hetemi</a> at 14:23pm, 4 Dec 2015</p>
      </div>
    </article>
      <div class="comment">
      <a class="comment-img" href="#non">
        <Image src="https://pbs.twimg.com/profile_images/444197466133385216/UA08zh-B.jpeg" alt="" width="50" height="50"></Image>
      </a>
      <div class="comment-body">
        <div class="text">
          <p>if you are interested for  more about me visited my profile on social page</p>
          <p>To visit me you can click my name  <a target="_blank" href="http://www.facebook.com/besnik.hetemii">Besnik Hetemi</a> and send me frends request or send me a message in inbox</p>
        </div>
        <p class="attribution">by <a href="#non">Besnik Hetemi</a> at 14:23pm, 4 Dec 2015</p>
      </div>
        </div>
     </div>
    )
}

export default Comment
