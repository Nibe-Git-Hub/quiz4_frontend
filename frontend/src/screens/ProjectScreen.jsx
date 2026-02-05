import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap'
import project from '../components/Project'

function ProjectScreen() {
    const { id } = useParams()
    const project = [
    { name: 'Project 1' },
    { name: 'Project 2' },
    { name: 'Project 3' },
    { name: 'Project 4' },
  ]
    const Project = project.find((p) => p.id === id)
  return (
    <div>
        <Link to='/' className="btn btn-light my-3">
            Go Back
        </Link>

        <Col md={6}>
            {project.name}
        </Col>   
        
        <Col md={3}>
            <ListGroup variant="flush">
                <ListGroupItem>
                    {project.description}
                </ListGroupItem>

                <ListGroupItem>
                    {project.status}
                </ListGroupItem>

                <ListGroupItem>
                    {'{project.hours_consumed} hours'}
                </ListGroupItem>

                <ListGroupItem>
                    {project.start_date}
                </ListGroupItem>

                <ListGroupItem>
                    {project.end_date}
                </ListGroupItem>
            </ListGroup>
        </Col>
    </div>
  )
}

export default ProjectScreen
