import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavLinkItem = styled(NavLink)`
  margin-right: 28px;
  margin-left: 28px;
  text-decoration: none;
  color: #211212;
  padding: 8px;
  border-radius: 6px;

  :hover:not(.active) {
    color: #f1ee10;
  }

  &.active {
    color: #fff;
    background-color: #24075c;
  }
`;

const Header = styled.div`
  height: 96px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 36px;
  color: #010101;
  border: 2px dashed #24075c;
`;

const Main = styled.main`
  margin: 24px;
`;

export { Main, Header, NavLinkItem };
