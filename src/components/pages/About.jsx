import './About.css'
import Container from '../layout/Container';
import photo from "../../imgs/picture.png"
import Intro from '../layout/Intro';
import CardAbt from '../layout/CardAbt';
import PopUp from '../curriculo/PopUp';


function About(){
    return (
        <Container customClass="aboutContainer">
            <section className='about' id='sobre'>
                <Intro intro="Sobre Mim" text="Minha apresentação"/>
                <div className='desc_photo'>
                    <div className='photo'>
                        <img src={photo} alt="" />
                    </div>
                    <div className='desc'>
                        <div className='icon'>
                            <CardAbt icon="bx bxs-component" text="Organização" anima="bx-tada"/>
                            <CardAbt icon="bx bx-play-circle" text="Hands On" anima="bx-flashing"/>
                            <CardAbt icon="bx bx-analyse" text="Adaptável" anima="bx-spin"/>
                        </div>
                        <div className='text'>
                            <p>Comecei primeiramente pela área de hardware e no ano passado entrei no mundo da programação. </p>
                            <p>Acredito que todo conhecimento que eu adquirir me ajudará no meio acadêmico e profissional.</p>
                            <PopUp/>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )

}

export default About;