// import Login from '../components/login/Login';
import React, { useState, useEffect } from 'react';
import AppRouter from '../components/Router';
import { authService } from '../Loginbase';
import Auth from '../components/Auth';

// npm install firebase 설치 필요

function MainLogin() {
  const [init, setInit] = useState(false);
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
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : 'Initializing...'}
      {/* <footer>&copy; {new Date().getFullYear()} asdas</footer> */}
    </>
  );
}

export default MainLogin;
