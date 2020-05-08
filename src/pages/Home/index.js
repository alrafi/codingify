import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/codingify-logo.png';
import welcome from '../../assets/welcome.png';

import RankTable from './RankTable';
import LearnItem from './LearnItem';

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

const MainWrapper = styled.div`
  background-color: #f6f4fc;
  position: relative;
`;

const LeftMenu = styled.div`
  height: 100vh;
  width: 15%;
  background-color: #fff;
  position: fixed;
  left: 0;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
`;

const RightMenu = styled.div`
  height: 100vh;
  width: 25%;
  background-color: #fff;
  position: fixed;
  right: 0;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
`;

const MainContent = styled.div`
  position: absolute;
  left: 18%;
  right: 28%;
  padding-top: 20px;

  h2 {
    font-size: 100%;
    margin-bottom: 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  margin-bottom: 100px;

  img {
    width: 25px;
    height: 30px;
    margin-right: 10px;
  }

  h1 {
    font-size: 110%;
  }
`;

const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  background-color: #dbf6f6;
  margin-left: 25px;
  height: 40px;
  margin-bottom: 30px;
  padding: 10px 0 0 20px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;

  p {
    font-size: 80%;
  }
`;

const WelcomeSection = styled.div`
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

const InfoSection = styled.div`
  display: flex;
  margin-top: 30px;
`;

const LearnSection = styled.div`
  width: 60%;
  background-color: #fff;
  margin-right: 20px;
  border-radius: 20px 20px 0 0;
  padding: 20px;

  p {
    margin-bottom: 20px;
  }
`;

const ShowAll = styled.p`
  text-align: right;
  font-size: 60%;
`;

// LEADERBOARD SECTION
const LeaderboardSection = styled.div`
  width: 40%;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  padding: 20px;
`;

const LeaderboardTitle = styled.p`
  margin-bottom: 20px;
`;

const RankName = styled.p`
  font-size: 80%;
  margin-bottom: 10px;
`;

const RankWrapper = styled.div`
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <MainWrapper>
      <LeftMenu>
        <Logo>
          <img src={logo} alt="codingify" />
          <h1>Codingify</h1>
        </Logo>
        <SidebarMenu>
          <MenuItem>
            <p>Dashboard</p>
          </MenuItem>
          <MenuItem>
            <p>Learn</p>
          </MenuItem>
          <MenuItem>
            <p>Quiz</p>
          </MenuItem>
          <MenuItem>
            <p>Leaderboard</p>
          </MenuItem>
          <MenuItem>
            <p>Profile</p>
          </MenuItem>
        </SidebarMenu>
      </LeftMenu>
      <RightMenu></RightMenu>
      <MainContent>
        <h2>Dashboard</h2>
        <WelcomeSection>
          <img src={welcome} alt="welcome" />
          <WelcomeText>
            <Greeting>Selamat datang kembali, alrafi</Greeting>
            <LastTopic>
              Materi terakhir yang kamu pelajari adalah Percabangan
            </LastTopic>
            <LearnNow>Pelajari Sekarang</LearnNow>
          </WelcomeText>
        </WelcomeSection>
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
