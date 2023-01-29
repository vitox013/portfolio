import Container from '../layout/Container';
import './Home.css'
import { GiHand } from "react-icons/gi";
import { AiOutlineLine } from "react-icons/ai";
import { BsMouse, BsArrowDown } from "react-icons/bs";
import Links from '../layout/Links';
import Button from '../layout/ButtonHello';


function Home(){

    return (
        <Container customClass="homeContainer" >
            <Links />
            <div className='bio_container' id='home' >
                <div className='bio'>
                    <p className='name'>Vitor Müller <GiHand/></p>
                    <p className='profissao'><AiOutlineLine/> Dev Full Stack</p>
                    <div className='sub_bio'>
                        <p>Estudante de Sistemas de Informação na UTFPR.</p>
                        <p>Entusiasta por Tecnologia.</p>
                    </div>
                    <Button text="Diga Olá" link="mailto:vitor.muller310@gmail.com"/>
                </div>
                <div>
                    <p className='scroll'><BsMouse/>Scroll Down<i className='bx bx-down-arrow-alt bx-fade-down animation-duration 90 arr' ></i></p>
                </div>
            </div>
            <div className='backImg'>

            </div>
        </Container>
    )
}

export default Home;