
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './components/layout/Container'
import Home from './components/pages/Home'
import NavBar from './components/layout/NavBar'


function App() {

  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Container>
    </Router>
  )
}

export default App
