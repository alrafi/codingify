import React from 'react';
import styled from 'styled-components';
import { MainWrapper, MainContent } from '../../components/homeComponents';
import LeftMenu from '../../components/LeftMenu';
import RightMenu from '../../components/RightMenu';
import MiddleMenu from '../../components/MiddleMenu';
import RewardItem from './RewardItem';
import rightArrow from '../../assets/right-arrow.png';
import laptop from '../../assets/laptop.png';
import { Link } from 'react-router-dom';

const ProfileTitle = styled.p`
  font-size: 120%;
  font-weight: bold;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const ConceptQuiz = styled.div`
  width: 440px;
  height: 150px;
  background-color: #dbf6f6;
  border-radius: 15px;
  margin-right: 20px;
  display: flex;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 110px;
    height: 130px;
  }
`;

const RankInfo = styled.div`
  height: 150px;
  width: 200px;
  background-color: #dbf6f6;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Rank = styled.p`
  font-size: 120%;
  color: #009d86;
`;

const Position = styled.p`
  font-size: 180%;
  color: #3d3d3d;
`;

const TotalPoints = styled.p`
  font-size: 90%;
  color: #3d3d3d;
`;

const RewardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  .link {
    text-decoration: none;
    color: #3d3d3d;
  }
`;

const Last = styled.p`
  font-size: 100%;
  color: #009d86;
`;

const Content = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 10px;
    width: 15px;
    height: 15px;
  }
`;

const Profile = () => {
  return (
    <MainWrapper>
      <LeftMenu />
      <RightMenu />
      <MainContent>
        <h2>Profile</h2>
        <MiddleMenu>
          <ProfileTitle>Koleksi Reward Kamu</ProfileTitle>
          <InfoWrapper>
            <ConceptQuiz>
              <Info>
                <Last>Materi Terakhir yang dipelajari:</Last>
                <Link to="/learn" className="link">
                  <Content>
                    <p>Array</p>
                    <img src={rightArrow} alt="next" />
                  </Content>
                </Link>

                <Last>Kuis terakhir diselesaikan:</Last>
                <Link to="/learn" className="link">
                  <Content>
                    <p>Rotasi Matriks</p>
                    <img src={rightArrow} alt="next" />
                  </Content>
                </Link>
              </Info>
              <img src={laptop} alt="laptop" />
            </ConceptQuiz>
            <RankInfo>
              <Rank>Peringkat</Rank>
              <Position>#2</Position>
              <TotalPoints>112 Poin</TotalPoints>
            </RankInfo>
          </InfoWrapper>
          <RewardWrapper>
            <RewardItem
              title="CONCEPT"
              color="#009d86"
              points="5"
              description="Kamu menyelesaikan 3 konsep"
            />
            <RewardItem
              title="QUIZ"
              color="#FF175D"
              points="7"
              description="Kamu menyelesaikan 2 kuis"
            />
            <RewardItem
              title="COMPUTATIONAL THINKING"
              color="#FF8717"
              points="4"
              description="Kamu menyelesaikan kuis dengan computational thinking"
            />
            <RewardItem
              title="COMPUTATIONAL THINKING"
              color="#FF8717"
              points="4"
              description="Kamu menyelesaikan kuis dengan computational thinking"
            />
            <RewardItem
              title="CONCEPT"
              color="#009d86"
              points="5"
              description="Kamu menyelesaikan 3 konsep"
            />
            <RewardItem
              title="CONCEPT"
              color="#009d86"
              points="5"
              description="Kamu menyelesaikan 3 konsep"
            />
            <RewardItem
              title="QUIZ"
              color="#FF175D"
              points="7"
              description="Kamu menyelesaikan 2 kuis"
            />
          </RewardWrapper>
        </MiddleMenu>
      </MainContent>
    </MainWrapper>
  );
};

export default Profile;
