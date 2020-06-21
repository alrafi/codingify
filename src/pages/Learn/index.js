import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import {
  LeftSection as ConceptSection,
  MiddleSection as CodeSection,
  RightSection as ConsoleSection,
} from '../../components/LayoutSection';
import {
  Topic,
  SubTopic,
  Text,
  CodeBox,
  CodeText,
  TextHighlight,
  SubTitle,
} from '../../components/contentComponent';

import MenuBar from '../../components/MenuBar';
import video from '../../assets/video.mp4';
import check from '../../assets/check.png';

import AceEditor from 'react-ace';
import { Player } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';
import Modal from 'react-modal';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';

import leftArrow from '../../assets/left-arrow.png';
// import rightArrow from '../../assets/right-arrow.png';
// import ct from '../../assets/ct.png';
import ctabstraksi from '../../assets/ctabstraksi.png';
import ctdekomposisi from '../../assets/ctdekomposisi.png';
import ctpola from '../../assets/ctpola.png';
import ilustrasiD from '../../assets/ilustrasiD.png';
import ilustrasiA from '../../assets/ilustrasiA.png';
import ilustrasiP from '../../assets/ilustrasiP.png';

const MainWrapper = styled.div`
  background-color: #f6f4fc;
  position: relative;
`;

const TitleEditor = styled.p`
  font-size: 120%;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 30px;
  flex-direction: column;

  p {
    color: #f6f6f6;
    cursor: pointer;
  }
`;

const BoxResult = styled.div`
  width: 100%;
  height: 400px;
`;

const SubWrapper = styled.div`
  display: flex;
  align-items: center;

  .link {
    color: #303030;
    text-decoration: none;
  }

  img {
    margin-right: 10px;
  }
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

const TopicDone = styled.p`
  font-size: 220%;
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

const ChooseLanguage = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  select {
    width: 120px;
    height: 30px;
    border-radius: 20px;
    background-color: #009d86;
    color: #ffffff;
    padding: 5px 10px;
  }

  select:focus {
    outline: none;
  }

  p {
    font-size: 80%;
    margin-right: 15px;
  }
`;

const Padding = styled.div`
  padding: 0 20px;
`;

const CodeResult = styled.p`
  font-family: 'Fira Code', monospace;
  font-size: 90%;
  color: ${({ color }) => (color ? color : '#3d3d3d')};
`;

const CTcontainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CTitem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
  }

  p {
    font-size: 80%;
  }
`;

// MODAL
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

const TextCT = styled.p`
  margin-top: 10px;
  font-size: 90%;
`;

const SubmitWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 10px;

  .ilustrasiA {
    width: 120px;
    height: 150px;
  }

  .ilustrasiD {
    width: 200px;
    height: 200px;
  }

  .ilustrasiP {
    width: 100px;
    height: 120px;
  }
