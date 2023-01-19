import Home from './components/pages/Home'
import NavBar from './components/layout/NavBar'
import About from './components/pages/About'
import Skills from './components/pages/Skills'
import ScrollUp from './components/layout/ScrollUp'


function App() {

  return (
    <div id='home'>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <ScrollUp/>
    </div>
  )
}

export default App
