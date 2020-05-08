import React from 'react';
import styled from 'styled-components';
import welcome from '../../assets/welcome.png';

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

const WelcomeText = styled.div`
  margin-left: 10px;
  padding-top: 20px;
  width: 70%;
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
        <LastTopic>
          Materi terakhir yang kamu pelajari adalah Percabangan
        </LastTopic>
        <LearnNow>Pelajari Sekarang</LearnNow>
      </WelcomeText>
    </WelcomeStyled>
  );
};

export default WelcomeSection;
