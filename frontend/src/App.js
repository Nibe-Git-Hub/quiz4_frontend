import { Row, Col, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProjectScreen from "./screens/ProjectScreen";
import ProjectCreateScreen from "./screens/ProjectCreateScreen";
import TaskCreateScreen from "./screens/TaskCreateScreen";
import UserListScreen from "./screens/UserListScreen";
import UserCreateScreen from "./screens/UserCreateScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/project/:id' element={<ProjectScreen />} />
            {/*<Route path='/create_project' element={<ProjectCreateScreen />} exact />*/}
            {/*<Route path='/create_task' element={<TaskCreateScreen />} exact />*/}
            {/*<Route path='/user/:id' element={<UserListScreen />} />*/}
            {/*<Route path='/create_user' element={<UserCreateScreen />} exact />*/}
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
