import React, { useState } from "react";
import "./Map.css";
// import {useAuthState} from 'react-firebase-hooks/auth'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
} from "reactstrap";
// import { authService } from "Loginbase";

// 모달창
function Vacation({ data, setData }) {
  // const [user]= useAuthState(authService)
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
  //선택창
  const [teamNameOptionValue, setTeamNameOptionValue] = useState("");
  const [positionValue, setPositionValue] = useState("");
  const [vacationTypeValue, setVacationTypeValue] = useState("");
  const [dayValue, setDayValue] = useState("");
  const [reasonValue, setReasonValue] = useState("");

  //휴가 일정 시작
  const [vacationStartValue, setVacationStartValue] = useState(
    new Date().toISOString()
  );
  const [vacationEndValue, setVacationEndValue] = useState(
    new Date().toISOString()
  );

  console.log(
    (new Date(vacationEndValue) - new Date(vacationStartValue)) /
      (1000 * 60 * 60 * 24)
  );
  //조건문 걸어놓기

  const handleSubmit = (e) => {
    //초기값 설정
    e.preventDefault();
    setUserId("");
    setTeamNameOptionValue("");
    setPositionValue("");
    setVacationTypeValue("");
    setDayValue("");
    setVacationStartValue('');
    setVacationEndValue('');
    setReasonValue('');

    if (userId === "") {
      alert("id 입력하세요");
      //토글안되게 막아야되고
    }
    const newData = {
      code: "#",
      // e.target.value.Math(), 코드 관련 메세지
      name: e.target.elements.Name.value, //이름
      teamName: e.target.elements.teamName.value, //부서명
      position: e.target.elements.position.value, //직무
      vacationType: e.target.elements.vacationType.value, //휴가종류
      day: e.target.elements.day.value, //기간
      etc:
        // `휴가기간 : ` +
        vacationStartValue +
        ` ~ ` +
        vacationEndValue +
        ` , 총 : ` +
        (new Date(vacationEndValue) - new Date(vacationStartValue)) /
          (1000 * 60 * 60 * 24) +
        ` 일 `, //휴가 일수
      reason: e.target.elements.reason.value, //사유
    };
    setData([...data, newData]);
    console.log(data);
    console.log(newData);
  };

  return (
    <div>
      <button className="blue" onClick={toggle}>
        휴가 신청
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}><h2>휴가 신청</h2></ModalHeader>
        <ModalBody>
          <div>
            <form onSubmit={handleSubmit}>
              <ul>
                <li>
                  <Label style={{ width: "70px" }}>이름 : </Label>
                  <input
                    type="id"
                    name="Name"
                    placeholder="이름을 입력하세요"
                    value={userId}
                    onChange={onChangeUserId}
                  ></input>
                </li>
                <li>
                  <Label style={{ width: "70px" }}>부서 : </Label>
                  <select
                    name="teamName"
                    value={teamNameOptionValue}
                    onChange={(e) => setTeamNameOptionValue(e.target.value)}
                  >
                    <option value="">부서를 고르세요</option>
                    <option value="인사팀">인사팀</option>
                    <option value="경영팀">경영팀</option>
                    <option value="영업팀">영업팀</option>
                    <option value="회계팀">회계팀</option>
                  </select>
                </li>
                <li>
                  <Label style={{ width: "70px" }}>직무 : </Label>
                  <select
                    name="position"
                    value={positionValue}
                    onChange={(e) => setPositionValue(e.target.value)}
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
                  <Label style={{ width: "70px" }}>휴가 종류 : </Label>
                  <select
                    name="vacationType"
                    value={vacationTypeValue}
                    onChange={(e) => setVacationTypeValue(e.target.value)}
                  >
                    <option value="">휴가 종류</option>
                    <option value="연차">연차 휴가</option>
                    <option value="특별 휴가">특별 휴가</option>
                    <option value="조퇴">조퇴</option>
                    <option value="기타">기타</option>
                  </select>
                </li>
                <li>
                  <Label style={{ width: "70px" }}>휴가 기간 :</Label>
                  <select
                    name="day"
                    value={dayValue}
                    onChange={(e) => setDayValue(e.target.value)}
                  >
                    <option value="">휴가 기간</option>
                    <option value="하루">하루</option>
                    <option value="오전">오전</option>
                    <option value="오후">오후</option>
                  </select>
                </li>
                <li>
                  <Label style={{ width: "70px" }}>날짜 입력 :</Label>
                  <input
                    type="date"
                    name="dayStart"
                    value={vacationStartValue}
                    onChange={(e) => setVacationStartValue(e.target.value)}
                  ></input>
                  <input
                    type="date"
                    name="dayEnd"
                    value={vacationEndValue}
                    onChange={(e) => setVacationEndValue(e.target.value)}
                  ></input>
                </li>

                
                <li>
                  <label style={{ width: "70px" }}>메모</label>
                  <textarea
                    name="reason"
                    value={reasonValue}
                    onChange={(e) => {
                      setReasonValue(e.target.value);
                    }}
                    style={{ width: "95%" }}
                    placeholder="내용을 입력하세요"
                  ></textarea>
                  <Button color="primary" type="submit" onClick={toggle}>
                    신청하기
                  </Button>
                  <Button color="secondary" onClick={toggle}>
                    취소하기
                  </Button>
                </li>
              </ul>
            </form>
          </div>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
}

export default Vacation;

