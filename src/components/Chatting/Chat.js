import React, { useState, useEffect } from "react";
import Signout from "./Signout";
import { db, authService } from "Loginbase";
import SendMessage from "./SendMessage";
// import { onSnapshot } from 'firebase/firestore'
// import './Chat.css'
//useEffect 쓰는 이유는 페이지가 로드 될떄 사용효과가 한번 실행
//사용효과가 내부의 변수중 하나가 변경될떄마다 사용효과가  실행? 뭔개소리?
const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db
        .collection("messages")
        .orderBy("createdAt")
        .limit(50)
        .get();
      setMessages(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, [messages]);

  //-------------------------------------------
  //    useEffect(async () => {

  //      const dbdata = await db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(dbdata => {
  //         setMessages(dbdata.docs.map(doc => doc.data()))
  //     })
  // }, [])

  //-------------------------------------
  // useEffect(() => {
  //   db.collection("messages")
  //     .orderBy("createdAt")
  //     .limit(50)
  //     .onSnapshot((snapshot) => {
  //       setMessages(snapshot.docs.map((doc) => doc.data()));
  //     });
  // }, []);
  // console.log(messages);

  return (
    <div className="content">
      <Signout></Signout>
      <div></div>
      {messages.map(({ id, text, photoURL, uid }) => (
        <div>
          <div
            key={id}
            className={`msg ${
              uid === authService.currentUser.uid ? "sent" : "received"
            }`}
          >
            <img src={photoURL}></img>
            <p >{text}</p>
          </div>
        </div>
      ))}
      
      <SendMessage />
    </div>
  );
};

export default Chat;
