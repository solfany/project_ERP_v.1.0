import React, { useState, useEffect} from 'react'
import {db,authService} from 'Loginbase'
import SendMessage from './SendMessage'

function Chat() {
    const [messages, setMessages] = useState([])
    useEffect(()=>{
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc =>doc.data()))
        } )
        
    },[])
    console.log(messages)
  return (
    
    <div className='content'>
    {messages.map(({id, text, photoURL})=>(
        <div key={id}>
            <img src={photoURL}/>
            <p>{text}</p>
        </div>
    ))}
    <SendMessage/>
    </div>
  )
}

export default Chat