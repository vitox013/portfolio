import "./About.css";
import Container from "../layout/Container";
import photo from "../../imgs/picture.png";
import Intro from "../layout/Intro";
import CardAbt from "../cards/CardAbt";

function About() {
    return (
        <Container customClass="aboutContainer">
            <section className="about" id="sobre">
                <Intro intro="Sobre Mim" text="Minha apresentação" />
                <div className="desc_photo">
                    <div className="photo">
                        <img src={photo} alt="" />
                    </div>
                    <div className="desc">
                        <div className="icon">
                            <CardAbt
                                icon="bx bxs-component"
                                text="Organização"
                                anima="bx-tada"
                            />
                            <CardAbt
                                icon="bx bx-play-circle"
                                text="Hands On"
                                anima="bx-flashing"
                            />
                            <CardAbt
                                icon="bx bx-analyse"
                                text="Adaptável"
                                anima="bx-spin"
                            />
                        </div>
                        <div className="text">
                            <p>
                                Comecei primeiramente pela área de hardware e
                                após ter contato com linguagem Python em 2020, a
                                história mudou.
                            </p>
                            <p>
                                Atualmente focado em desenvolvimento Full-Stack.
                            </p>
                            <a
                                href="https://drive.google.com/file/d/1iEpu130FJbzAPP9DlVrnsYMun0tcZVxc/view?usp=share_link"
                                target="_blank"
                            >
                                <button className="btn">
                                    {" "}
                                    Ver Currículo{" "}
                                    <i class="bx bxs-file curr"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}

export default About;
