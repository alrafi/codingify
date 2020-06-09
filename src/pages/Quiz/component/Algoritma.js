import React, { useState } from 'react';
import styled from 'styled-components';
import { MainWrapper } from '../mainWrapper';
import MenuBar from '../../../components/MenuBar';
import Button from '../../../components/Button';
import QuizSection from '../QuizSection';
import {
  MiddleSection as CodeSection,
  RightSection as ConsoleSection,
} from '../../../components/LayoutSection';
import Modal from 'react-modal';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';
import { SubTopic, CodeText } from '../../../components/contentComponent';
import check from '../../../assets/check.png';
import rightArrow from '../../../assets/right-arrow.png';
import adaptive from '../../../assets/adaptive.png';
import { TextHighlight } from '../../../components/contentComponent';
import { Link } from 'react-router-dom';
import leftArrow from '../../../assets/left-arrow.png';

const TitleEditor = styled.p`
  font-size: 120%;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 30px;
`;

const BoxResult = styled.div`
  width: 100%;
  height: 400px;
`;

const Text = styled.p`
  font-size: 80%;
  line-height: 20px;
  margin: 0 0 10px 20px;

  span {
    font-weight: bold;
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
    margin-left: 20px;
  }
`;

const ScoreResult = styled.p`
  font-size: 120%;
  font-weight: bold;
  margin-top: 20px;
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

const TopicDone = styled.p`
  font-size: 200%;
  font-weight: bold;
`;

const TopicName = styled.p`
  font-size: 180%;
  margin: 10px 0;
`;

// adaptive modal
const AdaptiveText = styled.p`
  font-size: 160%;
  font-weight: bold;
`;

const AdaptiveNext = styled.p`
  font-size: 140%;
  margin: 10px 0;
`;

const AdaptiveWrapper = styled.div`
  display: flex;

  img {
    width: 100px;
    height: 280px;
  }
`;

const AdaptiveContainer = styled.div`
  margin-left: 10px;
`;

const ChooseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OrText = styled.p`
  font-size: 100%;
  text-align: center;
  margin: 20px 0;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
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

Modal.setAppElement('#root');

const Algoritma = () => {
  const [run, setRun] = useState(0);
  const [answerDefault, setAnswerDefault] = useState('block');
  const [answerFalse, setAnswerFalse] = useState('none');
  const [answerTrue, setAnswerTrue] = useState('none');

  const runClick = () => {
    setRun(run + 1);
    setAnswerDefault('none');
    console.log(run);
    if (run >= 2) {
      setModalForm(true);
      setAnswerTrue('block');
      setAnswerFalse('none');
    } else {
      setModalForm(false);
      setAnswerFalse('block');
      setAnswerTrue('none');
    }
  };

  const [code, setCode] = useState(`// Setup
const rotasiMatriks = (m, n, matriks) => {
  // Only change code below this line

  for (let i = 0; i < m; i++) {
    arr = matriks[i];
  }
  return arr;

  // Only change code above this line
}; 
`);

  const onChange = (newValue) => {
    // console.log('change', newValue);
    setCode(newValue);
  };

  // MODAL
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalForm, setModalForm] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <MainWrapper>
      <MenuBar />
      <QuizSection />
      <CodeSection>
        <SubWrapper>
          <Link to="/quiz" className="link">
            <img src={leftArrow} alt="back" />
          </Link>
          <TitleEditor>Algoritma</TitleEditor>
        </SubWrapper>
        <Text>
          Silahkan tulis <span>Algoritma</span> yang tepat untuk persoalan di
          samping menggunakan sintaks <TextHighlight>JavaScript</TextHighlight>{' '}
          yang sudah dipelajari.
        </Text>
        <AceEditor
          mode="javascript"
          theme="tomorrow"
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          width="100%"
          height="320px"
          fontSize={16}
          showGutter={true}
          highlightActiveLine={true}
          value={code}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
        <ButtonWrapper>
          <Button onClick={runClick}>RUN</Button>
        </ButtonWrapper>
      </CodeSection>
      <ConsoleSection>
        <SubTopic>Hasil</SubTopic>
        <BoxResult style={{ display: `${answerDefault}` }}>
          <CodeResult style={{ color: '#39A14A' }}>
            /= Your test output will go here =/
          </CodeResult>
        </BoxResult>
        <BoxResult style={{ display: `${answerTrue}` }}>
          <CodeResult style={{ color: '#39A14A' }}>
            running tests, tests completed
          </CodeResult>
          <ScoreResult style={{ color: '#39A14A' }}>Score:</ScoreResult>
          <ScoreResult style={{ color: '#39A14A', marginTop: '0' }}>
            100/100
          </ScoreResult>
        </BoxResult>
        <BoxResult style={{ display: `${answerFalse}`, color: '#F44336' }}>
          <CodeResult>/== result ==/</CodeResult>
          <CodeResult style={{ color: '#F44336' }}>
            false on test case #7
          </CodeResult>
          <CodeResult style={{ color: '#F44336', marginTop: '15px' }}>
            expected output:
          </CodeResult>
          <CodeResult style={{ color: '#F44336' }}>45 47 66 34</CodeResult>
          <CodeResult style={{ color: '#F44336' }}>75 47 71 87</CodeResult>
          <CodeResult style={{ color: '#F44336' }}>35 48 52 15</CodeResult>
          <CodeResult style={{ color: '#F44336', marginTop: '15px' }}>
            your output:
          </CodeResult>
          <CodeResult style={{ color: '#F44336' }}>45 47 66 34</CodeResult>
          <ScoreResult>Score:</ScoreResult>
          <ScoreResult style={{ marginTop: '0' }}>70/100</ScoreResult>
        </BoxResult>
        <ButtonWrapper>
          <Button onClick={openModal}>SUBMIT</Button>
        </ButtonWrapper>
      </ConsoleSection>
      {modalForm ? (
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
              <TopicName>Kuis Selanjutnya: Wildcard</TopicName>
              <img src={rightArrow} alt="next" />
            </NextWrapper>
            <Link to="/quiz-list">
              <Button width="200px">Kembali ke Halaman Kuis</Button>
            </Link>
          </ModalBox>
        </Modal>
      ) : (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Adaptive Learning"
        >
          <CloseWrapper>
            <ModalClose onClick={closeModal}>X</ModalClose>
          </CloseWrapper>
          <ModalBox>
            <AdaptiveText>Ups! Sepertinya ada yang ketinggalan</AdaptiveText>

            <AdaptiveWrapper>
              <img src={adaptive} alt="Adaptive Learning" />
              <AdaptiveContainer>
                <ChooseWrapper>
                  <AdaptiveNext>Kembali belajar materi Array?</AdaptiveNext>
                  <Button width="200px">Belajar Sekarang</Button>
                </ChooseWrapper>
                <OrText>ATAU</OrText>
                <ChooseWrapper>
                  <AdaptiveNext>
                    Coba kuis lain: Bebek Pak Dangklek
                  </AdaptiveNext>
                  <Button width="200px">Kerjakan kuis ini</Button>
                </ChooseWrapper>
              </AdaptiveContainer>
            </AdaptiveWrapper>
          </ModalBox>
        </Modal>
      )}
    </MainWrapper>
  );
};

export default Algoritma;
