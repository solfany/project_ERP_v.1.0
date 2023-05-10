
import React, { useState } from "react";
import { authService, firebaseInstance } from "/project02/src/Loginbase";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    FormGroup,
    //  FormGroup,
    Input,
    Label,
} from 'reactstrap';
import { useHistory } from "react-router-dom";
// import { event } from "jquery";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const history = useHistory();

    const onChange = (event) => {
        const { target: { name, value },
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
        // console.log(event.target.name);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            // let data;
            if (newAccount) {
                await authService.signInWithEmailAndPassword(email, password)
            // } else {
            //     await authService.signInWithEmailAndPassword(email, password)
            }
            history.push('/Main')
            // console.log(data)
        } catch (error) {
            alert("사원아님");
        }
    };
    

    // const toggleAccount = () => setNewAccount((prev) => !prev);
    const onSocialClick = async (event) => {
        const { target: { name },
        } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        console.log(data)
    };
    return (
        <div className="content">
            <Form onSubmit={onSubmit}>
                <FormGroup floating>
                    <Label>로그인
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
                <br />
                <FormGroup floating>
                    <Label>비밀번호
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
                <br />
                <Input
                    type="submit"
                    value={newAccount ? "로그인" : "Sign In"}
                />
                {error}
            </Form>
            <br />
            {/* <span onClick={toggleAccount}>
        {newAccount ? "Sign in" : "Create Account"} 
    </span> */}
            <div>
                <Button onClick={onSocialClick} name="google">구글 로그인</Button>
            </div>
            <div>
                <Button onClick={onSocialClick} name="github">깃 로그인</Button>
            </div>
        </div>
    )
}
export default Auth;