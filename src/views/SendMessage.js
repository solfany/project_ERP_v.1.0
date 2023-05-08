import React from 'react'
import {db, authService ,firebaseInstance}  from 'Loginbase'
import { useState } from 'react'

function SendMessage() {
    const [msg, setMsg] = useState('')

    async function SendMessage(e){
        e.preventDefault()
        const{uid, photoURL} = authService.currentUser

        await db.collection('messages').add({
            text : msg,
            photoURL,
            uid,
            // timestamp : Date.now(),
            //createdAt: db.fireStore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }
  return (
    <div>SendMessage
        <form onSubmit={SendMessage}> 
            <input 
            value={msg} 
            onChange={(e)=>{setMsg(e.target.value)}}
            placeholder='write...'></input>
            <button type='submit'>send</button>
        </form>
    </div>
  )
}

export default SendMessage;