import React from 'react';
import styled from 'styled-components';

// RANK TABLE
const RankStyled = styled.div``;

const RankItem = styled.div`
  width: 100%;
  height: 40px;
  background-color: #dbf6f6;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 10px;

  p {
    font-size: 80%;
    margin-right: 10px;
  }
`;

const Points = styled.p`
  margin-left: auto;
`;

const RankTable = ({ id, name, points }) => {
  return (
    <RankStyled>
      <RankItem>
        <p>{id}</p>
        <p>{name}</p>
        <Points>{points} pts</Points>
      </RankItem>
    </RankStyled>
  );
};

export default RankTable;
