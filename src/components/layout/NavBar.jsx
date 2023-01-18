import { Link } from "react-scroll"
import Container from "./Container";
import "./NavBar.css"



function NavBar(){


    return (
        <nav className='nav-bar'>
            <Container customClass="nav-height">
                <a href="/" className="logoName"><span>Müller</span></a>
                <ul className="list">
                    <li className="item"> 
                    <Link to="home" spy={true} smooth={true} isDynamic={true} offset={0} duration={500}>Home</Link>
                    </li>
                    <li className="item">
                        <Link to="sobre" spy={true} smooth={true} isDynamic={true} offset={0} duration={500}>Sobre</Link>
                    </li>
                    <li className="item">
                        <Link to="skills" spy={true} smooth={true} isDynamic={true} offset={0} duration={500}>Skills</Link>
                    </li>
                    <li className="item">
                        <Link to="portfolio" spy={true} smooth={true} isDynamic={true} offset={0} duration={500}>Portfolio</Link>
                    </li>
                    <li className="item">
                        <Link to="contato" spy={true} smooth={true} isDynamic={true} offset={0} duration={500}>Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar;