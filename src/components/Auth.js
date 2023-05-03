import React, { useState } from 'react';
import { authService, firebaseInstance } from './../Loginbase';
import {
  Button,
  Form,
  //  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
// import { event } from "jquery";

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');
  const history = useHistory();

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    // console.log(event.target.name);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      // let data;
      if (newAccount) {
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        await authService.signInWithEmailAndPassword(email, password);
      }
      history.push('/admin');
      // console.log(data)
    } catch (error) {
      setError(error.message);
    }
  };

  // const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };
  return (
    <div className="content">
      <Form onSubmit={onSubmit}>
        <Label>로그인</Label>
        <Input
          name="email"
          type="email"
          placeholder="아이디를 입력해주세요"
          required
          value={email}
          onChange={onChange}
        />
        <br />
        <Label>비밀번호</Label>
        <Input
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          required
          value={password}
          onChange={onChange}
        />
        <br />
        <Input type="submit" value={newAccount ? '로그인' : 'Sign In'} />
        {error}
      </Form>
      <br />
      {/* <span onClick={toggleAccount}>
        {newAccount ? "Sign in" : "Create Account"} 
    </span> */}
      <div>
        <Button onClick={onSocialClick} name="google">
          Continue with Google
        </Button>
      </div>
      <div>
        <Button onClick={onSocialClick} name="github">
          Contine with Github
        </Button>
      </div>
    </div>
  );
};
export default Auth;
