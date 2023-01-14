
import Home from './components/pages/Home'
import NavBar from './components/layout/NavBar'
import About from './components/pages/About'
import Skills from './components/pages/Skills'
function App() {

  return (
    <div id='home'>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  )
}

export default App
