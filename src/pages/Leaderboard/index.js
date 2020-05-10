import React from 'react';
import styled from 'styled-components';
import { MainWrapper, MainContent } from '../../components/homeComponents';
import LeftMenu from '../../components/LeftMenu';
import RightMenu from '../../components/RightMenu';
import MiddleMenu from '../../components/MiddleMenu';
import { dataTable } from './dataTable';

const TableWrapper = styled.div`
  width: 100%;
  margin: 20px 0;

  .link {
    color: #009d86;
    text-decoration: none;
  }
`;

const TableHead = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 15px;
  background-color: #009d86;
  padding: 0 20px;
  margin-bottom: 10px;
  font-size: 100%;
  display: flex;
  align-items: center;
  color: #fff;
`;

const TableItem = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 15px;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 10px;
  color: #009d86;
`;

const TableId = styled.p`
  width: 20px;
  margin-right: 40px;
`;

const Username = styled.p`
  width: 120px;
  margin-right: 40px;
`;

const Solved = styled.p`
  width: 150px;
  margin-right: 20px;
`;

const Concept = styled.p`
  width: 100px;
  margin-right: 40px;
`;

const Rewards = styled.p`
  width: 100px;
  margin-right: 40px;
`;

const Points = styled.p`
  width: 20px;
  margin-right: 40px;
`;

const Leaderboard = () => {
  return (
    <MainWrapper>
      <LeftMenu />
      <RightMenu />
      <MainContent>
        <h2>Leaderboard</h2>
        <MiddleMenu>
          <TableWrapper>
            <TableHead>
              <TableId>No.</TableId>
              <Username>Username</Username>
              <Solved>Quiz Solved</Solved>
              <Concept>Concept</Concept>
              <Rewards>Rewards</Rewards>
              <Points>Points</Points>
            </TableHead>
            {dataTable.map(
              ({ id, username, solved, concept, rewards, points, bgColor }) => {
                return (
                  <TableItem bgColor={bgColor}>
                    <TableId>{id}</TableId>
                    <Username>{username}</Username>
                    <Solved>{solved}</Solved>
                    <Concept>{concept}</Concept>
                    <Rewards>{rewards}</Rewards>
                    <Points>{points}</Points>
                  </TableItem>
                );
              }
            )}
          </TableWrapper>
        </MiddleMenu>
      </MainContent>
    </MainWrapper>
  );
};

export default Leaderboard;
