import React, { useState, useEffect } from "react";
import { NavLink, Link, Switch, Route } from "react-router-dom";
import { Nav } from "reactstrap";
import EmployeeCalculator from "./001";
import EmployeeStatemenst from "./002";
import EmployeeManagement from "./003";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { message } from "antd";

function Employee() {
  const init = useSelector((state) => state.init);
  const userObj = useSelector((state) => state.userObj);
  const history = useHistory();
  useEffect(() => {
    if (init && userObj) {
      // 처음 렌더링할 거 있으면 넣는 곳
    } else {
      message.error("로그인 정보가 없습니다. 다시 로그인 해주세요.");
      history.push("/admin/MainLogin");
    }
  }, [init, userObj, history]);
  const [showCalculator, setShowCalculator] = useState(true);

  const handleComponentChange = () => {
    setShowCalculator(false);
  };

  return (
    <>
      <Nav className="d-flex justify-content-around">
        <NavLink
          to="/Employee/001"
          className={`Employee-nav ${showCalculator ? "active" : ""}`}
          onClick={() => setShowCalculator(true)}
        >
          <h1>급여 계산기</h1>
        </NavLink>
        <NavLink
          to="/Employee/003"
          className={`Employee-nav ${!showCalculator ? "active" : ""}`}
          onClick={handleComponentChange}
        >
          <h1>급여 관리</h1>
        </NavLink>
      </Nav>
      <Switch>
        <Route exact path="/Employee/001">
          {showCalculator && <EmployeeCalculator />}
        </Route>
        <Route exact path="/Employee/003">
          {!showCalculator && <EmployeeManagement />}
        </Route>
        <EmployeeCalculator />
      </Switch>
    </>
  );
}

export default Employee;
