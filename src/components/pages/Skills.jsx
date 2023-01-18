import Container from "../layout/Container";
import Intro from "../layout/Intro";
import "./Skills.css"
import CardTools from "../layout/CardTools";
import { GrMysql } from "react-icons/gr";

function Skills () {

    return (
        <Container>
            <section id="skills">
                <Intro intro="Skills" text="Minhas habilidades técnicas"/>
                <div className="tools">
                    <CardTools name="Frontend developer"
                    i1='bx bxl-html5 bx-md icons' prim="HTML"
                    i2='bx bxl-css3 bx-md icons' segu="CSS" 
                    i3='bx bxl-javascript bx-md icons' terc="Javascript"
                    i4='bx bxl-bootstrap bx-md icons' quar="Bootstrap"
                    i5='bx bxl-git bx-md icons' quint="Git"
                    i6='bx bxl-react bx-md icons' sext='React'
                    />
                    <CardTools name="Backend / Others"
                    i1='bx bxl-php bx-md icons' prim="PHP"
                    i2='bx bxl-postgresql bx-md icons' segu="PostgreSQL"
                    i3=""
                    />
                    {/* // PHP LARAVEL APACHE MYSQL */}
                </div>
            </section>
        </Container>
    )
}

export default Skills;
