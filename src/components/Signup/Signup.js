// import React, { useState } from 'react';
// import { authService } from '/project02/src/Loginbase';

// import {
//     Button,
//     Form,
//     FormGroup,
//     Label,
//     Input,
//     Modal,
//     ModalHeader,
//     ModalBody,
//     ModalFooter }
//     from 'reactstrap';

// function Signup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const handleSignup = async (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       const userCredential = await authService.createUserWithEmailAndPassword(email, password);
//       await userCredential.user.updateProfile({ displayName: name });
//       setSuccess(true);
//     } catch (error) {
//       setError(error.message);
//     }
//   }

//   return (
//     <>
//     {/* <div className="content"> */}
//         <Container className="mt-5">
//     <Row className="justify-content-center">
//         <Col xs="12" sm="8" md="6">
//             <Card>
//                 <CardHeader>
//                     <CardTitle tag="h4">회원가입</CardTitle>
//                 </CardHeader>
//                 <CardBody>
//                 {success && <p>회원가입에 성공했습니다</p>}
//       {!success &&
//         <Form onSubmit={handleSignup}>
//           {error && <p>{error}</p>}
//           <div>
//             <Label htmlFor="name">이름:</Label>
//             <Input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />
//           </div>
//           <div>
//             <Label htmlFor="email">이메일:</Label>
//             <Input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
//           </div>

//           <div>
//             <Label htmlFor="password">비밀번호:</Label>
//             <Input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
//           </div>
//           <div>
//             <Label htmlFor="confirmPassword">비밀번호 확인:</Label>
//             <Input type="password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
//           </div>
//           <Button type="submit">가입</Button>
//         </Form>
//       }
//                 </CardBody>
//             </Card>
//       <h1>Signup</h1>
//       {success && <p>Signup successful! Please login.</p>}
//       {!success &&
//         <form onSubmit={handleSignup}>
//           {error && <p>{error}</p>}
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />
//           </div>
//           <div>
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
//           </div>
//           <div>
//             <label htmlFor="confirmPassword">Confirm Password:</label>
//             <input type="password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
//           </div>
//           <button type="submit">Signup</button>
//         </form>
//       }
//         </Col>
//     </Row></Container>
//     </div>
//     </>
//   );
// }

// export default Signup;

// function SignupModal() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(false);
//     const [modal, setModal] = useState(false);

//     const toggle = () => setModal(!modal);

//     const handleSignup = async (event) => {
//       event.preventDefault();
//       if (password !== confirmPassword) {
//         setError('비밀번호가 일치하지 않습니다');
//         return;
//       }

//       try {
//         const userCredential = await authService.createUserWithEmailAndPassword(email, password);
//         await userCredential.user.updateProfile({ displayName: name });
//         setSuccess(true);
//       } catch (error) {
//         setError(error.message);
//       }
//       setSuccess(false);
//     }

//     return (
//       <div>
//         <Button color="primary" onClick={toggle}>사원추가</Button>
//         <Modal isOpen={modal} toggle={toggle}>
//           <ModalHeader toggle={toggle}>사원등록</ModalHeader>
//           <ModalBody>
//             {success && <p>{name}님이 사원으로 추가되었습니다.</p>}
//             {!success &&
//               <Form onSubmit={handleSignup}>
//                 {error && <p>{error}</p>}
//                 <FormGroup>
//                   <Label for="name">이름:</Label>
//                   <Input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />
//                 </FormGroup>
//                 <FormGroup>
//                   <Label for="email">이메일:</Label>
//                   <Input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
//                 </FormGroup>
//                 <FormGroup>
//                   <Label for="password">비밀번호:</Label>
//                   <Input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
//                 </FormGroup>
//                 <FormGroup>
//                   <Label for="confirmPassword">비밀번호 확인:</Label>
//                   <Input type="password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
//                 </FormGroup>
//                 <Button color="primary" type="submit">등록</Button>
//               </Form>
//             }
//           </ModalBody>

//         </Modal>
//       </div>
//     );
//   }

//   export default SignupModal;

// import React, { useState } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { authService } from '/project02/src/Loginbase';

// function SignupModal({ isOpen, toggle, handleSignupSuccess }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSignup = async (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       const userCredential = await authService.createUserWithEmailAndPassword(email, password);
//       await userCredential.user.updateProfile({ displayName: name });
//       handleSignupSuccess(); // Call the handleSignupSuccess function passed from the parent component
//     } catch (error) {
//       setError(error.message);
//     }
//   }

//   return (
//     <Modal isOpen={isOpen} toggle={toggle}>
//       <ModalHeader toggle={toggle}>Signup</ModalHeader>
//       <ModalBody>
//         {error && <p>{error}</p>}
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input type="password" id="confirmPassword" className="form-control" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
//         </div>
//       </ModalBody>
//       <ModalFooter>
//         <Button color="primary" onClick={handleSignup}>Signup</Button>{' '}
//         <Button color="secondary" onClick={toggle}>Cancel</Button>
//       </ModalFooter>
//     </Modal>
//   );
// }

// export default SignupModal;

import React, { useState } from 'react';
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
import { authService, db } from './../../Loginbase';
import 'firebase/compat/firestore';

function SignupModal() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [users, setUsers] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSignup = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
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
    db.collection('users')
      .add({
        name: name,
        email: email,
        password: password,
      })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        setSuccess(true);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
    // ----------------다른코드 -----------------
    // authService.createUserWithEmailAndPassword(email, password)
    // .then((userCredential) => {
    //   const user = userCreadential.user;
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.error(errorCode, errorMessage);
    // });

    // ----------------다른코드 ------------------
    //   await authService.createUserWithEmailAndPassword(email, password);
    //   await authService.currentUser.updateProfile({ displayName: name });
    //   setSuccess(true);
    // } catch (error) {
    //   setError(error.message);
    // }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   db.collection('users').add({
  //     name: name,
  //     email: email,
  //     password: password,
  //   })
  //   .then((docRef) => {
  //     console.log("Document written with ID: ", docRef.id);
  //     setSuccess(true);
  //   })
  //   .catch((error) => {
  //     console.error("Error adding document: ", error);
  //   });
  // }

  const handleSignupSuccess = () => {
    setShowSignupModal(false); // Close the signup modal
    const newUser = { name, email }; // Create a new user object
    setUsers([...users, newUser]); // Add the new user to the list of users
    // Reset the form
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError(null);
    setSuccess(false);
  };

  const toggleSignupModal = () => setShowSignupModal(!showSignupModal);

  return (
    <div>
      <h1>User List</h1>
      {/* <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul> */}
      <Button color="primary" onClick={toggleSignupModal}>
        사원등록
      </Button>
      <Modal isOpen={showSignupModal} toggle={toggleSignupModal}>
        <ModalHeader toggle={toggleSignupModal}>사원등록</ModalHeader>
        <ModalBody>
          {success && <p>사원등록 완료</p>}
          {!success && (
            <Form id="signup-form" onSubmit={handleSignup}>
              {error && <p>{error}</p>}
              <FormGroup>
                <Label for="name">이름:</Label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">이메일:</Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">비밀번호:</Label>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">비밀번호 확인:</Label>
                <Input
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
          )}
          {!success && (
            <>
              <Button color="primary" type="submit" form="signup-form">
                등록하기
              </Button>
              <Button color="secondary" onClick={toggleSignupModal}>
                취소하기
              </Button>
            </>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default SignupModal;
