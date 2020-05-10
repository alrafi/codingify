import React from 'react';
import styled from 'styled-components';
import concept from '../../assets/rewards/concept.png';

const RewardItemStyled = styled.div`
  height: 250px;
  width: 200px;
  border-radius: 15px;
  background-color: ${({ color }) => color};
  box-shadow: 1px 5px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: center;
  align-items: center;
`;

const RewardTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-right: 5px;
    width: 25px;
    height: auto;
  }

  p {
    font-size: 100%;
    text-align: center;
  }
`;

const TotalPoints = styled.p`
  font-size: 320%;
`;

const PointName = styled.p`
  font-size: 140%;
`;

const Description = styled.p`
  font-size: 70%;
  width: 150px;
  text-align: center;
`;

const RewardItem = ({ title, points, description, color }) => {
  return (
    <RewardItemStyled color={color}>
      <RewardTitle>
        <img src={concept} alt="rewards" />
        <p>{title}</p>
      </RewardTitle>
      <TotalPoints>+{points}</TotalPoints>
      <PointName>POINTS</PointName>
      <Description>{description}</Description>
    </RewardItemStyled>
  );
};

export default RewardItem;
