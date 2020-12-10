import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const links = [
  { titulo: "Início", link: "/" },
  { titulo: "Novo", link: "/novoprotocolo" },
  { titulo: "Busca", link: "/busca" },
];

const linksCode = links.map((link, i) => (
  <li key={i} className='menu__link'>
    <Link to={link.link}>{link.titulo}</Link>
  </li>
));

const Menu = ({ logout }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen((menuIsOpen) => !menuIsOpen);
  };

  const menuCss = menuIsOpen && "menuShow";

  return (
    <>
      <button className='menu__button' onClick={toggleMenu}>
        Menu
      </button>
      <ul className={`menu ${menuCss}`}>
        {linksCode}

        <li className='menu__link'>
          <Link to='/relatorio'>Relatório</Link>
        </li>
        <li className='menu__link'>
          <Link to='/usuarios'>Usuários</Link>
        </li>
        <li className='menu__link logout' onClick={logout}>
          Logout
        </li>
      </ul>
    </>
  );
};

export default Menu;
