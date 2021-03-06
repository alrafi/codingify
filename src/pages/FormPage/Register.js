import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
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
        <Link to="/" className="link-header">
          <h1>Codingify</h1>
        </Link>
        <FormInput>
          <h2>Sign Up</h2>
          <Input
            name="Username"
            type="text"
            placeholder="Choose username"
            focus="true"
          />
          <Input
            name="E-mail address"
            type="text"
            placeholder="you@example.com"
          />
          <Input
            name="Password"
            type="password"
            placeholder="Enter your password"
          />
          <ButtonWrapper>
            <Link to="/register-success">
              <Button>Sign Up</Button>
            </Link>
          </ButtonWrapper>
          <LinkSwitch>
            Already have an account?{' '}
            <Link to="/login" className="link">
              Log in
            </Link>
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
