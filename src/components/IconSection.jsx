import styled from 'styled-components';
import React from 'react';
import CrossFadeImage from 'react-crossfade-image'; 

import iconHolder from '../static/img/icon-holder.png';
import steam from '../static/img/steam.png';
import origin from '../static/img/origin.png';
import battleNet from '../static/img/battle-net.png';
import emulator from '../static/img/emulator.png';
	
export default class IconSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { i: 0 };
    this.switchIcon = this.switchIcon.bind(this);
    this.intervalId = setInterval(this.switchIcon, this.props.timer);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  switchIcon() {
    if (this.state.i === this.props.icons.length - 1)
      this.setState({ i: 0 });
    else
      this.setState({ i: this.state.i + 1 });
  }

  render() {
    if (this.props.right)
      return (
        <WrappedSection>
          <TextDivRight>
            <Title>{this.props.title}</Title>
            {this.props.text}
          </TextDivRight>
          <IconDiv>
            <CrossFadeImage
              src={this.props.icons[this.state.i]}
              timingFunction={'ease-out'}
              style={{ width: 196, margin: '122px 114px', maxWidth: 'none' }}
            />
          </IconDiv>
        </WrappedSection>
      );
    else
      return (
        <WrappedSection>
          <IconDiv>
            <CrossFadeImage
              src={this.props.icons[this.state.i]}
              timingFunction={'ease-out'}
              style={{ width: 196, margin: '122px 114px', maxWidth: 'none' }}
            />
          </IconDiv>
          <TextDiv>
            <Title>{this.props.title}</Title>
            {this.props.text}
          </TextDiv>
        </WrappedSection>
      );
  }
}

const WrappedSection = styled.section`
  display: flex;
  padding: 0 13%;
`;

const IconDiv = styled.div`
  width: 450px;
  height: 450px;
  background: url(${iconHolder}) no-repeat;
`;

const TextDiv = styled.div`
  margin-left: -20px;
  margin-right: 25%;
  padding: 130px 0;
  font-weight: 400;

  p {
    color: #777371;
    font-weight: 400;
    font-size: 18px;
  }
`;

const TextDivRight = styled.div`
  margin-left: 25%;
  margin-right: -20px;
  padding: 130px 0;
  font-weight: 400;

  p {
    color: #777371;
    font-weight: 400;
    font-size: 18px;
  }
`;

const Title = styled.span`
  font-size: 25px;
  font-weight: 500;
  display: block;
`;
