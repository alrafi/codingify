import React from 'react';
import styled from 'styled-components';
import notif from '../assets/notif.png';
import user from '../assets/user.png';
import logout from '../assets/logout.png';
import { Link } from 'react-router-dom';

const AccountNotifStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;

  .link {
    text-decoration: none;
  }
`;

const AccountControl = styled.div`
  display: flex;
  padding: 5px 15px;
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
      <Link to="/" className="link">
        <AccountControl>
          <img
            src={user}
            alt="user"
            style={{ width: '23px', height: '21px' }}
            onCLick={() => console.log('hi')}
          />
          <p>logout</p>
          <img
            src={logout}
            alt="open"
            style={{ marginLeft: '5px', width: '14px', height: '14px' }}
          />
        </AccountControl>
      </Link>
    </AccountNotifStyled>
  );
};

export default AccountNotif;
