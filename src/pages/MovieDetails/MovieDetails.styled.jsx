import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MovieInfo = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 10px;
  border: 2px dashed gold;
`;

const MovieTextInfo = styled.div`
  padding: 20px;
  padding-top: 0;
`;

const AdditionalMovieInfo = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  border: 2px dashed gold;
  margin-bottom: 24px;
`;

const NavLinkItem = styled(NavLink)`
  text-decoration: none;
  color: #212121;
  padding: 12px;

  :hover:not(.active) {
    color: #24075c;
  }

  &.active {
    color: #fff;
    background-color: #ebc415;
    border-radius: 6px;
  }
`;

export { NavLinkItem, AdditionalMovieInfo, MovieInfo, MovieTextInfo };
