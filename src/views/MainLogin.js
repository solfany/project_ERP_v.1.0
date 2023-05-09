// import Login from '../components/login/Login';
import React, { useState, useEffect } from 'react';
import AppRouter from "../components/login/Router";
import { authService } from '../Loginbase';
import Main from "../views/Main"
// import Auth from '../components/login/Auth';
// import Auth from "../components/login/Auth";
// import Auth from "../components/login/Auth"
// import "../components/login/Login.css";

// npm install firebase 설치 필요

function MainLogin () {
  const [init,setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
        setInit(true);
      });
    }, []);
 
    return (
      <>
      {/* <Auth /> */}
      {/* <AppRouter isLoggedIn={isLoggedIn} /> */}
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
      {/* {init ? <AppRouter /> : "Initializing..."} */}
      {/* <footer>&copy; {new Date().getFullYear()} asdas</footer> */}
      </>
    );
  }


export default MainLogin;

// function MainLogin () {
//   console.log();
//   const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
//   return (
//     <>
//       <AppRouter isLoggedIn={isLoggedIn} />
//       <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
//     </>
//   );
// }


// export default MainLogin;

// 새로운거 작업

// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../components/Reducer/userSlice';
// import axios from 'axios';

// const LoginComponent = () => {
//   const dispatch = useDispatch();
  
//   const [id, setId] = useState("");
//   const [password, setPassword] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [msg, setMsg] = useState("");

//   useEffect(() = (e) => {

//   }, [msg])

//   const LoginFunc = (e) => {
//     e.preventDefault();

//   }
//   return (
//     <>
//       <h1>LoginComponent</h1>
//       <form onSubmit={LoginFunc}>
//         <label htmlFor="id">ID :</label>
//         <input type="text" id="id" />
//         <br />
//         <label htmlFor="password">Password</label>
//         <input type="password" />
//         <br />
//         <button type="submit">로그인</button>
//         <br />
//         {msg}
//       </form>
//     </>
//   )
// }