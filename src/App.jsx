import Home from "./components/pages/Home";
import NavBar from "./components/layout/NavBar";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import ScrollUp from "./components/layout/ScrollUp";
import Portfolio from "./components/pages/Portfolio";
import { Contact } from "./components/pages/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <ScrollUp />
      <Footer />
    </div>
  );
}

export default App;
