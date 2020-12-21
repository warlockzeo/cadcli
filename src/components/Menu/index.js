import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const links = [
  { titulo: "Início", link: "/" },
  { titulo: "Pacientes", link: "/pacientes" },
  { titulo: "Profissionais", link: "/profissionais" },
  { titulo: "Marcações", link: "/marcacoes" },
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

  const menuCss = menuIsOpen ? "menuShow" : "";

  return (
    <>
      <button className='menu__button' onClick={toggleMenu}>
        Menu
      </button>
      <ul className={`menu ${menuCss}`}>{linksCode}</ul>
    </>
  );
};

export default Menu;
