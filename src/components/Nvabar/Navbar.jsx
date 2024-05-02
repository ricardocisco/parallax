import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarBox = styled.div`
  display: flex;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const NavbarMain = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
`;

const NavbarList = styled.ul`
  display: flex;
`;

const LinkCss = styled(Link)`
  margin-left: 15px;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
`;

export default function Navbar() {
  return (
    <NavbarBox>
      <NavbarMain>
        <p>Navbar</p>
        <div>
          <NavbarList>
            <LinkCss>Home</LinkCss>
            <LinkCss>Suporte</LinkCss>
            <LinkCss>Sobre</LinkCss>
          </NavbarList>
        </div>
      </NavbarMain>
    </NavbarBox>
  );
}
