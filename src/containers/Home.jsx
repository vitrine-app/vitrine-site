import React from 'react';
import { withSiteData, Link, Head } from 'react-static';
import styled from 'styled-components';

import HomePageText from '../components/HomePageText';
import HomePageScreen from '../components/HomePageScreen';

export default withSiteData(({ title, slogan }) => (
    <div>
      <Head>
        <title>{title} • {slogan}</title>
      </Head>
      <MainSection>
        <TextSection>
          <Slogan>{slogan}.</Slogan>
          <Desc>
            <strong>{title}</strong> is an elegant yet simple software you can use to regroup every game on your computer.
          </Desc>
          <p style={{ textAlign: 'center' }}>
            <MainButton to={'/#main-section'}>Let me see what it's all about!</MainButton>
            <DownloadLink to={'/about'}>Or take me straight to the download page!</DownloadLink>
          </p>
        </TextSection>
        <HomePageScreen/>
      </MainSection>
      <HomePageText/>
    </div>
));

const MainSection = styled.section`
  display: flex;
  padding: 0 14%;
  color: #9E9589;
`;

const TextSection = styled.section`
  width: 33.33%;
`;

const Slogan = styled.h2`
  font-weight: 500;
  font-size: 30px;
`;

const Desc = styled.p`
  font-size: 18px;
  margin-bottom 40px;
`;

const MainButton = styled(Link)`
  display: inline-block;
  padding: 15px 20px;
  border-radius: 4px;
  background-color: rgba(199, 120, 63, 0.85);
  color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 1px 18px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  font-size: 0.9.rem;
  letter-spacing: 0.5px;
  transition: all 0.3s;
  
  &:hover {
    background-color: rgba(199, 120, 63, 1);
    transform: translateY(-5px);
    transform: scale(1.05, 1.05);
    transition: all 0.2s;
   }
`;

const DownloadLink = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.65);
  transition: all 0.3s;
  
  &:hover {
    color: rgba(255, 255, 255, 0.85);
  }
`;
