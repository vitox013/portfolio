import { Icon } from '@iconify/react'
import Container from '../layout/Container';
import './Home.css'
import { GiHand } from "react-icons/gi";
import { AiOutlineLine } from "react-icons/ai";
import Links from '../layout/Links';


function Home(){

    return (
        <Container customClass="homeContainer">
            <Links />
            <div className='bio'>
                <p className='name'>Vitor Müller <GiHand/></p>
                <p className='profissao'><AiOutlineLine/> Dev Full Stack</p>
                <p className='subBio'>Código limpo e responsivo é arte.</p>
                <a href=""></a>
            </div>
            <div className='backImg'>
                {/* <img id='myPhoto' src={user.photo} alt="Minha foto" /> */}
            </div>
        </Container>
    )
}

export default Home;