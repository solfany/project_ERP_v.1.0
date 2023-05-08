import React, { useState } from "react";
import "../components/Vacation/Map.css";

// import Mmodal from "../components/Vacation/Modal copy";
import {
  Button,
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

import Example from "../components/Vacation/Modal copy";
import baseData from "../components/Vacation/MapArray";
import { Route } from "react-router-dom";


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

  const [data, setData] = useState(baseData);
  // inint
  return (
    <div className="content">
      <h1>휴가 관리</h1>
      <div className="Mmodal_btn">
        <Example data={data} setData={setData}></Example>
    </div>
    <div className="Mmodal_btn">
        <Button path= '/dashboard'>휴가 일정 관리 조회</Button></div>
        {/* {textValue} */}
      
      {/* 배열을 만들어서 기본값하고  */}
      <Table>
        <thead>
          <tr>{TableSub}</tr>
        </thead>
        <tbody>
          <tr scope="row">{Td}</tr>
          {data.map((data) => (
            <tr key={data.name}>
              <td>{data.code}</td>
              <td>{data.name}</td>
              <td>{data.teamName}</td>
              <td>{data.position}</td>
              <td>{data.vacationType}</td>
              <td>{data.day}</td>
              <td>{data.etc}</td>
              <td>{data.reason}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>

        </tfoot>
      </Table>

      {/* <Table></Table> */}
      {/* <Example></Example> */}
    </div>
  );
}

export default Map;
