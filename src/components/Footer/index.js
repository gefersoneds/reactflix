import React from 'react';
import { FooterBase } from './styles';
import LogoFooter from '../../assets/img/LogoFooter.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/gefersoneuricodossantos/">
        <img className = 'LogoFooter' src={LogoFooter} alt="Logo Gefe" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
