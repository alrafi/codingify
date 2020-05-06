import React, { Component } from 'react';
import MenuBar from './MenuBar';
import styled from 'styled-components';
import Button from '../../components/Button';
import bg from '../../assets/bg1.png';
import coding from '../../assets/coding.png';

const MainWrapper = styled.div`
  height: 100vh;
  margin: 0 50px;
  padding-top: 20px;
  position: relative;
`;

const Subtitle = styled.h2`
  font-weight: 600;
  font-size: 140%;
  width: 600px;
  margin-top: 220px;
  margin-bottom: 30px;
`;

const Background = styled.div`
  background: url(${bg});
  background-position: center;
  background-size: cover;
  width: 700px;
  height: 500px;
  position: absolute;
  bottom: 0;
  right: -50px;
`;

const ImageCoding = styled.div`
  background: url(${coding});
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 380px;
  position: absolute;
  bottom: 100px;
  right: 140px;
`;

class LandingPage extends Component {
  render() {
    return (
      <MainWrapper>
        <MenuBar></MenuBar>
        <Subtitle>
          Belajar pemrograman dengan konsep berpikir komputasional yang
          interaktif by hafisalrafi.
        </Subtitle>
        <Button subtitle>MULAI</Button>
        <Background></Background>
        <ImageCoding></ImageCoding>
      </MainWrapper>
    );
  }
}

export default LandingPage;
