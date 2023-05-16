
import React, { useEffect } from 'react'
// import SignIn from 'components/Chatting/SignIn'
import Chat from 'components/Chatting/Chat'
import {useAuthState} from 'react-firebase-hooks/auth'
import { authService , firebaseInstance } from 'Loginbase'
import { useSelector} from 'react-redux'
import { message } from 'antd';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
// import {useSelector,useHistory,useEffect } from 'react-redux'
// import './RealChat.css'
const RealChat = () => {
    const [user]= useAuthState(authService)
    //로그인 했을때 생겨나는 auth에 user항목을 배열로 가져오는데 useAuthState메서드를 이용해 쉽게 가져온다

    const init = useSelector((state) => state.init);
    const userObj = useSelector((state) => state.userObj);
    const history = useHistory();
    useEffect(() => {
      if (init && userObj) {
        // 처음 렌더링할 거 있으면 넣는 곳
      } else {
        message.error('로그인 정보가 없습니다. 다시 로그인 해주세요.')
        history.push('/admin/MainLogin');
      }
    }, [init, userObj, history]);
  return (
    <div className='content'>
    {/* {user ? <Chat></Chat>: <SignIn></SignIn>}
    유저의 정보에 대한  */}
    {user ? <Chat></Chat>: <div style={{textAlign:'center',fontSize:'90px',marginLeft:'0px',marginTop:'100px'}}>자정겸원은 무슨 과천에 있는 조경환경 업체 이름이냐? </div> }
    </div>
  )
}

export default RealChat