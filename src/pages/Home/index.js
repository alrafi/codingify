import React from 'react';
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
} from './components/homeComponents';
import RankTable from './RankTable';
import LearnItem from './LearnItem';
import LeftMenu from '../../components/LeftMenu';
import RightMenu from '../../components/RightMenu';
import WelcomeSection from './WelcomeSection';

const allTimeTable = [
  {
    id: 1,
    name: 'bryanmax',
    points: 197,
  },
  {
    id: 2,
    name: 'alrafi',
    points: 112,
  },
  {
    id: 3,
    name: 'star97',
    points: 83,
  },
  {
    id: 4,
    name: 'merahputih',
    points: 77,
  },
];

const pekanIniTable = [
  {
    id: 1,
    name: 'martinwhite',
    points: '+28',
  },
  {
    id: 2,
    name: 'ujanglagi4',
    points: '+21',
  },
  {
    id: 3,
    name: 'pakdangklek',
    points: '+17',
  },
  {
    id: 4,
    name: 'tuanvin12',
    points: '+14',
  },
];

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
            <LearnItem idName="Percabangan" enName="Conditional" />
            <LearnItem idName="Perulangan" enName="Looping" />
            <LearnItem idName="Array" enName="Array" />
            <ShowAll>Lihat semua</ShowAll>
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
              <ShowAll>Lihat semua</ShowAll>
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
              <ShowAll>Lihat semua</ShowAll>
            </RankWrapper>
          </LeaderboardSection>
        </InfoSection>
      </MainContent>
    </MainWrapper>
  );
};

export default Home;
