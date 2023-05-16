import React, { useState } from 'react';
import { authService, firebaseInstance } from './../../Loginbase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import "./../login/Auth.css"
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
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        // await authService.signInWithEmailAndPassword(email, password);
        await authService.createUserWithEmailAndPassword(email, password);
      }

      history.push('/Main');
    } catch (error) {
      alert('등록된 이메일이 아닙니다.');
    }
  };

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
        <FormGroup className="AuthMain">
          <Label className="AuthInput">
            <h3>아이디</h3>
            <Input
              name="email"
              type="email"
              placeholder="아이디를 입력해주세요"
              required
              value={email}
              onChange={onChange}
            />
          </Label>
        </FormGroup>
        {/* <br /> */}
        <FormGroup className="AuthMain">
          <Label className="AuthInput">
            <h3>비밀번호</h3>
            <Input
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              required
              value={password}
              onChange={onChange}
            />
          </Label>
        </FormGroup>
        {/* <br /> */}
        <Label className="AuthMain">
          <Input className="AuthInput"
            type="submit"
            value={newAccount ? '로그인' : 'Sign In'} />
          {error}
        </Label>
      </Form>
      <br />
      <div className="Auth_Sub_Btn">
        <Button onClick={onSocialClick} name="google" style={{ width: "500px" }}>
          Google 로그인
        </Button>
      </div>
      <div className="Auth_Sub_Btn">
        <Button onClick={onSocialClick} name="github" style={{ width: "500px" }}>
          github 로그인
        </Button>
      </div>
    </div>
  );
};
export default Auth;
