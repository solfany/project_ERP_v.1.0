import React from "react";
import listStyle from "./listStyle.css";

function GetThisMonth() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  const options = [];
  for (let i = 1; i <= 4; i++) {
    options.push(
      <option key={month - i} value={month - i}>
        {month - i}
      </option>
    );
  }

  return (
    <div className="d-flex month">
      <h1>{year} 년</h1>
      <select>{options}</select>
      <h1> 월</h1>
    </div>
  );
}

export default GetThisMonth;
