import React, { useState } from "react";
import { db, authService } from "Loginbase";
import firebase from "Loginbase";
import { serverTimestamp } from "firebase/firestore";
// import { doc, setDoc } from "firebase/firestore";
function SendMessage() {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = authService.currentUser;

    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      // serverTimestamp : Date.now(),
      createdAt: serverTimestamp(),
      
    });
    setMsg("");
    // async function messageSend(e){
    //   e.prevent.default()
    //   const {uid , photoURL} = authService.currentUser

    // //   await setDoc(doc(db, "messages"), {
    // //     text:msg,
    // //     photoURL,
    // //     uid,
    // //     createdAt :db.FieldValue.serverTimestamp()
    // //   });
    // //   setMsg('')

    //   await db.collection('messages').add({
    //     text:msg,
    //     photoURL,
    //     uid,
    //     createdAt :db.FieldValue.serverTimestamp()
    //   })

   
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <input
          placeholder="messages"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></input>
        <button type="submit">send</button>
      </form>
    </div>
  );
}

export default SendMessage;
