import { Icon } from '@iconify/react'
import { useEffect } from 'react'
import { useState } from 'react';
import './Home.css'


function Home(){

    const [user, setUser] = useState({name: '', photo: ''})
    const [arrow, setArrow] = useState('material-symbols:arrow-right-alt')
    
    useEffect(() => { 
        async function fetchData() {
            const response = await fetch('https://api.github.com/users/vitox013');
            const data = await response.json();
            console.log(data)
            setUser({
                name: data.name,
                photo: data.avatar_url
            })
        }

        fetchData();
    }, []);

    return (
        <>
        <div className="container">
            <header>
                <nav className='logo'>
                    <a href="#">{user.name}</a>
                </nav>
                <nav className='links'>
                    <a href='#'>Home</a>
                    <a href="#">Sobre</a>
                    <a href="#">Projetos</a>
                    <a href="#">Contato</a>
                </nav>
                <nav className='icons'>
                    <a href="mailto:vitor.muller310@gmail.com" target="_blank"><Icon icon="mdi:gmail" width={30} height={30} /></a>
                    <a id="git" href="https://github.com/vitox013" target="_blank"><Icon icon="mdi:github" width={30} height={30} /></a>
                    <a href="https://www.linkedin.com/in/vitor-m%C3%BCller" target="_blank"><Icon icon="mdi:linkedin" width={30} height={30} /></a>
                </nav>
            </header>
            <div className='backImg'>
                    <img id='myPhoto' src={user.photo} alt="Minha foto" />
                    <p className='bio'>Olá, eu sou o Vitor!</p>
                    <p className='subBio'>Código limpo e responsivo é arte.</p>
                    <button id='go' 
                        onMouseEnter={() => setArrow('mdi:arrow-collapse-down')} 
                        onMouseLeave={() => setArrow('material-symbols:arrow-right-alt')}>
                        Vamos lá 
                        <Icon icon={arrow}/>
                    </button>
                </div>
        </div>
        </>
    )
}

export default Home;