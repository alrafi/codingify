import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/codingify-logo.png';
import welcome from '../../assets/welcome.png';

const MainWrapper = styled.div`
  background-color: #f6f4fc;
  position: relative;
`;

const LeftMenu = styled.div`
  height: 100vh;
  width: 300px;
  background-color: #fff;
  position: fixed;
  left: 0;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
`;

const RightMenu = styled.div`
  height: 100vh;
  width: 400px;
  background-color: #fff;
  position: fixed;
  right: 0;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
`;

const MainContent = styled.div`
  height: 120vh;
  /* width: 40%; */
  /* background-color: green; */
  border: 1px solid #000;
  position: absolute;
  left: 25%;
  right: 32%;
  padding-top: 20px;

  /* right: 0; */

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
  /* margin-bottom: 200px; */
`;

const MenuItem = styled.div`
  background-color: #dbf6f6;
  margin-left: 50px;
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
  margin-bottom: 5px;
`;

const LearnNow = styled.p`
  font-size: 70%;
  color: #3d3d3d;
  text-align: right;
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
      </MainContent>
    </MainWrapper>
  );
};

export default Home;
