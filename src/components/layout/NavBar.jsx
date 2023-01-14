import { useState, useEffect } from 'react';
import Container from "./Container";
import "./NavBar.css"



function NavBar(){


    return (
        <nav className='nav-bar'>
            <Container customClass="nav-height">
                <a href="/" className="logoName"><span>Müller</span></a>
                <ul className="list">
                    <li className="item"><a href="#home">Home</a></li>
                    <li className="item"><a href="#sobre">Sobre</a></li>
                    <li className="item"><a href="#skills">Skills</a></li>
                    <li className="item"><a href="#portfolio">Portfolio</a></li>
                    <li className="item"><a href="#contato">Contato</a></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar;