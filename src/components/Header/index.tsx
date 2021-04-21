import React from 'react';
import { Item, Logo, Menu, Nav } from './styles';

const Header: React.FC = () => {
  return (
    <Nav>
      <Logo>fm</Logo>
      <Menu>
        <Item>sobre</Item>
        <Item>contato</Item>
        <Item>portfolio</Item>
      </Menu>
    </Nav>
  );
};

export default Header;
