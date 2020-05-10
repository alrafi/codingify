import React from 'react';
import { MainWrapper, MainContent } from '../../components/homeComponents';
import LeftMenu from '../../components/LeftMenu';
import RightMenu from '../../components/RightMenu';
import MiddleMenu from '../../components/MiddleMenu';

const Profile = () => {
  return (
    <MainWrapper>
      <LeftMenu />
      <RightMenu />
      <MainContent>
        <h2>Profile</h2>
        <MiddleMenu></MiddleMenu>
      </MainContent>
    </MainWrapper>
  );
};

export default Profile;
