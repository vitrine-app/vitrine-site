import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';

import logo from '../static/img/vitrine-banner-alt.png';

export default () => (
    <Header>
      <Link exact to={'/'}><LogoLink src={logo}/></Link>
      <nav>
        <StyledLink to={'/about'}>Features</StyledLink>
        <StyledLink to={'/about'}>Screenshots</StyledLink>
        <StyledLink to={'/about'}>Download</StyledLink>
      </nav>
    </Header>
);

const Header = styled.div`
  display: flex;
  padding: 15px 100px;
  height: 100%;
  
  nav {
    display: flex;
    margin-left: auto;
    margin-right: 0;
  }
`;

const LogoLink = styled.img`
  height: 70px;
`;

const StyledLink = styled(Link)`
  color: #FFFFFF;
    padding: 1rem;
    opacity: 0.75;
    font-weight: 700;
    display: inline-block;
    text-transform: uppercase;
    font-size: 0.9em;
    letter-spacing: 1;
    transition: all 0.3s;
    
    &:hover {
      opacity: 0.9;
      transform: translateY(-3px);
      transition: all 0.2s;
    }
`;
