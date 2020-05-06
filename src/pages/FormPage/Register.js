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

const Register = () => {
  return (
    <MainWrapper>
      <FormSection>
        <h1>Codingify</h1>
        <FormInput>
          <h2>Sign Up</h2>
          <Input name="Username" placeholder="Choose username" focus="true" />
          <Input name="E-mail address" placeholder="you@example.com" />
          <Input name="Password" placeholder="Enter your password" />
          <ButtonWrapper>
            <Button>Sign Up</Button>
          </ButtonWrapper>
          <LinkSwitch>
            Already have an account? <span>Log in</span>
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

export default Register;
