import React from 'react'
import { Row, Col, Button} from 'react-bootstrap'
import './comment.css'

const CommentBox = () => {
    return (
         <Row>
          <Col md={6}>
            <div className="panel panel-info">
              <div className="panel-body">
                <textarea placeholder="Write your comment here!" className="pb-cmnt-textarea" defaultValue={""} />
                <form className="form-inline">
                  <div className="btn-group">
                    <Button className="btn btn-light my-3"><span className="fa fa-picture-o fa-lg" /></Button>
                    <Button className="btn btn-light my-3"><span className="fa fa-video-camera fa-lg" /></Button>
                    <Button className="btn btn-light my-3"><span className="fa fa-microphone fa-lg" /></Button>
                    <Button className="btn btn-light my-3"><span className="fa fa-music fa-lg" /></Button>
                  </div>
                  <Button className="btn btn-light my-3">Share</Button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
    )
}

export default CommentBox
