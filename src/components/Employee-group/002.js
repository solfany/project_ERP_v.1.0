// import React from "react";
// import { Input, Label } from "reactstrap";
// import { Table, Row, Col, Button, FormGroup } from "reactstrap";
// import { useState, useEffect } from "react";
// import clickBtn from "./click-btn";
// class EmployeeStatement extends React.Component {
//   downloadTable = () => {
//     // 테이블 데이터를 CSV 형식으로 변환
//     const tableData = [
//       ["이름", "직급", "월급"],
//       ["John Doe", "매니저", "5000"],
//       ["Jane Smith", "사원", "3000"],
//       ["Bob Johnson", "사원", "2500"],
//     ];
//     const csvContent =
//       "data:text/csv;charset=utf-8," +
//       tableData.map((row) => row.join(",")).join("\n");

//     // 가상의 링크를 생성하여 다운로드 시행
//     const link = document.createElement("a");
//     link.setAttribute("href", encodeURI(csvContent));
//     link.setAttribute("download", "salary_table.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   render() {
//     return (
//       <div>
//         <table>
//           <tr>test</tr>
//           <tr>test</tr>
//           <tr>test</tr>
//           <tr>test</tr>
//         </table>
//         <button onClick={this.downloadTable}>테이블 다운로드</button>
//       </div>
//     );
//   }
// }
// export default EmployeeStatement;
