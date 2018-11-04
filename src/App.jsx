import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';
import styled, { injectGlobal } from 'styled-components';

import Header from './components/Header';

const App = () => (
    <Router>
      <MainApp>
        <Header/>
        <div>
          <Routes/>
        </div>
      </MainApp>
    </Router>
);

injectGlobal`
  html, body {
    height: 100%;
  }
  
  body {
    font-family: 'Open Sans', 'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }
`;

const MainApp = styled.div`
  height: 100%;
  background-image: radial-gradient(at 0 500px, #171614 0%, #38332C 100%);
  line-height: 1.5;
`;

export default hot(module)(App)
