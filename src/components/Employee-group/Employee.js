import { NavLink, Link, Switch, Route } from "react-router-dom";
import { Nav } from "reactstrap";
import EmployeeCalculator from "./001";
import EmployeeStatemenst from "./002";
import EmployeeManagement from "./003";

function Employee() {
  return (
    <>
      <Nav className="d-flex justify-content-around">
        <NavLink to="/Employee/001" className="Employee-nav">
          <h3>급여 계산기</h3>
        </NavLink>
        <NavLink to="/Employee/002" className="Employee-nav">
          <h3>급여 명세서</h3>
        </NavLink>
        <NavLink to="/Employee/003" className="Employee-nav">
          <h3>급여 관리</h3>
        </NavLink>
      </Nav>
      <Switch>
        <Route exact path="/Employee/001" component={EmployeeCalculator} />
        <Route exact path="/Employee/002" component={EmployeeStatemenst} />
        <Route exact path="/Employee/003" component={EmployeeManagement} />
      </Switch>
    </>
  );
}
export default Employee;
