import React from 'react';
import styled from 'styled-components';
import avatar from '../assets/avatar.png';
import Button from './Button';
import AccountNotif from './AccountNotif';
import { Link } from 'react-router-dom';

// RIGHT MENU
const RightMenuStyled = styled.div`
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

const RightMenu = () => {
  return (
    <RightMenuStyled>
      <AccountNotif />
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
        <Link to="/profile">
          <Button>Lihat Profil</Button>
        </Link>
      </ButtonWrapper>
    </RightMenuStyled>
  );
};

export default RightMenu;
