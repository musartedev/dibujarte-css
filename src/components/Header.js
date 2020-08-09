import React from 'react';
import logo from '../assets/logo192.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={logo} alt='' />
        <h1>#DibujarteCSS</h1>
      </div>
      <div className='header__description'>
        <p>✨ ¡Llegó el momento de dibujar con CSS! ✨</p>
        <a
          href='https://github.com/musartedev/dibujarte-css'
          target='_blank'
          rel='noopener noreferrer'
        >
          Únete al reto
        </a>
      </div>
    </header>
  );
};

export default Header;
