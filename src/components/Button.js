import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  display: inline-block;
  width: ${({ width }) => (width ? width : '120px')};
  height: 30px;
  background-color: #009d86;
  text-align: center;
  color: #fff;
  border-radius: 40px;
  box-shadow: 2px 2px 15px rgba(25, 99, 115, 0.2);
  padding-top: 3px;
  font-size: 80%;
  cursor: pointer;
  ${({ menubar }) =>
    menubar &&
    `
    margin-left: 20px;
  `}
  ${({ subtitle }) =>
    subtitle &&
    `
    font-weight: 300;
    font-size: 80%;
    letter-spacing: 2px;
  `}
`;

const Button = ({ width, menubar, subtitle, children, onClick }) => {
  return (
    <StyledButton
      menubar={menubar}
      subtitle={subtitle}
      onClick={onClick}
      width={width}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
