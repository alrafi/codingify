import React, { useState } from 'react';
import styled from 'styled-components';
import { MainWrapper } from '../mainWrapper';
import MenuBar from '../../../components/MenuBar';
import QuizSection from '../QuizSection';
import { SubTopic, Text } from '../../../components/contentComponent';
import Button from '../../../components/Button';
import {
  MiddleSection as AnswerSection,
  RightSection as ResultSection,
} from '../../../components/LayoutSection';
import { Link } from 'react-router-dom';
import leftArrow from '../../../assets/left-arrow.png';
import Modal from 'react-modal';
import check from '../../../assets/check.png';

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
  height: 290px;
`;

const NavComponent = styled.div`
  margin-top: 10px;
  font-size: 60%;

  .link {
    color: #303030;
    text-decoration: none;
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

const CodeResult = styled.p`
  font-family: 'Fira Code', monospace;
  font-size: 90%;
  color: ${({ color }) => (color ? color : '#3d3d3d')};
`;

// MODAL
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // zIndex: '999',
  },
};

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;

  img {
    width: 180px;
    height: 180px;
  }
`;

const NextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 10px;
    width: 30px;
    height: 30px;
  }
`;

const ModalClose = styled.div`
  width: 20px;
  height: 20px;
  background-color: #009d86;
  border-radius: 50%;
  font-size: 80%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TopicDone = styled.p`
  font-size: 200%;
  font-weight: bold;
`;

const TopicName = styled.p`
  font-size: 180%;
  margin: 10px 0;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PengenalanPola = () => {
  // MODAL
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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

  const [run, setRun] = useState(0);
  const [answerDefault, setAnswerDefault] = useState('block');
  const [answerFalse, setAnswerFalse] = useState('none');
  const [answerTrue, setAnswerTrue] = useState('none');

  const runClick = () => {
    setRun(run + 1);
    setAnswerDefault('none');
    console.log(run);
    if (run >= 2) {
      // setModalForm(true);
      setAnswerTrue('block');
      setAnswerFalse('none');
    } else {
      // setModalForm(false);
      setAnswerFalse('block');
      setAnswerTrue('none');
    }
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
          <SubTopic>Pengenalan Pola</SubTopic>
        </SubWrapper>
        <Text>
          Silahkan pilih <span>Pengenalan Pola</span> mana saja yang tepat untuk
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
        </ButtonWrapper>
      </AnswerSection>
      <ResultSection>
        <SubTopic>Hasil</SubTopic>
        <BoxResult style={{ display: `${answerDefault}` }}>
          <CodeResult style={{ color: '#39A14A' }}>
            /= Your test output will go here =/
          </CodeResult>
        </BoxResult>
        <BoxResult style={{ display: `${answerTrue}` }}>
          <CodeResult>/== result ==/</CodeResult>
          <CodeResult style={{ color: '#39A14A' }}>
            tests completed, your answer is correct
          </CodeResult>
        </BoxResult>
        <BoxResult style={{ display: `${answerFalse}`, color: '#F44336' }}>
          <CodeResult>/== result ==/</CodeResult>
          <CodeResult style={{ color: '#F44336' }}>
            sorry, your answer is wrong
          </CodeResult>
        </BoxResult>
        <ButtonWrapper>
          <Button onClick={openModal}>SUBMIT</Button>
          <NavComponent>
            <Link to="/quiz-dekomposisi" className="link">
              Dekomposisi
            </Link>{' '}
            |{' '}
            <Link to="/quiz-algoritma" className="link">
              Algoritma
            </Link>
          </NavComponent>
        </ButtonWrapper>
      </ResultSection>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Materi selesai"
      >
        <CloseWrapper>
          <ModalClose onClick={closeModal}>X</ModalClose>
        </CloseWrapper>
        <ModalBox>
          <TopicDone>Selamat! Jawaban Anda benar</TopicDone>
          <img src={check} alt="completed" />
          <NextWrapper>
            <TopicName>Kerjakan Komponen CT lainnya</TopicName>
          </NextWrapper>
          <Link to="/quiz">
            <Button width="200px">Kembali ke Komponen Kuis</Button>
          </Link>
        </ModalBox>
      </Modal>
    </MainWrapper>
  );
};

export default PengenalanPola;
