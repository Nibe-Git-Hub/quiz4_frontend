import { Card } from 'react-bootstrap'

function Project({ project }) {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/project/${project._id}`}></a>

        <Card.Body>
            <a href={`/project/${project._id}`}>
            <Card.Title as='div'>
                <strong>{project.name}</strong>
            </Card.Title>
            </a>
        </Card.Body>
    </Card>
  )
}

export default Project
