import React, { useState } from "react";
import "../components/Vacation/Map.css";
// import Mmodal from "../components/Vacation/Modal copy";
import {
  //   Button,
  //   ButtonGroup,
  //   Card,
  //   CardHeader,
  //   CardBody,
  //   CardTitle,
  //   DropdownToggle,
  //   DropdownMenu,
  //   DropdownItem,
  //   UncontrolledDropdown,
  //   Label,
  //   FormGroup,
  //   Input,
  Table,
  //   Row,
  //   Col,
  //   UncontrolledTooltip
} from "reactstrap";
//import Example from "./Modal";
import Example from "../components/Vacation/Modal copy";
// import But from "./Modal copy";
// import TT from "./Listt";
// reactstrap components
// import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

//1. 휴가 신청 추가 버튼(완)으로 모달창 생성(50%),닫기(50%) 버튼 이후 휴가 신청 가능
//1-1 휴가 신청하기 버튼으로 창 닫고 submit으로 데이터 전송 이후
//    창은 닫고 해당 데이터의 값은 content로 목록화

//2. 휴가 조회 시스템 버튼

// const MapModal = <div style={{display:"none", border:"3px solid blue"}}>ddd</div>

// function modalClose(){
//   let[modalSwitch, setModalSwitch] = useState(false)
// }

const N = [
  { id: 1, name: "#", value: "" },
  { id: 2, name: "직원 이름", value: "" },
  { id: 3, name: "부서", value: "" },
  { id: 4, name: "직무", value: "" },
  { id: 5, name: "휴가 종류", value: "" },
  { id: 6, name: "기간", value: "" },
  { id: 7, name: "차감 일수", value: "" },
  { id: 8, name: "사유", value: "" },
];
// const Table = Options.map((parameter) => (
//       <th key={Options.id}>{parameter.name}</th>
// ));

const Options = [
  { id: 1, name: "#", value: "" },
  { id: 2, name: "직원 이름", value: "" },
  { id: 3, name: "부서", value: "" },
  { id: 4, name: "직무", value: "" },
  { id: 5, name: "휴가 종류", value: "" },
  { id: 6, name: "기간", value: "" },
  { id: 7, name: "차감 일수", value: "" },
  { id: 8, name: "사유", value: "" },
];
const TableSub = Options.map((parameter, index) => (
  <th key={index}>{parameter.name}</th>
));
const Td = N.map((parameters, i) => <td key={i}>{parameters.name}</td>);




function Map() {
  const [textValue, setTextValue] = useState("");

  

    const getTextValue = ( e) => {
      // TT = {
      //   이름 : e.target.value ,
      //   부서 : '',
      //   직무 : ''
      // }
    setTextValue();
  }

  
  return (
    <div className="content">
      <h1>휴가 관리</h1>
      <div className="Mmodal_bn">
        <Example getTextValue={getTextValue}>
        </Example>
        {textValue}
      </div>
    {/* 배열을 만들어서 기본값하고  */}
      <Table>
        <thead>
          <tr>{TableSub}</tr>
        </thead>
        <tbody>
          <tr scope="row">{Td}</tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>

      {/* <Table></Table> */}
      {/* <Example></Example> */}
    </div>
  );
}

export default Map;
