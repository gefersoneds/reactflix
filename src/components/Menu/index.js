import React from 'react';
import {Link} from 'react-router-dom';
import Logo4 from '../../assets/img/Logo4.png';
import './Menu.css';
import Button from '../Button';


function Menu () {
    return (
        <nav className = "Menu">
            <Link to = "/">
                <img className="Logo" src={Logo4} alt="AluraFlix logo"/>
            </Link>
            
            <Button as = {Link} className = "ButtonLink" to
             = "/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;