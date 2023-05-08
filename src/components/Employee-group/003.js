import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
function EmployeeManagement() {
  const [rows, setRows] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/solfany/Json_Group/main/json/project/002/user-list.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
      });
  }, []);

  useEffect(() => {
    setRows(
      users.map((user) => [
        user.rank,
        user.name,
        user.data5,
        user.data1,
        user.email,
        user.date,
        "no",
      ])
    );
  }, [users]);

  function getThisMonth() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    return `${year}년 ${month}월`;
  }

  const tableColumns = [
    "사원번호",
    "이름",
    "유급휴가일수",
    "실제근로일수",
    "이메일",
    "입사일",
    "지급여부",
  ];

  return (
    <>
      <div className="content">
        <h1>{getThisMonth()} 급여 페이지</h1>
        <grid fluid>
          <Table>
            <thead>
              <tr>
                {tableColumns.map((col) => (
                  <td>{col}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  {row.map((col, j) => (
                    <td key={j}>{col}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </grid>
      </div>
    </>
  );
}

export default EmployeeManagement;
