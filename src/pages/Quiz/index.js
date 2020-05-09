import React from 'react';
import styled from 'styled-components';
import QuizSection from './QuizSection';
import MenuBar from '../../components/MenuBar';
import abstraksi from '../../assets/abstraksi.png';
import algoritma from '../../assets/algoritma.png';
import dekomposisi from '../../assets/dekomposisi.png';
import pola from '../../assets/pola.png';
import { Link } from 'react-router-dom';
import { MainWrapper } from './mainWrapper';
import { SubTopic, Text } from '../../components/contentComponent';

const CompThinkingSection = styled.div`
  width: 64%;
  height: 85vh;
  background: #ffffff;
  border-radius: 40px 0px 0px 0px;
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 20px;
`;

const ComponentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  .link {
    color: #009d86;
    text-decoration: none;
  }
  .link:hover {
    color: #009d86;
  }
`;
const ComponentItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 175px;
  background-color: #f5f6f7;
  border-radius: 20px;
  padding: 0 20px;
  cursor: pointer;

  &:hover {
    background-color: #dbf6f6;
  }

  .dekomposisi {
    width: 100px;
    height: 170px;
  }

  .abstraksi {
    width: 150px;
    height: 150px;
  }

  .algoritma {
    width: 130px;
    height: 160px;
  }

  .pola {
    width: 150px;
    height: 160px;
  }
`;

const ComponentName = styled.p`
  font-weight: 600;
  font-size: 180%;
  color: #009d86;
  margin-left: 20px;
`;

const Quiz = () => {
  return (
    <MainWrapper>
      <MenuBar />
      <QuizSection />
      <CompThinkingSection>
        <SubTopic>Komponen Computational Thinking</SubTopic>
        <Text>
          Silahkan pilih komponen computational thinking mana yang ingin
          dikerjakan.
        </Text>
        <ComponentWrapper>
          <Link to="/quiz-dekomposisi" className="link">
            <ComponentItem>
              <img
                src={dekomposisi}
                alt="Dekomposisi"
                className="dekomposisi"
              />
              <ComponentName>Dekomposisi</ComponentName>
            </ComponentItem>
          </Link>
          <Link to="/quiz-abstraksi" className="link">
            <ComponentItem>
              <img src={abstraksi} alt="Abstraksi" className="abstraksi" />
              <ComponentName>Abstraksi</ComponentName>
            </ComponentItem>
          </Link>
        </ComponentWrapper>
        <ComponentWrapper>
          <Link to="/quiz-algoritma" className="link">
            <ComponentItem>
              <img src={algoritma} alt="Algoritma" className="algoritma" />
              <ComponentName>Algoritma</ComponentName>
            </ComponentItem>
          </Link>
          <Link to="/quiz-pola" className="link">
            <ComponentItem>
              <img src={pola} alt="Pengenalan Pola" className="pola" />
              <ComponentName>Pengenalan Pola</ComponentName>
            </ComponentItem>
          </Link>
        </ComponentWrapper>
      </CompThinkingSection>
    </MainWrapper>
  );
};

export default Quiz;
