import React, { useState } from "react";
import "./Map.css";

// 모달창

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import { Children } from "react/cjs/react.production.min";

function Example({ data, setData }) {
  // 모달창 토글 방식
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  //모달창 내부 이름 텍스트 입력
  const [userId, setUserId] = useState("");
  const onChangeUserId = (e) => {
    console.log(e.target.value);
    setUserId(e.target.value);
  };
  // 모달창 내부 입력값 table로 전송
  const [optionValue, setOptionValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleSubmit = (e) => {
    console.log('s')
    e.preventDefault();
    const newData = {
      code: "",
      name: e.target.elements.Name.value,
      class: e.target.elements.Class.value,
      classType :e.target.elements.Day.checked,
      // vacationType: e.target.elements.vacationType.checked,
      day: "",
      etc: "",
      reason: "why"
    };
    setData(...data, newData);
    console.log(data)
    console.log(newData)
  };
  // props.onSubmit(e.target.elements.userId.value);
  //   const xival = {
  //   code:'',
  //   name:{userId},
  //   class:{optionValue},
  //   check:{checkboxValue}

  //  }

  // setOptionValue(e.target.value)
  // setCheckboxValue(e.target.checked)

  return (
    <div>
      {/* 아래에 있는 컴포넌트들은 다 style관련된 css일뿐 일반 tag랑 같고 기능적 의미는 1도 없는 상태이다 (가정) */}
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <div>
            {/* {Mmodal && 의미 */}
            <form onSubmit={handleSubmit}>
              <ul>
                <li>
                  <label>이름 : </label>
                  <input
                    type="id"
                    name="Name"
                    //   id={onChange}
                    placeholder="이름을 입력하세요"
                    value={userId}
                    onChange={onChangeUserId}
                  ></input>
                  {/* 별 의미 없는 하위 <span> */}
                  <span>{userId}</span>
                </li>
                <li>
                  <label>부서 : </label>
                  <select
                    name="Class"
                    class="Class"
                    value={optionValue}
                    onChange={(e) => setOptionValue(e.target.value)}
                  >
                    <option value="" >
                      부서를 고르세요
                    </option>
                    <option value="인사팀">
                      인사팀
                    </option>
                    <option value="경영팀">경영팀</option>
                    <option value="영업팀">영업팀</option>
                    <option value="회계팀">회계팀</option>
                  </select>
                </li>
                <li>
                  <label>직무 : </label>
                  <select
                    
                    // value={optionValue}
                    // onChange={(e) => setOptionValue(e.target.value)}
                  >
                    <option value="">직무를 고르세요</option>
                    <option value="부장">부장</option>
                    <option value="차장">차장</option>
                    <option value="과장">과장</option>
                    <option value="대리">대리</option>
                    <option value="주임">주임</option>
                    <option value="사원">사원</option>
                  </select>
                </li>
                <li>
                  <label>휴가 종류 : </label>
                  <select name="vacationType" vacationType='vacationType'>
                    <option value="">휴가 종류를 고르세요</option>
                    <option value="연차">연차 휴가</option>
                    <option value="특별 휴가">특별 휴가</option>
                    <option value="조퇴">조퇴</option>
                    <option value="기타">기타</option>
                  </select>
                </li>

                <li>
                  <label>기간 : </label>
                  <input
                    name="Day"
                    type="checkbox"
                    id="check1"
                    checked={checkboxValue}
                    onChange={(e) => setCheckboxValue(e.target.checked)}
                  ></input>
                  <label style={{ width: "40px" }}>하루</label>

                  <input
                    type="checkbox"
                    id="check2"
                    
                    
                  ></input>

                  <label style={{ width: "40px" }}>오전</label>
                  <input
                    type="checkbox"
                    id="check3"
                    
                    onChange={''}
                  ></input>
                  <label style={{ width: "40px" }}>오후</label>
                </li>
                <li>
                  <label>유급 시간 : </label>
                  <input type="number"></input>
                </li>
                <li>
                  <label>차감 시간 : </label>
                  <input type="number"></input>
                </li>
                <li>
                  <label>특별 옵션 : </label>
                  <input type="checkbox" id="check4"></input>
                  <label>해당 없음</label>
                  <input type="checkbox" id="check5"></input>
                  <label>휴일</label>
                </li>
                <li>
                  <label>메모</label>
                  <textarea
                    style={{ width: "95%" }}
                    placeholder="내용을 입력하세요"
                  ></textarea>

                  <Button color="primary" type="submit" onClick={toggle}>{' '}
                    Do Something
                  </Button>
                  <Button color="secondary" onClick={toggle}>
                    Cancel
                  </Button>
                </li>
              </ul>
            </form>
          </div>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
      {userId}
    </div>
  );
}

//유저 코드넘버는 회원가입했을떄 랜덤으로 정해지는 id값이 됨
//table list에 와야 하는게 유저코드너버, 이름, 부서, 직책 4개 일치했을때
// 로컬 스토리지나 express 서버로 보내고 불러오는
//select의 태그의 value 확인 ,check box, text area

//바뀐 state값을

//usestate하나만 사용
export default Example;

//모달창
// function Mmodal() {
//   //모달창에 대한 state 값 선언 여기서
//   const [modalSwitch, setModalSwitch] = useState(true);
//   //주의 해야할점은 useState(true)의 기본값이다 왜 기본값이 true인가?
//   //이유는 모달창이 나오기 전에 <Table/>컴포넌트에서 useState값이 기본 값이 false 이고
//   //<Table/>컴포넌트 내부에서 button을 눌렀을때 uesState가 true가 되어 모달창이 보이게 된다.
//   return (
//     //먼저 1번 모달창 전체를 <div>나 <>로 묶어주고, 2번 state 값인 modalSwitch를 연산자 &&를 사용해
//     //state값이 모달창 전체와의 and 연산자를{state && 표현하고자 하는 값}
//     <>
//       {modalSwitch &&
//         <div className="Mmodal">
//           <h3>
//             휴가 유형 추가하기
//             <button
//               onClick={() => {
//                 setModalSwitch(false);
//                 // Map.closeModal();
//               }}
//               className="Mmodal_btn"
//             >
//               👍
//               {/* onClick={()=>{setModalSwitch(true) */}
//             </button>
//             {/* {
//               modalSwitch===true? null : <Mmodal/>
//             } */}
//             <hr></hr>
//           </h3>

//           <form>
//             <ul>
//                 <li>
//                 <label>이름</label>
//                 <input
//                   type="id"
//                   id="id"
//                   placeholder="이름을 입력하세요"
//                 ></input>
//               </li>
//               <li>
//                 <label>부서</label>
//                 <select>
//                   <option selected>부서를 고르세요</option>
//                   <option>인사팀</option>
//                   <option>경영팀</option>
//                   <option>영업팀</option>
//                   <option>회계팀</option>
//                 </select>
//               </li>
//               <li>
//                 <label>직무</label>
//                 <select>
//                   <option selected>직무를 고르세요</option>
//                   <option>부장</option>
//                   <option>차장</option>
//                   <option>과장</option>
//                   <option>대리</option>
//                   <option>주임</option>
//                   <option>사원</option>
//                 </select>
//               </li>
//               <li>
//                 <label>휴가 종류</label>
//                 <select>
//                   {/* 노마드 코더 확인 select */}
//                   <option selected>휴가 종류를 고르세요</option>
//                   <option>연차 휴가</option>
//                   <option>특별 휴가</option>
//                   <option>조퇴</option>
//                 </select>
//               </li>

//               <li>
//                 <label>기간</label>
//                 <input type="checkbox" id="check1"></input>
//                 <label style={{width:"40px"}}>하루</label>
//                 <input type="checkbox" id="check2"></input>
//                 <label style={{width:"40px"}}>오전</label>
//                 <input type="checkbox" id="check3"></input>
//                 <label style={{width:"40px"}}>오후</label>
//               </li>
//               <li>
//                 <label>유급 시간(h)</label>
//                 <input type="number"></input>
//               </li>
//               <li>
//                 <label>차감 시간</label>
//                 <input type="number"></input>
//               </li>
//               <li>
//                 <label>특별 옵션</label>
//                 <input type="checkbox" id="check1"></input>
//                 <label>해당 없음</label>
//                 <input type="checkbox" id="check2"></input>
//                 <label>휴일</label>
//               </li>
//               <li>
//                 <label>메모</label>
//                 <textarea
//                   style={{ width: "100%" }}
//                   placeholder="내용을 입력하세요"
//                 ></textarea>
//               </li>
//             </ul>
//             <button
//             className="Mmodal_btn"
//             onClick={()=>{
//                 setModalSwitch(false)
//             }}
//             >
//               닫기
//             </button>
//           </form>
//           <div>
//             <button className="Mmodal_btn">추가 하기</button>
//           </div>
//         </div>
//      }
//     </>
//   );
// }

// //usestate하나만 사용
// export default Mmodal;

// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import react , {useState}from 'react';

// function Map() {
//     let [modal, setModal] = useState(false); //모달창에 대한 default 값
//     const closeModal = () => {
//       setModal(!modal);
//       //변수 closeModal이 토글역할
//     };
//     return (
//       <div className="content">

//         <h1>휴가 관리</h1>
//         <div className="Mmodal_btn">
//           <Button style={{background:'black'}}
//       color="primary"
//       onClick={closeModal}
//     >
//       휴가 일정 추가
//     </Button>
//     {/* {modal && <Mmodal />} */}
//           {/* <button
//             onClick={() => {
//               setModal(true);
//             }}
//           >
//             휴가 일정 추가
//           </button> */}

//           {/* {modal === true ? <Mmodal></Mmodal> : null} */}
//           <Button
//             onClick={() => {
//               setModal(false);
//             }}
//             color="primary"
//           >
//             휴가 일정 닫기
//           </Button>
//           <Button color="primary">휴가 일정 조회</Button>
//         </div>

//         {/* <Table></Table> */}

//       </div>
//     );
//   }

//   export default Map;
