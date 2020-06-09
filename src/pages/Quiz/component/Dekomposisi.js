import React, { useState } from 'react';
import styled from 'styled-components';
import { MainWrapper } from '../mainWrapper';
import MenuBar from '../../../components/MenuBar';
import QuizSection from '../QuizSection';
import { SubTopic, Text, CodeText } from '../../../components/contentComponent';
import Button from '../../../components/Button';
import {
  MiddleSection as AnswerSection,
  RightSection as ResultSection,
} from '../../../components/LayoutSection';
import { Link } from 'react-router-dom';
import leftArrow from '../../../assets/left-arrow.png';

const BoxResult = styled.div`
  width: 100%;
  height: 400px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding-top: 20px;
  flex-direction: column;

  p {
    color: #f6f6f6;
    cursor: pointer;
  }
`;

const CheckboxWrapper = styled.div`
  height: 350px;
`;

const NavComponent = styled.div`
  margin-top: 10px;
  font-size: 60%;

  span {
    cursor: pointer;
  }
`;

const SubWrapper = styled.div`
  display: flex;

  .link {
    color: #303030;
    text-decoration: none;
  }

  img {
    margin-top: 7px;
    margin-right: 10px;
  }
`;

const TextHint = styled.p`
  font-size: 80%;
  line-height: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
  font-weight: bold;
`;

const Dekomposisi = () => {
  const [color1, setColor1] = useState('#009d86');
  const [color2, setColor2] = useState('#009d86');
  const [color3, setColor3] = useState('#009d86');
  const [color4, setColor4] = useState('#009d86');
  const [bgColor1, setBgColor1] = useState('#dbf6f6');
  const [bgColor2, setBgColor2] = useState('#dbf6f6');
  const [bgColor3, setBgColor3] = useState('#dbf6f6');
  const [bgColor4, setBgColor4] = useState('#dbf6f6');

  const CheckboxItem = styled.div`
    width: 100%;
    height: 45px;
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    font-weight: 600;
    font-size: 100%;

    &:hover {
      cursor: pointer;
    }
  `;

  const itemClick1 = (e) => {
    console.log(e.currentTarget.id);
    color1 === '#009d86' ? setColor1('#fff') : setColor1('#009d86');
    bgColor1 === '#dbf6f6' ? setBgColor1('#009d86') : setBgColor1('#dbf6f6');
  };

  const itemClick2 = (e) => {
    console.log(e.currentTarget.id);
    color2 === '#009d86' ? setColor2('#fff') : setColor2('#009d86');
    bgColor2 === '#dbf6f6' ? setBgColor2('#009d86') : setBgColor2('#dbf6f6');
  };

  const itemClick3 = (e) => {
    console.log(e.currentTarget.id);
    color3 === '#009d86' ? setColor3('#fff') : setColor3('#009d86');
    bgColor3 === '#dbf6f6' ? setBgColor3('#009d86') : setBgColor3('#dbf6f6');
  };

  const itemClick4 = (e) => {
    console.log(e.currentTarget.id);
    color4 === '#009d86' ? setColor4('#fff') : setColor4('#009d86');
    bgColor4 === '#dbf6f6' ? setBgColor4('#009d86') : setBgColor4('#dbf6f6');
  };

  const [result, setResult] = useState(`
/** Your test output will go here **/
`);

  const [colorAnswer, setColorAnswer] = useState('#3D3D3D');
  const runClick = () => {
    setResult(`
    // output: jawaban Anda sudah benar
    `);
    setColorAnswer('#39A14A');
  };

  const falseClick = () => {
    setResult(`
    // output: jawaban Anda masih belum benar
    `);
    setColorAnswer('#F44336');
  };

  return (
    <MainWrapper>
      <MenuBar />
      <QuizSection />
      <AnswerSection padding="20px">
        <SubWrapper>
          <Link to="/quiz" className="link">
            <img src={leftArrow} alt="back" />
          </Link>
          <SubTopic>Dekomposisi</SubTopic>
        </SubWrapper>
        <Text>
          Silahkan pilih <span>Dekomposisi</span> mana saja yang tepat untuk
          persoalan di samping.
        </Text>
        <TextHint>Hint: Jawaban yang tepat bisa lebih dari satu</TextHint>
        <CheckboxWrapper>
          <CheckboxItem
            id={1}
            onClick={itemClick1}
            color={color1}
            bgColor={bgColor1}
          >
            <p>membaca masukan matriks</p>
          </CheckboxItem>
          <CheckboxItem
            id={2}
            onClick={itemClick2}
            color={color2}
            bgColor={bgColor2}
          >
            <p>memutar matriks</p>
          </CheckboxItem>
          <CheckboxItem
            id={3}
            onClick={itemClick3}
            color={color3}
            bgColor={bgColor3}
          >
            <p>mengalikan setiap elemen</p>
          </CheckboxItem>
          <CheckboxItem
            id={4}
            onClick={itemClick4}
            color={color4}
            bgColor={bgColor4}
          >
            <p>mencetak elemen matriks</p>
          </CheckboxItem>
        </CheckboxWrapper>
        <ButtonWrapper>
          <Button onClick={runClick}>RUN</Button>
          <p onClick={falseClick}>run</p>
        </ButtonWrapper>
      </AnswerSection>
      <ResultSection>
        <SubTopic>Hasil</SubTopic>
        <BoxResult>
          <CodeText color={colorAnswer}>{result}</CodeText>
        </BoxResult>
        <ButtonWrapper>
          <Button>SUBMIT</Button>
          <NavComponent>
            <span>Pengenalan Pola</span> | <span>Abstraksi</span>
          </NavComponent>
        </ButtonWrapper>
      </ResultSection>
    </MainWrapper>
  );
};

export default Dekomposisi;
