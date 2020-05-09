import styled from 'styled-components';

export const Topic = styled.p`
  font-size: 70%;
`;

export const SubTopic = styled.p`
  font-size: 120%;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 80%;
  line-height: 20px;
  margin-bottom: 10px;

  span {
    font-weight: bold;
  }
`;

export const CodeBox = styled.div`
  background-color: #f5f6f7;
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
`;

export const CodeText = styled.p`
  font-family: 'Fira Code', monospace;
  font-size: 70%;
  color: ${({ color }) => (color ? color : '#3d3d3d')};
`;

export const TextHighlight = styled.p`
  font-family: 'Fira Code', monospace;
  font-size: 90%;
  background-color: #d0d0d5;
  display: inline;
`;

export const SubTitle = styled.p`
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 80%;
  margin-top: 10px;
`;