`;

// modal CT

Modal.setAppElement('#root');

// funstion app
const Learn = () => {
  // modal ct
  const [color1, setColor1] = useState('#009d86');
  const [color2, setColor2] = useState('#009d86');
  const [color3, setColor3] = useState('#009d86');
  const [color4, setColor4] = useState('#009d86');
  const [bgColor1, setBgColor1] = useState('#dbf6f6');
  const [bgColor2, setBgColor2] = useState('#dbf6f6');
  const [bgColor3, setBgColor3] = useState('#dbf6f6');
  const [bgColor4, setBgColor4] = useState('#dbf6f6');

  const CheckboxWrapper = styled.div`
    margin: 20px 0;
  `;

  const CheckboxItem = styled.div`
    width: 340px;
    height: 45px;
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    /* padding: 5px 0; */

    font-weight: 600;
    font-size: 100%;

    text-align: center;

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

  const [language, setLanguage] = useState('javascript');

  const handleLanguage = (event) => {
    // console.log(language);
    setLanguage(event.target.value);
    // console.log(event.target.value);
  };

  // MODAL
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [code, setCode] = useState(`// setup
let myArr = [];

// only change code below this line
`);

  const onCodeChange = (newValue) => {
    // console.log('change', newValue);
    setCode(newValue);
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

  // modal ct abstraksi
  const [modalIsOpenCTa, setIsOpenCTa] = useState(false);
  const openModalCTa = () => {
    setIsOpenCTa(true);
  };

  const closeModalCTa = () => {
    setIsOpenCTa(false);
  };

  // modal ct dekomposisi
  const [modalIsOpenCTd, setIsOpenCTd] = useState(false);
  const openModalCTd = () => {
    setIsOpenCTd(true);
  };

  const closeModalCTd = () => {
    setIsOpenCTd(false);
  };

  // modal ct pola
  const [modalIsOpenCTp, setIsOpenCTp] = useState(false);
  const openModalCTp = () => {
    setIsOpenCTp(true);
  };

  const closeModalCTp = () => {
    setIsOpenCTp(false);
  };

  const [ctAnswerA, setCTAnswerA] = useState('Silahkan submit jawaban');

  const onCTsubmitA = () => {
    setCTAnswerA('Jawaban anda tepat!');
  };

  const [ctAnswerD, setCTAnswerD] = useState('Silahkan submit jawaban');

  const onCTsubmitD = () => {
    setCTAnswerD('Jawaban anda tepat!');
  };

  const [ctAnswerP, setCTAnswerP] = useState('Silahkan submit jawaban');

  const onCTsubmitP = () => {
    setCTAnswerP('Jawaban anda tepat!');
  };

  return (
    <MainWrapper>
      <MenuBar />
      <ConceptSection>
        <SubWrapper>
          <Link to="/learn-topics" className="link">
            <img src={leftArrow} alt="back" />
          </Link>
          <Topic>Array</Topic>
        </SubWrapper>
        <SubTopic>Perkenalan</SubTopic>

        <Text>
          Array merupakan variabel dengan satu nama, tetapi mengandung banyak
          nilai.
        </Text>
        <Text>
          Akses nilai-nilainya dilakukan dengan indeks. Biasanya dimulai dari
          indeks-0.
        </Text>
        <Text>
          Karena array merupakan variabel, diperlukan deklarasi seperti variabel
          lainnya.
        </Text>
        <Text>Berikut contoh deklarasi dan pengisian nilai array:</Text>
        <CodeBox>
          <CodeText>let arr = [];</CodeText>
          <CodeText>arr[0] = ‘pisang’;</CodeText>
          <CodeText>arr[1] = ‘semangka’;</CodeText>
        </CodeBox>
        <Text>
          Pada contoh di atas, sebuah array bernama{' '}
          <TextHighlight>arr</TextHighlight> dideklarasikan. Kemudian elemen
          array indeks-0 diisi dengan <TextHighlight>pisang</TextHighlight>.
          Kemudian elemen array indeks-1 diisi dengan{' '}
          <TextHighlight>semangka</TextHighlight>.
        </Text>
        <SubTitle>Belajar Konsep</SubTitle>
        <Text>
          Untuk mengenal konsep array lebih jelas, silahkan menonton video
          perkenalan array di bawah ini.
        </Text>
        <Player>
          <source src={video} />
        </Player>
        <SubTitle>Komponen Computational Thinking</SubTitle>
        <Text>Silahkan klik dan kerjakan komponen CT di bawah ini</Text>
        <CTcontainer>
          <CTitem onClick={openModalCTa}>
            <img src={ctabstraksi} alt="CT" />
            <p>Abstraksi</p>
          </CTitem>
          <CTitem onClick={openModalCTd}>
            <img src={ctdekomposisi} alt="CT" />
            <p>Dekomposisi</p>
          </CTitem>
          <CTitem onClick={openModalCTp}>
            <img src={ctpola} alt="CT" />
            <p>Pengenalan Pola</p>
          </CTitem>
        </CTcontainer>
        <SubTitle>Latihan Konsep</SubTitle>
        <Text>
          Modifikasi array dengan nama <TextHighlight>myArr</TextHighlight>{' '}
          dengan memasukkan nilai <TextHighlight>gajah</TextHighlight> untuk
          elemen pertama dan nilai <TextHighlight>45</TextHighlight> untuk
          elemen kedua.{' '}
        </Text>
      </ConceptSection>
      <CodeSection>
        <TitleEditor>Online Editor</TitleEditor>
        <Padding>
          <Text>
            Silahkan kerjakan latihan konsep pada code editor di bawah ini.
          </Text>
          <ChooseLanguage>
            <p>Pilih bahasa: </p>
            <select value={language} onChange={handleLanguage}>
              <option value="javascript">Javascript</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="csharp">C#</option>
            </select>
          </ChooseLanguage>
        </Padding>
        <AceEditor
          mode={language}
          theme="tomorrow"
          onChange={onCodeChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          width="100%"
          height="300px"
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
        <SubTopic>Live Console</SubTopic>
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
        </ButtonWrapper>
      </ConsoleSection>
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
          <TopicDone>Materi Selesai</TopicDone>
          <img src={check} alt="completed" />
          <TopicName>Array - Perkenalan</TopicName>
          <Link to="/learn">
            <Button width="200px">Materi selanjutnya</Button>
          </Link>
          <Link to="/quiz">
            <Button width="200px" color="#FF175D">
              Lanjut Mengerjakan Kuis
            </Button>
          </Link>
        </ModalBox>
      </Modal>
      {/* modal CT abstraksi*/}
      <Modal
        isOpen={modalIsOpenCTa}
        onRequestClose={closeModalCTa}
        style={customStyles}
        contentLabel="Komponen CT abstraksi"
      >
        <CloseWrapper>
          <ModalClose onClick={closeModalCTa}>X</ModalClose>
        </CloseWrapper>
        <ModalBox>
          <TopicDone>Abstraksi ide utama materi</TopicDone>
          <CheckboxWrapper>
            <CheckboxItem
              id={1}
              onClick={itemClick1}
              color={color1}
              bgColor={bgColor1}
            >
              <p>array adalah implementasi dari list</p>
            </CheckboxItem>
            <CheckboxItem
              id={2}
              onClick={itemClick2}
              color={color2}
              bgColor={bgColor2}
            >
              <p>array mempunyai indeks</p>
            </CheckboxItem>
            <CheckboxItem
              id={3}
              onClick={itemClick3}
              color={color3}
              bgColor={bgColor3}
            >
              <p>array dapat diduplikat</p>
            </CheckboxItem>
            <CheckboxItem
              id={4}
              onClick={itemClick4}
              color={color4}
              bgColor={bgColor4}
            >
              <p>array mempunyai nilai</p>
            </CheckboxItem>
          </CheckboxWrapper>
          <Button width="200px" onClick={onCTsubmitA}>
            Submit jawaban
          </Button>
          <SubmitWrapper>
            <img src={ilustrasiA} alt="abstraksi" className="ilustrasiA" />
          </SubmitWrapper>
          <TextCT>{ctAnswerA}</TextCT>
        </ModalBox>
      </Modal>
      {/* Modal dekomposisi */}
      <Modal
        isOpen={modalIsOpenCTd}
        onRequestClose={closeModalCTd}
        style={customStyles}
        contentLabel="Komponen CT dekomposisi"
      >
        <CloseWrapper>
          <ModalClose onClick={closeModalCTd}>X</ModalClose>
        </CloseWrapper>
        <ModalBox>
          <TopicDone>Dekomposisi konsep</TopicDone>
          <CheckboxWrapper>
            <CheckboxItem
              id={1}
              onClick={itemClick1}
              color={color1}
              bgColor={bgColor1}
            >
              <p>array adalah implementasi dari list</p>
            </CheckboxItem>
            <CheckboxItem
              id={2}
              onClick={itemClick2}
              color={color2}
              bgColor={bgColor2}
            >
              <p>array mempunyai indeks</p>
            </CheckboxItem>
            <CheckboxItem
              id={3}
              onClick={itemClick3}
              color={color3}
              bgColor={bgColor3}
            >
              <p>array dapat diduplikat</p>
            </CheckboxItem>
            <CheckboxItem
              id={4}
              onClick={itemClick4}
              color={color4}
              bgColor={bgColor4}
            >
              <p>array mempunyai nilai</p>
            </CheckboxItem>
          </CheckboxWrapper>

          <Button width="200px" onClick={onCTsubmitD}>
            Submit jawaban
          </Button>
          <SubmitWrapper>
            <img src={ilustrasiD} alt="dekomposisi" className="ilustrasiD" />
          </SubmitWrapper>
          <TextCT>{ctAnswerD}</TextCT>
        </ModalBox>
      </Modal>
      {/* Modal Pola */}
      <Modal
        isOpen={modalIsOpenCTp}
        onRequestClose={closeModalCTp}
        style={customStyles}
        contentLabel="Komponen CT dekomposisi"
      >
        <CloseWrapper>
          <ModalClose onClick={closeModalCTp}>X</ModalClose>
        </CloseWrapper>
        <ModalBox>
          <TopicDone>Pengenalan pola konsep</TopicDone>
          <CheckboxWrapper>
            <CheckboxItem
              id={1}
              onClick={itemClick1}
              color={color1}
              bgColor={bgColor1}
            >
              <p>array adalah implementasi dari list</p>
            </CheckboxItem>
            <CheckboxItem
              id={2}
              onClick={itemClick2}
              color={color2}
              bgColor={bgColor2}
            >
              <p>array mempunyai indeks</p>
            </CheckboxItem>
            <CheckboxItem
              id={3}
              onClick={itemClick3}
              color={color3}
              bgColor={bgColor3}
            >
              <p>array dapat diduplikat</p>
            </CheckboxItem>
            <CheckboxItem
              id={4}
              onClick={itemClick4}
              color={color4}
              bgColor={bgColor4}
            >
              <p>array mempunyai nilai</p>
            </CheckboxItem>
          </CheckboxWrapper>

          <Button width="200px" onClick={onCTsubmitP}>
            Submit jawaban
          </Button>
          <SubmitWrapper>
            <img src={ilustrasiP} alt="dekomposisi" className="ilustrasiP" />
          </SubmitWrapper>
          <TextCT>{ctAnswerP}</TextCT>
        </ModalBox>
      </Modal>
    </MainWrapper>
  );
};

export default Learn;
