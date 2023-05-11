// import React, { useState } from "react";
// import {db} from 'Loginbase'
// import {collection, query,where, getDocs, setDoc, updateDoc, serverTimestamp} from "firebase/firestore"
// import {AuthContext} from 'AuthContext'

// const Search = () => {
//   const [username, setUsername] = useState("");
//   const [user, setUser] = useState(null);
//   const [err, setErr] = useState(false);

//   const {currentUser} = useContext(AuthContext)


//   const handelSearch = async()=>{
//     const q = query(collection(db, 'users'),
//     where('displayname',"==",username)
//     );

//     try{
//       const querySnapshot =await getDocs(q)
//     querySnapshot.forEach(doc => {
//       setUser(doc.data())
      
//     });
//     }catch(err){
//     setErr(true)
//     }
//   }

//   const handleKey =(e)=>{
//     e.code === 'Enter'&& handelSearch()
//   }
//   const handleSelect =async()=>{
// const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
// try{
//   const res =await getDoc(doc(db,"chats",combinedId))

//   if(!res.exists()){
//     //create a chat in chats collection
//     await setDoc(doc(db,"chats",combinedId),{messages:[]})
//     // create userChats

//     //받는 사람에 메신저 이름 시간 및 내용 이름
//     await updateDoc(doc(db,"userChats", currentUser.uid),{
//       [combinedId + ".userInfo"]:{
//         uid:user.uid,
//         displayName:user.displayName,
//         photoURL: user.photoURL
//       },
//       [combinedId+'.date'] : serverTimestamp()
//     })
//     //보내는 사람 메신저? 둘중에 하나임
//     await updateDoc(doc(db,"userChats", user.uid),{
//       [combinedId + ".userInfo"]:{
//         uid:currentUser.uid,
//         displayName:currentUser.displayName,
//         photoURL: currentUser.photoURL
//       },
//       [combinedId+'.date'] : serverTimestamp()
//     })

//     // userChats :{
//     //   janesId:{
//     //     combinedId:{
//     //       userInfo{
//     //         displayName,img,id
//     //       },
//     //       lastMessage:'',
//     //       date:
//     //     }
//     //   }
//     // }
//   }
// }catch(err){}
// setUser(null)
// setUsername('')
//   }
//   return (
//     <div className="ssearch">
//       <div className="ssearchForm">
//         <input
//           className="iinput"
//           type="text"
//           placeholder="아 쫌 찾아봐"
//           onKeyDown={handleKey}
//           onChange={(e)=>setUsername(e.target.value)}
//           value={username}
//         ></input>
//       </div>
//       {err && <span>없다 시블</span>}
//       {user && <div className="uuserChat" onClick={handleSelect}>
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63_z9nCWs3xGAsNIfwwGQZqrkVdbzpBqzJShClrhi-4F0XPH_kG94McjcyG7nkQMsHsk&usqp=CAU"
//           // src={user.photoURL}
//           className="iimmgg"
//         ></img>
//         <div className="uuserChatInfo">
//           <span>정원</span>
//           {/* <span>{user.displayName}</span> */}
//         </div>
//       </div>}
//     </div>
//   );
// };

// export default Search;
