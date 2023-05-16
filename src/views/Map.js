import React, { useEffect, useState } from "react";
import "components/Vacation/Map.css";
// import newData from 'components/Vacation/VacationModal'
import {
  Button,
  Table,
} from "reactstrap";

import Vacation from "components/Vacation/VacationModal"
import baseData from "components/Vacation/MapArray";
// import { Route } from "react-router-dom";
import { message } from "antd";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

//휴가 신청란의 기본 table 값
const Options = [
  { id: 1, name: "#", value: "" },
  { id: 2, name: "직원 이름", value: "" },
  { id: 3, name: "부서", value: "" },
  { id: 4, name: "직무", value: "" },
  { id: 5, name: "기간", value: "" },
  { id: 6, name: "휴가 종류", value: "" },
  { id: 7, name: "휴가 일수", value: "" },
  { id: 8, name: "사유", value: "" },
  { id: 9, name: "취소", value: "" },
];
const TableSub = Options.map((parameter, index) => (
  <th style={{fontSize:'20px',fontWeight:'bold', textAlign:'center'}} key={index}>{parameter.name}</th>
));
// const Td = N.map((parameters, i) => <td key={i}>{parameters.name}</td>);

function Map() {
  const onRemove = (name) =>{
    const up = data.filter((item)=>item.name !== name)
    setData(up);
    message.success('success')
  }
  const [data, setData] = useState(baseData);
  const init = useSelector((state) => state.init);
  const userObj = useSelector((state) => state.userObj);
  const history = useHistory();
  useEffect(() => {
    if (init && userObj) {
      // 처음 렌더링할 거 있으면 넣는 곳
    } else {
      message.error('로그인 정보가 없습니다. 다시 로그인 해주세요.')
      history.push('/admin/MainLogin');
    }
  }, [init, userObj, history]);
  return (
    <div className="content">
      <h1>휴가 관리</h1>
      <div className="Mmodal_btn">
        <Vacation data={data} setData={setData} onRemove={onRemove} ></Vacation>
    </div>
    
        {/* {textValue} */}
      {/* if(!name && ! email*/}
      {/* math random code 맘대로 */}
      {/* 배열을 만들어서 기본값하고  */}
      <Table>
        <thead>
          <tr>{TableSub}</tr>
        </thead>
        <tbody>
          <tr scope="row"></tr>
          {data.map((data) => (
            <tr key={data.name}>
              <td>{data.code}</td>
              <td>{data.name}</td>
              <td>{data.teamName}</td>
              <td>{data.position}</td>
              <td>{data.etc}</td>
              <td>{data.vacationType}</td>
              <td>{data.day}</td>
              <td>{data.reason}</td>
              <td>
                <button onClick={() => onRemove(data.name)}>삭제</button></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
        </tfoot>
      </Table>
    </div>
  );
}

export default Map;
