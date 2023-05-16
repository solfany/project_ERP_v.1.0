import React, { useState } from 'react';
import './../Button/Button.css';
import { authService, db } from './../../Loginbase';
import 'firebase/compat/firestore';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

function SignupModal() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  // 상태 변수를 생성하고 초기값을 'false'로 설정
  // 회원가입 모달의 열림/닫힘 상태를 표시
  // setShowSignupModal은 showSignupModal 상태를 업데이트할 때 사용
  const [newusers, setNewUsers] = useState([]);
  // []으로 초기값을 빈 배열로 설정
  // 새로운 유저 정보 저장용
  // setNewUsers는 setusers 상태를 업데이트 할 때 사용
  const [employeeNum, setEmployeeNum] = useState(''); //사원번호 
  // ''으로 초기값을 빈 문자열로 설정
  // 사원번호 저장용
  // setEmployeeNum는 employeenum 상태를 업데이트 할 때 사용
  const [ranks, setRanks] = useState(''); // 직급
  const [name, setName] = useState(''); // 이름
  const [email, setEmail] = useState(''); // 이메일
  const [password, setPassword] = useState(''); // 비밀번호
  const [confirmPassword, setConfirmPassword] = useState(''); // 비밀번호확인
  const [error, setError] = useState(null);
  // error 상태변수를 생성하고 초기값을 'null'로 설정
  // 회원가입 과정에서 발생하는 오류를 저장
  const [success, setSuccess] = useState(false);

  const handleSignup = async (event) => {
    // 사원관리 버튼이 클릭되었을 때 실행되는 함수
    // 'async'함수로 이벤트를 막고
    // 'async'는 일반함수를 비동기 함수로 만들기 위해서 사용
    event.preventDefault();
    // submit 새로고침 동작 막기 위해 사용
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
      // 비밀번호와 비밀번호 확인이 일치하지 않을경우
      // setError를 호출하고 함수 종료
    }
    try {
      const userCredential = await authService.createUserWithEmailAndPassword(
        email,
        password
      );
      await userCredential.user.updateProfile({ displayName: name });
      setSuccess(true);
      await authService.signOut(); // 로그 아웃 수행
    } catch (error) {
      setError(error.message);
    }
    // createUserWithEmailAndPassword(파이어베이스 제공) 함수를 호출하여
    // 이메일과 비밀번호로 새로운 사용자를 생성
    // 사용자를 생성하면 사용자 인증정보가 firebase로 반환된다.
    // userCredential.user.updateProfile 함수를 호출하여
    // 사용자의 프로필 정보에 이름을 추가하고
    // displayName: name , setSuccess(true)를 호출하여
    // 회원가입 성공여부를 업데이트한다.
    // await사용 이유는 updateProfile 함수가 비동기 함수이기 때문에
    // 위의 createUser 함수를 처리하기 위해 사용된다.
    // authService 객체가 반환한 userCredential 변수가 할당될때까지
    // 다음코드로 진행하지 않고 대기하고, 할당 후 userCredential 객체의
    // user 속성을 사용하여 사용자 프로필을 업데이트하여 회원가입 유무를 확인한다
    db.collection('users').add({
      employeeNum: employeeNum,
      ranks: ranks,
      name: name,
      email: email,
      password: password,
    })
      .then((docRef) => { // id값을 읽기 위한 작업
        console.log("Document written with ID: ", docRef.id);
        setSuccess(true); // add 함수 성공시 then 콜백함수 실행하여 문서 업데이트 진행
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
  // firebase 기본제공 함수인 db.collection('').add({...}) 함수를 호출하여
  // firestore 데이터 베이스의 users 컬렉션에 새로운 회원가입된 사용자를 추가한다.
  // add() 함수는 비동기 함수로 새로운 문서의 참조 객체(docRef)를 반환한다.
  // add() 함수가 성공으로 실행되면 then() 함수의 콜백 함수가 실행되고
  // setSuccess(true)를 호출하여 success상태를 true로 업데이트 한다.
  // 만약 문서 작성이 실패하면 catch() 함수의 콜백 함수가 실행되어 에러메시지를 출력한다.
  const handleSignupSuccess = () => {
    setShowSignupModal(false); // 회원가입 모달창 닫기
    const newUser = { name, email }; // 새로운 user 객체 생성
    setNewUsers([...newusers, newUser]); // 새로운 user 리스트
    setEmployeeNum('');
    setRanks('');
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError(null);
    setSuccess(false);
  }
  // 회원가입 성공시 실행되는 함수
  // setShowSignupModal을 false로 실행하여
  // showSignupModal 상태를 닫는다.
  const toggleSignupModal = () =>
    setShowSignupModal(!showSignupModal);
  // 모달창 열고 닫는 함수
  // ShowSignupModal이 true이면 setShowSignupModal(false)를 호출
  // ShowSignupModal이 false이면 setShowSignupModal(true)를 호출하여 
  // showSignupModal 상태를 true로 변경한다.
  // = toggleSignupModal 함수를 호출할때마다 showSignupModal 상태를 업데이트하여
  // 모달창을 열고 닫게 한다.
  return (
    <div>
      <button className="blue" text="사원등록" onClick={toggleSignupModal}>
        사원등록
      </button>
      <Modal isOpen={showSignupModal} toggle={toggleSignupModal}>
        {/* isOpen={showSignupModal}은 모달이 열려있는지 여부를 표시하기 위해 사용
            toggle={toggleSignupModal} 여부 확인 후 열고 닫을 수 있께하는 함수를 전달하는 역할
        */}
        <ModalHeader toggle={toggleSignupModal}>사원등록</ModalHeader>
        <ModalBody>
          {success && <p>사원등록 완료</p>}
          {/* success가 true 일때는 사원등록 완료와 하단에 Ok 버튼이 보이게 설정 */}
          {!success && (
            <Form id="signup-form" onSubmit={handleSignup}>
              {error && <p>{error}</p>}
              <FormGroup>
                <Label for="employeeNum"><b>사원번호</b></Label>
                <Input
                  style={{ width: '80%' }}
                  type="text"
                  id="EmployeeNum"
                  value={employeeNum}
                  onChange={(e) => setEmployeeNum(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="ranks"><b>직급</b></Label><br />
                <select
                  style={{ width: '40%', textAlign: 'center' }}
                  id="ranks"
                  value={ranks}
                  onChange={(e) => setRanks(e.target.value)}
                  required
                >
                  <option>사원</option>
                  <option>주임</option>
                  <option>대리</option>
                  <option>과장</option>
                  <option>차장</option>
                  <option>부장</option>
                  <option>사장</option>
                </select>
              </FormGroup>
              <FormGroup>
                <Label for="name"><b>이름</b></Label>
                <Input
                  style={{ width: '80%' }}
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="email"><b>이메일</b></Label>
                <Input
                  style={{ width: '80%' }}
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="password"><b>비밀번호</b></Label>
                <Input
                  style={{ width: '50%' }}
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword"><b>비밀번호 확인</b></Label>
                <Input
                  style={{ width: '50%' }}
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </FormGroup>
            </Form>
          )}
        </ModalBody>
        <ModalFooter>
          {success && (
            <Button color="primary" onClick={handleSignupSuccess}>
              OK
            </Button>
            // OK 버튼 클릭시 handleSIgnupSuccess 함수가 실행되고 모달이 닫힌다.
          )}
          {!success && (
            <>
              <button className="blue" type="submit" form="signup-form" >
                등록하기
              </button>
              <button className="red" onClick={toggleSignupModal} >
                취소하기
              </button>
            </>
          )}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default SignupModal;
