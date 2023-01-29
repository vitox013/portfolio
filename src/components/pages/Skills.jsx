import Container from "../layout/Container";
import Intro from "../layout/Intro";
import "./Skills.css";
import { useState, useEffect } from "react";
import { tools } from "../data/SkillsData";
import { area } from "../data/SkillsData";
import CardTools from "../cards/CardTools";

function Skills() {

  const [item, setItem] = useState({});
  const [tools, setTools] = useState([]);

  return (
    <Container customClass="container_skills">
      <section id="skills">
        <Intro intro="Skills" text="Minhas habilidades técnicas" />
        <div className="tools">
          {area.map((item)=> {
            return <CardTools item={item.name} key={item.id}/>
          })}
        </div>
      </section>
    </Container>
  );
}

export default Skills;
