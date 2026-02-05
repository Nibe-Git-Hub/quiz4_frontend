import { Row, Col } from 'react-bootstrap'

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
            <h3>{project.name}</h3>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
