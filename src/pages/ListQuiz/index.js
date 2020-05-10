import React from 'react';
import styled from 'styled-components';
import { MainWrapper, MainContent } from '../../components/homeComponents';
import LeftMenu from '../../components/LeftMenu';
import RightMenu from '../../components/RightMenu';
import MiddleMenu from '../../components/MiddleMenu';
import { Link } from 'react-router-dom';
import { dataQuiz } from './dataQuiz';

const QuizWrapper = styled.div`
  width: 100%;
  margin: 20px 0;

  .link {
    color: #009d86;
    text-decoration: none;
  }
`;

const QuizItem = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 15px;
  background-color: #dbf6f6;
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 10px;
  color: #009d86;
`;

const QuizHead = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 15px;
  background-color: #009d86;
  padding: 0 20px;
  margin-bottom: 10px;
  font-size: 100%;
  color: #fff;
  display: flex;
  align-items: center;
`;

const QuizId = styled.p`
  width: 20px;
  margin-right: 40px;
`;

const QuizName = styled.p`
  width: 300px;
  margin-right: 90px;
`;

const QuizSolved = styled.p`
  width: 30px;
  margin-right: 120px;
`;

const QuizPoints = styled.p`
  width: 20px;
`;

const QuizTopic = styled.p`
  font-size: 70%;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #009d86;
`;

const ListQuiz = () => {
  return (
    <MainWrapper>
      <LeftMenu />
      <RightMenu />
      <MainContent>
        <h2>Quiz</h2>
        <MiddleMenu>
          <QuizWrapper>
            <QuizHead>
              <QuizId>No.</QuizId>
              <QuizName>Nama Kuis</QuizName>
              <QuizSolved>Diselesaikan</QuizSolved>
              <QuizPoints>Poin</QuizPoints>
            </QuizHead>
            {dataQuiz.map(({ id, name, topic, solved, points }) => {
              return (
                <Link to="/quiz" className="link">
                  <QuizItem>
                    <QuizId>{id}</QuizId>
                    <NameWrapper>
                      <QuizName>{name}</QuizName>
                      <QuizTopic>{topic}</QuizTopic>
                    </NameWrapper>
                    <QuizSolved>{solved}</QuizSolved>
                    <QuizPoints>+{points}</QuizPoints>
                  </QuizItem>
                </Link>
              );
            })}
          </QuizWrapper>
        </MiddleMenu>
      </MainContent>
    </MainWrapper>
  );
};

export default ListQuiz;
