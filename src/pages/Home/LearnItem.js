import React from 'react';
import styled from 'styled-components';
import rightNext from '../../assets/right-next.png';
import percabangan from '../../assets/percabangan.png';

const LearnStyled = styled.div`
  width: 100%;
  height: 120px;
  background-color: #dbf6f6;
  border-radius: 15px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  margin-bottom: 20px;
`;

const TopicName = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  margin-top: 15px;
  color: #009d86;
  width: 160px;
`;

const IDName = styled.p`
  font-size: 140%;
`;

const ENName = styled.p`
  font-size: 70%;
  font-style: italic;
`;

const TopicIcon = styled.div`
  width: 65px;
  height: 65px;
  background: url(${percabangan});
  background-size: cover;
  margin-right: 20px;
`;

const NextIcon = styled.div`
  width: 20px;
  height: 50px;
  background: url(${rightNext});
  background-size: cover;
`;

const LearnItem = ({ idName, enName }) => {
  return (
    <LearnStyled>
      <TopicIcon></TopicIcon>
      <TopicName>
        <IDName>{idName}</IDName>
        <ENName>{enName}</ENName>
      </TopicName>
      <NextIcon></NextIcon>
    </LearnStyled>
  );
};

export default LearnItem;
