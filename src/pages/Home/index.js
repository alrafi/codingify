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
  allTimeTable,
  pekanIniTable,
} from '../../components/homeComponents';
import RankTable from './RankTable';
import LearnItem from './LearnItem';
import LeftMenu from '../../components/LeftMenu';
import RightMenu from '../../components/RightMenu';
import WelcomeSection from './WelcomeSection';

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
