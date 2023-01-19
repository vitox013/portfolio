import Container from "../layout/Container";
import Intro from "../layout/Intro";
import "./Skills.css";
import CardTools from "../layout/CardTools";

function Skills() {
  return (
    <Container>
      <section id="skills">
        <Intro intro="Skills" text="Minhas habilidades técnicas" />
        <div className="tools">
          <CardTools
            name="Front-end"
            item={[
              { name: "HTML", icon: "bx bxl-html5" },
              { name: "CSS", icon: "bx bxl-css3" },
              { name: "Javascript", icon: "bx bxl-javascript" },
              { name: "Bootstrap", icon: "bx bxl-bootstrap" },
              { name: "React", icon: "bx bxl-react" },
            ]}
          />

          <CardTools
            name="Backend / Others"
            item={[
              { name: "PHP", icon: "bx bxl-php" },
              { name: "MySQL", icon: "bx bxs-data" },
              { name: "Linux", icon: "icon-linux" },
              { name: "Git", icon: "bx bxl-github" },
              { name: "Hardware", icon: "bx bx-hdd" },
              { name: "Redes", icon: "bx bx-network-chart" },
            ]}
          />
          {/* // PHP LARAVEL APACHE MYSQL */}
        </div>
      </section>
    </Container>
  );
}

export default Skills;
