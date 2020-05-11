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
import Modal from 'react-modal';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';

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

  .link {
    color: #303030;
    text-decoration: none;
  }
`;

const Back = styled.p`
  font-size: 60%;
  color: #303030;
  margin: 2px 0 0 10px;
  &:hover {
    color: #009d86;
  }
`;

const onChange = (newValue) => {
  console.log('change', newValue);
};

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

const Learn = () => {
  const [result, setResult] = useState(`
/** Your test output will go here **/
`);

  // MODAL
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [colorAnswer, setColorAnswer] = useState('#3D3D3D');

  const runClick = () => {
    setResult(`
    // running tests, tests completed
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
      <ConceptSection>
        <SubWrapper>
          <Topic>Array</Topic>
          <Link to="/learn-topics" className="link">
            <Back>(back to List Topics)</Back>
          </Link>
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
        <AceEditor
          mode="javascript"
          theme="tomorrow"
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          width="100%"
          height="400px"
          fontSize={16}
          showGutter={true}
          highlightActiveLine={true}
          value={`// setup
let myArr = [];

// only change code below this line
`}
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
          <p onClick={falseClick}>run</p>
        </ButtonWrapper>
      </CodeSection>
      <ConsoleSection>
        <SubTopic>Live Console</SubTopic>
        <BoxResult>
          <CodeText color={colorAnswer}>{result}</CodeText>
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
          <Link to="/quiz">
            <Button width="200px">Lanjut Mengerjakan Kuis</Button>
          </Link>
        </ModalBox>
      </Modal>
    </MainWrapper>
  );
};

export default Learn;
