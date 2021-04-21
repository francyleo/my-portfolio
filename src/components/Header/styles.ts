import styled from 'styled-components';

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  height: 84px;
  width: 100%;
  display: flex;
  align-items: center;

  padding: 0 20%;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 84px;
  background: ${props => props.theme.dark};
  cursor: pointer;

  text-transform: uppercase;
  color: ${props => props.theme.color};
  font-weight: ${props => props.theme.text.weight.bold};
  font-size: ${props => props.theme.text.size.sm};
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;

  margin-left: auto;
`;

export const Item = styled.li`
  position: relative;
  text-transform: uppercase;
  cursor: pointer;
  color: ${props => props.theme.color};
  font-weight: ${props => props.theme.text.weight.bold};

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    left: 0;
    bottom: -2px;
    background: ${props => props.theme.secondary};
    transition: width 300ms ease-out;
  }

  &:hover {
    color: ${props => props.theme.secondary};
    transition: color 200ms ease-in;

    &::after {
      width: 80%;
    }
  }

  & + & {
    margin-left: 48px;
  }
`;
