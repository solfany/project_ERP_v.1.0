
import React, { useState } from "react";
import { db, authService } from "Loginbase";
// import firebase from "Loginbase";
import { serverTimestamp } from "firebase/firestore";
// import { doc, setDoc } from "firebase/firestore";
function SendMessage({ scroll }) {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL, email } = authService.currentUser;

    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      email,
      // serverTimestamp : Date.now(),
      createdAt: serverTimestamp(),
      
    });

    setMsg("");

    if (scroll.current) {
      const chatNode = scroll.current;
      chatNode.scrollTop = chatNode.scrollHeight - chatNode.clientHeight;
    }
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <input
            placeholder="write messages"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          ></input>
          <button type="submit">send</button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
