import "./Portfolio.css";
import Container from "../layout/Container";
import { useState, useEffect } from "react";
import Intro from "../layout/Intro";
import CardPort from "../cards/CardPort";
import { projectsData } from "../data/PortfolioData";
import { projectsNav } from "../data/PortfolioData";

function Portfolio() {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <Container customClass="portfolio_container">
      <section id="portfolio">
        <Intro intro="Portfolio" text="Meus projetos" />
        <div className="menu">
          {projectsNav.map((item, index) => {
            return (
              <span
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${active === index ? "active" : ""} menu`}
                key={index}
              >
                {item.name}
              </span>
            );
          })}
        </div>

        <div className="projects">
          {projects.map((item) => {
            return <CardPort item={item} key={item.id} />;
          })}
        </div>
      </section>
    </Container>
  );
}

export default Portfolio;
