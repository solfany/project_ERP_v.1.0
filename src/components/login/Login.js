// import React, { useState, useCallback } from 'react';
// import axios from 'axios';
// import * as firebase from 'firebase/app';


// import { Button,
//          Form,
//          FormGroup,
//          Input,
//          Label,
//         } from 'reactstrap';

// function Login() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleChange = useCallback((event) => {
//         const { name, value } = event.target;
//         name === 'username' ? setUsername(value) : setPassword(value);
//     },[]);

//     const handleSubmit = useCallback((event) => {
//         event.preventDefault();
//         axios.post('https://raw.githubusercontent.com/JG-basic/JG/main/data.json', { username, password})
//         .then((response) => {
//             console.log(response.data);
//             // 로그인 성공처리 등의 작업을 수행합니다.
//         })
//         .catch((error) => {
//             console.error(error);
//             // 로그인 실패처리 등의 작업을 수행합니다.
//         });
//     }, [username, password]);
//     //     console.log(`Username: ${username}\nPassword: ${password}`);
//     //     // 로그인 API 호출 작업 수행
//     // }, [username, password]);
    
//   return (
//     <div className="content">
//         <Form className="col-8" onSubmit={handleSubmit}>
        
//             <FormGroup floating>
//             <p>아이디</p>
//                 <Input
//                 id="exampleEmail" 
//                 type="text"
//                 name="username"
//                 placeholder="Email"
//                 value={username}
//                 onChange={handleChange}
//                 />
//                 <Label for="exampleEmail">
//                     Email
//                 </Label>
        
//             </FormGroup>
//             {' '}
//             <FormGroup floating>
      
//             <p>비밀번호</p>
//                 <Input
//                 id="examplePassword"
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={handleChange}
//                 />
//                 <Label for="examplePassword">
//                     Password
//                 </Label>
       
//             </FormGroup>
//             {''}

//             <Button type="Submit">로그인</Button>
//         </Form>
//     </div>

//   );
// };

// export default Login;

//새로운 코드

// import React, { useState } from 'react';
// import { Button,
//          Form,
//          FormGroup,
//          Input,
//          Label,
//         } from 'reactstrap';
// import axios from 'axios';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('https://raw.githubusercontent.com/JG-basic/JG/main/data.json', { username, password });
//       if (response.status === 200) {
//         setIsLoggedIn(true);
//       } else {
//         alert('로그인 실패');
//       }
//     } catch (error) {
//       console.log(error);
//       alert('로그인 실패');
//     }
//   };

//   if (isLoggedIn) {
//     return <div>로그인 성공!</div>;
//   }

//   return (
//     <div className="content">
//     <Form className="col-8" onSubmit={handleSubmit}>
//     <FormGroup floating>
//        <p>아이디</p>
//       <Label>
     
//         <Input 
//         type="text" 
//         value={username} 
//         onChange={(event) => setUsername(event.target.value)} 
//         />
//       </Label>
//     </FormGroup>
//     {' '}
//     <FormGroup floating>
//         <p>비밀번호</p>
//       <Label>
//         <Input
//         type="password"
//         value={password}
//         onChange={(event) => setPassword(event.target.value)} 
//         />
//       </Label>
//       </FormGroup>
//       {' '}
//       <Button type="submit">로그인</Button>
//     </Form>
//     </div>
//   );
// }

// export default Login;

// 또 다른 코드

// import React, { useState } from 'react';
// import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// function Auth () {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [isSignup, setIsSignup] = useState(true);
//     const auth = getAuth();
//     onAuthStateChanged(auth,(user) => {
//         console.log(user);
//     })
//     const signup = async () => {
       
//        const result = await createUserWithEmailAndPassword(auth,email,password);
//        console.log(result);
//     }

//     const signin = () => {
//         const result = await signInWithEmailAndPassword(auth,email,password);
//         console.log(result);
//     }
// }

// export default Auth;

// import React from 'react'

// function Login() {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login
