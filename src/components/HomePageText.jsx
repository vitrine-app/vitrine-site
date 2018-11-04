import styled from 'styled-components';
import { Head, Link, withSiteData } from 'react-static';
import React from 'react';

import IconSection from './IconSection';

import steam from '../static/img/steam.png';
import origin from '../static/img/origin.png';
import battleNet from '../static/img/battle-net.png';
import emulator from '../static/img/emulator.png';
import github from '../static/img/github.png';

export default withSiteData(({ title }) => (
  <TextSection id='main-section'>
    <SecondSection>
      <Wrapper>
        <Title>What is {title}?</Title>
        <Text>
          {title} is a modern game library for your PC that allows you to find and display games installed on your computer in one single place.
          It can automatically scans your computer folders to retrieve your games from <strong>Steam</strong>, <strong>Origin</strong> or <strong>Battle.net</strong>,
          uses a database to provide details about your games (developer, publisher, release date, screenshots, ...) and displays them in a smooth and simple interface.
          It can also measure the time spend playing a game and is synchronized to Steam playing times.
        </Text>
      </Wrapper>
    </SecondSection>
    <IconSection
      icons={[steam, origin, battleNet, emulator]}
      timer={4000}
      title={'Regroup games from everywhere'}
      text={<p>
        In addition to being able to add your games by yourself,
        Vitrine can get your games from Steam, Origin or Battle.net working in a centralized collection.
        </p>}
    />
    <IconSection
      right={true}
      icons={[github]}
      timer={0}
      title={'Open-source'}
      text={<p>
        Vitrine source code is open to everyone! Don't hesitate to visit our <Link to={'https://github.com/paul-roman/vitrine'}>GitHub repository</Link> if
        you're interested in participating to the project.
      </p>}
    />
  </TextSection>
));

const TextSection = styled.div`
  background-color: #EFEFEF;
  color: rgba(78, 72, 72, 0.94);
`;

const SecondSection = styled.section`
  padding: 40px 25%;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.span`
  font-size: 40px;
  font-weight: 300;
`;

const Text = styled.p`
  text-align: left;
  margin: 25px 0;
  font-size: 17px;
`;
