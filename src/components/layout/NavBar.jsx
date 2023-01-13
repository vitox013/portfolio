import { Link } from "react-router-dom";
import Container from "./Container";
import "./NavBar.css"



function NavBar(){
    return (
        <nav className='nav-bar'>
            <Container customClass="nav-height">
                <Link to="/" className="logoName"><span>Müller</span></Link>
                <ul className="list">
                    <li className="item"><Link to="/">Home</Link></li>
                    <li className="item"><Link to="/sobre">Sobre</Link></li>
                    <li className="item"><Link to="/sobre">Skills</Link></li>
                    <li className="item"><Link to="/portfolio">Portfolio</Link></li>
                    <li className="item"><Link to="/contato">Contato</Link></li>
                </ul>
               
            </Container>
        </nav>
    )
}

export default NavBar;