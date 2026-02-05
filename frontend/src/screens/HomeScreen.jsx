import { Row, Col } from 'react-bootstrap'
import Project from '../components/Project'
import projects from '../components/Project'

function HomeScreen() {
  const projects = [
    { name: 'Project 1' },
    { name: 'Project 2' },
    { name: 'Project 3' },
    { name: 'Project 4' },
  ]
  return (
    <div>
      <h1>Projects</h1>
      <Row>
        {projects.map(project=> (
          <Col key={project._id} sm={12} md={6} lg={4} xl={3}>
            <Project project={project} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
