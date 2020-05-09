import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import AccountNotif from './AccountNotif';
import { Link } from 'react-router-dom';

const MenuBarStyled = styled.div`
  width: 100%;
  height: 60px;
  background: #ffffff;
  box-shadow: 10px 5px 30px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 30px 30px;
  position: fixed;
  top: 0;

  .link {
    color: #222831;
    text-decoration: none;
  }
  .link:hover {
    color: #222831;
  }
`;

const AccountWrapper = styled.div`
  position: fixed;
  top: 15px;
  right: 20px;
`;

const MenuBar = () => {
  return (
    <MenuBarStyled>
      <Link to="/dashboard" className="link">
        <Logo />
      </Link>
      <AccountWrapper>
        <AccountNotif />
      </AccountWrapper>
    </MenuBarStyled>
  );
};

export default MenuBar;
