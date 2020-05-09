import React from 'react';
import styled from 'styled-components';
import notif from '../assets/notif.png';
import user from '../assets/user.png';
import downArrow from '../assets/down-arrow.png';

const AccountNotifStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
`;

const AccountControl = styled.div`
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  background: #009d86;
  width: 120px;
  box-shadow: 2px 2px 15px rgba(25, 99, 115, 0.2);
  border-radius: 40px;
  cursor: pointer;

  p {
    color: #fff;
    font-size: 90%;
  }
`;

const AccountNotif = () => {
  return (
    <AccountNotifStyled>
      <img
        src={notif}
        alt="notification"
        style={{
          width: '30px',
          height: '30px',
          marginRight: '10px',
          cursor: 'pointer',
        }}
      />
      <AccountControl>
        <img src={user} alt="user" style={{ width: '23px', height: '21px' }} />
        <p>alrafi</p>
        <img
          src={downArrow}
          alt="open"
          style={{ width: '14px', height: '5px' }}
        />
      </AccountControl>
    </AccountNotifStyled>
  );
};

export default AccountNotif;
