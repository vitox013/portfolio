import { Icon } from '@iconify/react'
import { useEffect } from 'react'
import { useState } from 'react';
import './Home.css'


function Home(){

    const [user, setUser] = useState({name: '', photo: ''})

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
                    <a href="#">Home</a>
                    <a href="#">Sobre</a>
                    <a href="#">Projetos</a>
                    <a href="#">Contato</a>
                </nav>
                <nav className='icons'>
                    <Icon icon="mdi:gmail" width={29.17} height={23.33} />
                    <Icon icon="mdi:github" width={25} height={25} />
                    <Icon icon="mdi:linkedin" width={25} height={25} />
                </nav>
            </header>
            <div className='container2'>
                <div id='backImg'>
                    <img src="../../assets/pexels-negative-space-34153.jpg" alt="" />
                    <img id='myPhoto' src={user.photo} alt="Minha foto" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;