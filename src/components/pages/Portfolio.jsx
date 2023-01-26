import "./Portfolio.css";
import Container from "../layout/Container";
import Intro from "../layout/Intro";
import CardPort from "../layout/CardPort";
import botlol from "../../imgs/botlol.png";
import curitiba from "../../imgs/curitiba.png";
function Portfolio() {

  function ativado () {
    const all = [];
    const web = [];

  }

  return (
    <Container>
      <section id="portfolio">
        <Intro intro="Portfolio" text="Meus projetos" />
        <div className="menu">
          <span className="all active" >All</span>
          <span className="web">Web</span>
          <span className="app">App</span>
        </div>
        <div className="projects">
          <CardPort
            url="https://github.com/vitox013/bot-lol-api"
            urlImg={botlol}
            name="Bot Lol"
          />
          <CardPort
            url="https://vitox013.github.io/curitiba.tour/"
            urlImg={curitiba}
            name="Curitiba"
          />
          <CardPort />
          <CardPort />
        </div>
      </section>
    </Container>
  );
}

export default Portfolio;
