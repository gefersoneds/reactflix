import React from 'react';
import Logo4 from '../../assets/img/Logo4.png';
import './Menu.css';
import Button from '../Button';


function Menu () {
    return (
        <nav className = "Menu">
            <a href = "/">
                <img className = "Logo" src = {Logo4} alt = "AluraFlix logo" />
            </a>
            
            <Button as = "a" className = "ButtonLink" href = "/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;