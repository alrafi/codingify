import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import AccountNotif from '../../components/AccountNotif';
import video from '../../assets/video.mp4';

import AceEditor from 'react-ace';
import { Player } from 'video-react';
import Modal from 'react-modal';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';

const MainWrapper = styled.div`
  background-color: #f6f4fc;
  position: relative;
`;

const MenuBar = styled.div`
  width: 100%;
  height: 60px;
  background: #ffffff;
  box-shadow: 10px 5px 30px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 30px 30px;
  position: fixed;
  top: 0;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
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

const AccountWrapper = styled.div`
  position: fixed;
  top: 15px;
  right: 20px;
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
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <MainWrapper>
      <MenuBar>
        <Logo />
        {/* <AccountNotif /> */}
        <AccountWrapper>
          <AccountNotif />
        </AccountWrapper>
      </MenuBar>
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
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </MainWrapper>
  );
};

export default Learn;
