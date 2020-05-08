import React from 'react';
import styled from 'styled-components';

import RankTable from './RankTable';
import LearnItem from './LearnItem';
import LeftMenu from '../../components/LeftMenu';
import WelcomeSection from './WelcomeSection';

import avatar from '../../assets/avatar.png';
import notif from '../../assets/notif.png';
import user from '../../assets/user.png';
import downArrow from '../../assets/down-arrow.png';
import Button from '../../components/Button';

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

// data at Dashboard
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

// RIGHT MENU
const RightMenu = styled.div`
  height: 100vh;
  width: 25%;
  background-color: #fff;
  position: fixed;
  right: 0;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const AccountNotif = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
`;

const AccountControl = styled.div`
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  background: #009d86;
  width: 120px;
  box-shadow: 2px 2px 15px rgba(25, 99, 115, 0.2);
  border-radius: 40px;

  p {
    color: #fff;
    font-size: 90%;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const RealName = styled.p`
  font-size: 100%;
  font-weight: bold;
`;

const Username = styled.p`
  font-size: 70%;
`;

const DataProfile = styled.div`
  display: flex;
  flex-direction: column;
`;

const AchieveWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const AchieveInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 50%;
`;

const AchieveCount = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  p {
    font-size: 180%;
    color: ${({ color }) => color};
  }
`;

const AchieveName = styled.p`
  font-weight: bold;
  font-size: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const Home = () => {
  return (
    <MainWrapper>
      <LeftMenu></LeftMenu>
      <RightMenu>
        <AccountNotif>
          <img
            src={notif}
            alt="notification"
            style={{ width: '30px', height: '30px', marginRight: '10px' }}
          />
          <AccountControl>
            <img
              src={user}
              alt="user"
              style={{ width: '23px', height: '21px' }}
            />
            <p>alrafi</p>
            <img
              src={downArrow}
              alt="open"
              style={{ width: '14px', height: '5px' }}
            />
          </AccountControl>
        </AccountNotif>
        <ProfileInfo>
          <img
            src={avatar}
            alt="avatar"
            style={{ width: '120px', height: '120px', marginBottom: '10px' }}
          />
          <RealName>Hafis Alrafi</RealName>
          <Username>@alrafi</Username>
        </ProfileInfo>
        <DataProfile>
          <AchieveWrapper>
            <AchieveInfo>
              <AchieveCount bgColor="rgba(225, 230, 12, 0.2)" color="#C7CA25">
                <p>24</p>
              </AchieveCount>
              <AchieveName>Concept</AchieveName>
            </AchieveInfo>
            <AchieveInfo>
              <AchieveCount bgColor="rgba(228, 92, 92, 0.3)" color="#BD3F2E">
                <p>61</p>
              </AchieveCount>
              <AchieveName>Quiz Solved</AchieveName>
            </AchieveInfo>
          </AchieveWrapper>
          <AchieveWrapper>
            <AchieveInfo>
              <AchieveCount bgColor="rgba(89, 249, 86, 0.65)" color="#399D0A">
                <p>37</p>
              </AchieveCount>
              <AchieveName>Rewards</AchieveName>
            </AchieveInfo>
            <AchieveInfo>
              <AchieveCount bgColor="rgba(219, 246, 246, 0.8)" color="#11D1DD">
                <p>112</p>
              </AchieveCount>
              <AchieveName>Points</AchieveName>
            </AchieveInfo>
          </AchieveWrapper>
        </DataProfile>
        <ButtonWrapper>
          <Button>Lihat Profil</Button>
        </ButtonWrapper>
      </RightMenu>
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
