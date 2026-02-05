import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap'

function userScreen() {
    const user = [
        { name: 'user 1' },
        { name: 'user 2' },
        { name: 'user 3' },
        { name: 'user 4' },
    ]
  return (
    <div>
        <Link to='/' className="btn btn-light my-3">
            Go Back
        </Link>

        <Col md={6}>
            <strong>
                {user.last_name}, {user.first_name} 
            </strong>
        </Col>   
        
        <Col md={3}>
            <ListGroup variant="flush">
                <ListGroupItem>
                    {user.email}
                </ListGroupItem>

                <ListGroupItem>
                    {user.role}
                </ListGroupItem>
            </ListGroup>
        </Col>
    </div>
  )
}

export default userScreen
