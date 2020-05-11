import React from 'react';
import styled from 'styled-components';
import {
  MainWrapper,
  MainContent,
  InfoSection,
  LearnSection,
  ShowAll,
  LeaderboardSection,
  LeaderboardTitle,
  RankName,
  RankWrapper,
  allTimeTable,
  pekanIniTable,
} from '../../components/homeComponents';
import RankTable from './RankTable';
import LearnItem from './LearnItem';
import LeftMenu from '../../components/LeftMenu';
import RightMenu from '../../components/RightMenu';
import WelcomeSection from './WelcomeSection';
import percabangan from '../../assets/topic-icon/4conditional.png';
import perulangan from '../../assets/topic-icon/5looping.png';
import array from '../../assets/topic-icon/7array.png';
import rightArrow from '../../assets/right-arrow.png';
import { Link } from 'react-router-dom';

const dataHome = [
  {
    idName: 'Percabangan',
    enName: 'Conditional',
    img: `${percabangan}`,
  },
  {
    idName: 'Perulangan',
    enName: 'Looping',
    img: `${perulangan}`,
  },
  {
    idName: 'Array',
    enName: 'Array',
    img: `${array}`,
  },
];

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

const ContentHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    margin-left: 10px;
    margin-top: -15px;
    width: 15px;
    height: 15px;
  }
`;

const Home = () => {
  return (
    <MainWrapper>
      <LeftMenu></LeftMenu>
      <RightMenu></RightMenu>
      <MainContent>
        <h2>Dashboard</h2>
        <WelcomeSection></WelcomeSection>
        <InfoSection>
          <LearnSection>
            <p>Learn</p>
            {dataHome.map(({ idName, enName, img }) => {
              return (
                <Link to="learn" className="link">
                  <LearnItem idName={idName} enName={enName} img={img} />
                </Link>
              );
            })}
            <Link to="/learn-topics" className="link">
              <ContentHome>
                <ShowAll>Lihat semua</ShowAll>
                <img src={rightArrow} alt="next" />
              </ContentHome>
            </Link>
          </LearnSection>
          <LeaderboardSection>
            <LeaderboardTitle>Leaderboard</LeaderboardTitle>
            <RankWrapper>
              <RankName>Top all-time</RankName>
              {allTimeTable.map((item) => {
                return (
                  <RankTable
                    id={item.id}
                    name={item.name}
                    points={item.points}
                  />
                );
              })}
              <Link to="/leaderboard" className="link">
                <Content>
                  <ShowAll>Lihat semua</ShowAll>
                  <img src={rightArrow} alt="next" />
                </Content>
              </Link>
            </RankWrapper>
            <RankWrapper>
              <RankName>Pekan ini</RankName>
              {pekanIniTable.map((item) => {
                return (
                  <RankTable
                    id={item.id}
                    name={item.name}
                    points={item.points}
                  />
                );
              })}
            </RankWrapper>
          </LeaderboardSection>
        </InfoSection>
      </MainContent>
    </MainWrapper>
  );
};

export default Home;
