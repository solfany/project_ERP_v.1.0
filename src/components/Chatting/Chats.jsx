// import { onSnapshot } from "firebase/firestore";
// import React, { useContext, useEffect, useState } from "react";
// import { db } from "Loginbase";
// //onSnapshot 실시간 데이터를 반환하는 함수
// const Chats = () => {
//   const [chats, setChats] = useState([]);

//   const { currentUser } = useContext(AuthContext);
//   useEffect(() => {
//     const getChats = () => {
//       const unsub = onSnapshot(
//         doc(db, "userChats", currentUser.uid),
//         (doc) => {}
//       );

//       return () => {
//         unsub();
//       };
//     };
//     currentUser.uid && getChats();
//   }, [currentUser.uid]);
//   return (
//     <div className="cchats">
//       {Object.entries(chats)?.map((chat)=>(
//       <div className="uuserChat" key={chat[0]}>
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63_z9nCWs3xGAsNIfwwGQZqrkVdbzpBqzJShClrhi-4F0XPH_kG94McjcyG7nkQMsHsk&usqp=CAU"
//           className="iimmgg"
//         ></img>
//         {/* <img
//           src={chat[1].userInfo.photoURL}
//           className="iimmgg"
//         ></img> */}
//         <div className="uuserChatInfo">
//           <span className="sub_span">정원 4세</span>
//           {/* <span className="sub_span">{chat[1].userInfo.displayName}</span> */}
//           <p className="sub_p">정원 4세</p>
//           {/* <p className="sub_p">{chat[1].userInfo.lastMessage?.text}</p> */}
//         </div>
//       </div>
//       ))}
//     </div>
//   );
// };

// export default Chats;
