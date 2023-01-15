import Container from "../layout/Container";
import Intro from "../layout/Intro";
import "./Skills.css"
import CardTools from "../layout/CardTools";
function Skills () {


    return (
        <Container>
            <section id="skills">
                <Intro intro="Skills" text="Minhas habilidades técnicas"/>
                <div className="tools">
                    <CardTools />
                    <CardTools />
                </div>
            </section>
        </Container>
    )
}

export default Skills;