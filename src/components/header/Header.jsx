import { useState } from 'react';

import Logo from '../../assets/logo.png';

import './header.scss';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={isMenuOpen ? 'open' : ''}>
        <a href="#about">Sobre nós</a>
        <a href="#services">Serviços</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}
