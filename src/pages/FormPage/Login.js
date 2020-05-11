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

const Login = () => {
  return (
    <MainWrapper>
      <FormSection>
        <Link to="/" className="link-header">
          <h1>Codingify</h1>
        </Link>
        <FormInput>
          <h2>Log in</h2>
          <Input
            name="Username"
            placeholder="Enter your username"
            focus="true"
            type="text"
          />
          <Input
            name="Password"
            type="password"
            placeholder="Enter your password"
          />
          <ButtonWrapper>
            <Link to="/dashboard">
              <Button onClick="login">Log in</Button>
            </Link>
          </ButtonWrapper>
          <LinkSwitch>
            Don’t have an account?{' '}
            <Link to="/register" className="link">
              Sign up
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

export default Login;
