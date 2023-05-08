import React from 'react'
import Chat from './Chat'
import {auth} from 'Loginbase'
import {useAuthState} from 'react-firebase-hook'
import MainLogin from './MainLogin'
function App() {
    const [user] = useAuthState(auth)
  return (
    <div>
        {/* {user ? <Chat/>:<MainLogin/>} */}
    </div>
  )
}

export default App