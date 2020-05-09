import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../components/Button';

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

// CODE SECTION
const CodeSection = styled.div`
  width: 32%;
  height: 85vh;
  background: #ffffff;
  border-radius: 40px 40px 0px 0px;
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  padding: 30px 0;
`;

const TitleEditor = styled.p`
  font-size: 120%;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 20px;
`;

// CONSOLE SECTION
const ConsoleSection = styled.div`
  width: 32%;
  height: 85vh;
  background: #ffffff;
  border-radius: 40px 0px 0px 0px;
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 20px;
`;

// CONCEPT SECTION
const ConceptSection = styled.div`
  width: 32%;
  height: 85vh;
  background: #ffffff;
  border-radius: 0px 40px 0px 0px;
  position: fixed;
  left: 0;
  bottom: 0;
  overflow: auto;
  padding: 20px;
`;

const Topic = styled.p`
  font-size: 70%;
`;

const SubTopic = styled.p`
  font-size: 120%;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 80%;
  line-height: 20px;
  margin-bottom: 10px;
`;

const CodeBox = styled.div`
  background-color: #f5f6f7;
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
`;

const CodeText = styled.p`
  font-family: 'Fira Code', monospace;
  font-size: 70%;
`;

const TextHighlight = styled.p`
  font-family: 'Fira Code', monospace;
  font-size: 90%;
  background-color: #d0d0d5;
  display: inline;
`;

const SubTitle = styled.p`
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 80%;
  margin-top: 10px;
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

  const runClick = () => {
    setResult(`
    // running tests, tests completed
    `);
  };

  // MODAL
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <MainWrapper>
      <MenuBar />
      <ConceptSection>
        <Topic>Array</Topic>
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
          {/* // playsInline
          // poster="/assets/poster.png" */}
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
        </ButtonWrapper>
      </CodeSection>
      <ConsoleSection>
        <SubTopic>Live Console</SubTopic>
        <BoxResult>
          <CodeText>{result}</CodeText>
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
          <Button width="200px">Lanjut Mengerjakan Kuis</Button>
        </ModalBox>
      </Modal>
    </MainWrapper>
  );
};

export default Learn;
