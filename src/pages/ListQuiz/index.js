import React from 'react';
import { MainWrapper, MainContent } from '../../components/homeComponents';
import LeftMenu from '../../components/LeftMenu';
import RightMenu from '../../components/RightMenu';
import MiddleMenu from '../../components/MiddleMenu';

const ListQuiz = () => {
  return (
    <MainWrapper>
      <LeftMenu />
      <RightMenu />
      <MainContent>
        <h2>Quiz</h2>
        <MiddleMenu></MiddleMenu>
      </MainContent>
    </MainWrapper>
  );
};

export default ListQuiz;
