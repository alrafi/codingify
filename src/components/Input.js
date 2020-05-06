import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.div`
  margin-bottom: 20px;

  p {
    font-size: 100%;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 10px;
  }

  input {
    width: 300px;
    border: none;
    outline: none;
    padding: 10px 0;
    border-bottom: 2px solid #000;
  }
`;

const Input = ({ name, placeholder, focus }) => {
  return (
    <InputStyled>
      <p>{name}</p>
      <input type="text" placeholder={placeholder} autoFocus={focus} />
    </InputStyled>
  );
};

export default Input;
