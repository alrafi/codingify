import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 90%;
  .link {
    text-decoration: none;
  }
`;

const ListItem = styled.li`
  display: inline-block;
  margin-left: 20px;
`;

const MenuBar = () => {
  return (
    <MenuWrapper>
      <div className="title">
        <h1>Codingify</h1>
      </div>
      <MenuList>
        <ListItem>Learn</ListItem>
        <ListItem>Quiz</ListItem>
        <ListItem>Leaderboard</ListItem>
        <ListItem>About</ListItem>
        <Link to="/login" className="link">
          <Button menubar>Sign In</Button>
        </Link>
      </MenuList>
    </MenuWrapper>
  );
};

export default MenuBar;
