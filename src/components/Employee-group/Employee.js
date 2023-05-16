import React, { useState, useEffect } from "react";
import { NavLink, Link, Switch, Route } from "react-router-dom";
import { Nav } from "reactstrap";
import EmployeeCalculator from "./001";
import EmployeeStatemenst from "./002";
import EmployeeManagement from "./003";

function Employee() {
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
