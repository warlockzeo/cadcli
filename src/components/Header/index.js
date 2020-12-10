import React from "react";
import Styled from "styled-components";

const HeaderTag = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 980;
  background-color: #ffffff;
`;

const Logo = Styled.img`
  width: 100px;
  height: auto;
  margin-right: 20px;
`;

const Titulo = Styled.h1`
  color: #ff0000;
  border: none;
  padding: 0;
  font-weight: bolder;
  font-size: 1.8em;
`;

const Header = ({ business, children }) => {
  return (
    <HeaderTag>
      <Logo src='/assets/images/logo-pmtn.jpg' alt='logomarca' />
      <div>
        <Titulo>Cadcli{business?.name && `${business.name}`} </Titulo>
      </div>
      {children}
    </HeaderTag>
  );
};
export default Header;
