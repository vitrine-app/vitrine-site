import React from 'react';
import styled from 'styled-components';

import screenShot from '../static/img/screenshot.jpg';

export default () => (
    <ImgSection>
      <ImageWrapper>
        <AbsoluteWraper>
          <Shadow/>
          <Screenshot src={screenShot}/>
        </AbsoluteWraper>
      </ImageWrapper>
    </ImgSection>
);

const ImgSection = styled.section`
  width: 66.66%;
  padding: 30px 0 0 30px;
`;

const ImageWrapper = styled.div`
  display: block;
  max-width: 90%;
  position: relative;
  overflow: hidden;
  padding-top: 62%;
  margin-left: auto;
  margin-right: 0;
`;

const AbsoluteWraper = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  transform: translateY(30px);
  box-align: center;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  
  &:hover {
    transform: translateY(0);
  }
`;

const Shadow = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 40%;
  right: 0;
  transition: opacity 0.6s;
  bottom: 0;
  background: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.4));
`;

const Screenshot = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 4px;
`;
