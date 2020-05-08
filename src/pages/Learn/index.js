import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/Logo';

import AceEditor from 'react-ace';

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

const ConsoleSection = styled.div`
  width: 32%;
  height: 85vh;
  background: #ffffff;
  border-radius: 40px 0px 0px 0px;
  position: fixed;
  right: 0;
  bottom: 0;
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

const onChange = (newValue) => {
  console.log('change', newValue);
};

const Learn = () => {
  return (
    <MainWrapper>
      <MenuBar>
        <Logo />
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
      </CodeSection>
      <ConsoleSection></ConsoleSection>
    </MainWrapper>
  );
};

export default Learn;
