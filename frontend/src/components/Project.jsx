import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Project({ project }) {
    const projects = [
    { name: 'Project 1' },
    { name: 'Project 2' },
    { name: 'Project 3' },
    { name: 'Project 4' },
  ]
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/project/${project._id}`}></Link>

        <Card.Body>
            <Link to={`/project/${project._id}`}>
            <Card.Title as='div'>
                <strong>{project.name}</strong>
            </Card.Title>
            </Link>
        </Card.Body>
    </Card>
  )
}

export default Project
