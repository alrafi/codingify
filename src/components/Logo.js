import React from 'react';
import styled from 'styled-components';
import logo from '../assets/codingify-logo.png';

const LogoStyled = styled.div`
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

const Logo = () => {
  return (
    <LogoStyled>
      <img src={logo} alt="codingify" />
      <h1>Codingify</h1>
    </LogoStyled>
  );
};

export default Logo;
