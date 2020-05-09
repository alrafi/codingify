import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const LeftMenuStyled = styled.div`
  height: 100vh;
  width: 15%;
  background-color: #fff;
  position: fixed;
  left: 0;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
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

const LeftMenu = () => {
  return (
    <LeftMenuStyled>
      <Logo />
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
    </LeftMenuStyled>
  );
};

export default LeftMenu;