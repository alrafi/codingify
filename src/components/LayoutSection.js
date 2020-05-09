import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 32%;
  height: 85vh;
  background: #ffffff;
  border-radius: 0px 40px 0px 0px;
  position: fixed;
  left: 0;
  bottom: 0;
  overflow: auto;
  padding: 20px;
`;

export const MiddleSection = styled.div`
  width: 32%;
  height: 85vh;
  background: #ffffff;
  border-radius: 40px 40px 0px 0px;
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  padding: ${({ padding }) => (padding ? padding : '30px 0')};
`;

export const RightSection = styled.div`
  width: 32%;
  height: 85vh;
  background: #ffffff;
  border-radius: 40px 0px 0px 0px;
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 20px;
`;
