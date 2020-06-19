import React from 'react';
import styled from 'styled-components';
import welcome from '../../assets/welcome.png';
import { Link } from 'react-router-dom';
import rightArrow from '../../assets/right-arrow.png';

const WelcomeStyled = styled.div`
  width: 100%;
  height: 120px;
  background-color: #dbf6f6;
  border-radius: 20px;
  display: flex;
  padding-left: 20px;

  img {
    width: 160px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    margin-left: 10px;
    width: 15px;
    height: 15px;
  }
`;

const WelcomeText = styled.div`
  margin-left: 10px;
  padding-top: 20px;
  width: 70%;

  .link {
    text-decoration: none;
    color: #3d3d3d;
  }
`;

const Greeting = styled.p`
  font-size: 120%;
  color: #009d86;
  font-weight: 600;
  margin-bottom: 5px;
`;

const LastTopic = styled.p`
  font-weight: normal;
  font-size: 70%;
  color: #3d3d3d;
  margin-bottom: 10px;
`;

const LearnNow = styled.p`
  font-size: 70%;
  color: #3d3d3d;
  text-align: right;
`;

const WelcomeSection = () => {
  return (
    <WelcomeStyled>
      <img src={welcome} alt="welcome" />
      <WelcomeText>
        <Greeting>Selamat datang kembali, alrafi</Greeting>
        <LastTopic>Materi terakhir yang kamu pelajari adalah Array</LastTopic>
        <Link to="/learn" className="link">
          <Content>
            <LearnNow>Pelajari Sekarang</LearnNow>
            <img src={rightArrow} alt="next" />
          </Content>
        </Link>
      </WelcomeText>
    </WelcomeStyled>
  );
};

export default WelcomeSection;
