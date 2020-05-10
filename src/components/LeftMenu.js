import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const LeftMenuStyled = styled.div`
  height: 100vh;
  width: 15%;
  background-color: #fff;
  position: fixed;
  left: 0;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);

  .link {
    color: #222831;
    text-decoration: none;
  }
`;

const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;

  .link {
    color: #222831;
    text-decoration: none;
  }
  .link:hover {
    color: #222831;
  }
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

  &:hover {
    background-color: #75c6d0;
  }
`;

const LeftMenu = () => {
  return (
    <LeftMenuStyled>
      <Link to="/dashboard" className="link">
        <Logo />
      </Link>
      <SidebarMenu>
        <Link to="/dashboard" className="link">
          <MenuItem>
            <p>Dashboard</p>
          </MenuItem>
        </Link>
        <Link to="/learn-topics" className="link">
          <MenuItem>
            <p>Learn</p>
          </MenuItem>
        </Link>
        <Link to="/quiz-list" className="link">
          <MenuItem>
            <p>Quiz</p>
          </MenuItem>
        </Link>
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
