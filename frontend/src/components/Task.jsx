import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Task({ task }) {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/task/${task._id}`}></Link>

        <Card.Body>
            <Link to={`/task/${task._id}`}>
            <Card.Title as='div'>
                <strong>{task.name}</strong>
            </Card.Title>
            </Link>
        </Card.Body>
    </Card>
  )
}

export default task
