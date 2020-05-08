import styled from 'styled-components';

export const MainWrapper = styled.div`
  background-color: #f6f4fc;
  position: relative;
`;

export const MainContent = styled.div`
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
export const InfoSection = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const LearnSection = styled.div`
  width: 60%;
  background-color: #fff;
  margin-right: 20px;
  border-radius: 20px 20px 0 0;
  padding: 20px;

  p {
    margin-bottom: 20px;
  }
`;

export const ShowAll = styled.p`
  text-align: right;
  font-size: 60%;
`;

// LEADERBOARD SECTION
export const LeaderboardSection = styled.div`
  width: 40%;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  padding: 20px;
`;

export const LeaderboardTitle = styled.p`
  margin-bottom: 20px;
`;

export const RankName = styled.p`
  font-size: 80%;
  margin-bottom: 10px;
`;

export const RankWrapper = styled.div`
  margin-bottom: 20px;
`;
