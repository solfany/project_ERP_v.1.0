import React from 'react'
import SignIn from 'components/Chatting/SignIn'
import Chat from 'components/Chatting/Chat'
import {useAuthState} from 'react-firebase-hooks/auth'
import { authService , firebaseInstance } from 'Loginbase'
const RealChat = () => {
    const [user]= useAuthState(authService)
  return (
    
    <div className='content'>RealChat 이제 진짜 시작이다
    <div>주제 파악 완료</div>
    {user ? <Chat></Chat>: <SignIn></SignIn>}
    
   
    </div>
  )
}

export default RealChat