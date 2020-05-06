import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  MainWrapper,
  FormSection,
  FormInput,
  ButtonWrapper,
  LinkSwitch,
  InfoSection,
  ImageDisplay,
  InfoDisplay,
} from './components/formComponents';

const Login = () => {
  return (
    <MainWrapper>
      <FormSection>
        <h1>Codingify</h1>
        <FormInput>
          <h2>Log in</h2>
          <Input
            name="Username"
            placeholder="Enter your username"
            focus="true"
          />
          <Input name="Password" placeholder="Enter your password" />
          <ButtonWrapper>
            <Button>Log in</Button>
          </ButtonWrapper>
          <LinkSwitch>
            Don’t have an account? <span>Sign up</span>
          </LinkSwitch>
        </FormInput>
      </FormSection>
      <InfoSection>
        <ImageDisplay></ImageDisplay>
        <InfoDisplay>
          Belajar pemrograman dengan konsep berpikir komputasional yang
          interaktif.
        </InfoDisplay>
      </InfoSection>
    </MainWrapper>
  );
};

export default Login;
