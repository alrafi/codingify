import React from 'react';
import styled from 'styled-components';
import { MainWrapper, MainContent } from '../../components/homeComponents';
import LeftMenu from '../../components/LeftMenu';
import RightMenu from '../../components/RightMenu';
import MiddleMenu from '../../components/MiddleMenu';
import { dataTopic } from './dataTopic';
import next from '../../assets/right-next.png';
import { Link } from 'react-router-dom';

const TopicTitle = styled.p`
  font-size: 120%;
  font-weight: bold;
`;

const TopicWrapper = styled.div`
  width: 100%;
  margin: 20px 0;

  .link {
    color: #009d86;
    text-decoration: none;
  }
`;

const TopicItem = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 15px;
  background-color: #dbf6f6;
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 10px;

  .iconTopic {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }

  .progress {
    width: 50px;
    height: 50px;
    margin-left: 100px;
  }

  .next {
    width: 10px;
    height: 25px;
    margin-left: 20px;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #009d86;
`;

const IDName = styled.p`
  font-size: 120%;
  width: 400px;
`;

const ENName = styled.p`
  font-size: 70%;
  width: 300px;
`;

const ListTopic = () => {
  return (
    <MainWrapper>
      <LeftMenu />
      <RightMenu />
      <MainContent>
        <h2>Learn</h2>
        <MiddleMenu>
          <TopicTitle>Topik Materi</TopicTitle>
          <TopicWrapper>
            {dataTopic.map(({ icon, idName, enName, progress }) => {
              return (
                <Link to="/learn" className="link">
                  <TopicItem>
                    <img src={icon} alt={enName} className="iconTopic" />
                    <NameWrapper>
                      <IDName>{idName}</IDName>
                      <ENName>{enName}</ENName>
                    </NameWrapper>
                    <img src={progress} alt={enName} className="progress" />
                    <img src={next} alt="Next" className="next" />
                  </TopicItem>
                </Link>
              );
            })}
          </TopicWrapper>
        </MiddleMenu>
      </MainContent>
    </MainWrapper>
  );
};

export default ListTopic;
