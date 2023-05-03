import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Userlsit from "./routes/Userlist.js";
import Apple from "./routes/Apple.js";
import { Table } from "reactstrap";

// detail import

function Attendance() {
  return (
    <Route>
      {" "}
      <Router>
        {/* 라우터를 만들어주고  */}
        <Userlsit />

        {/* 그 안에 라우트를 만들고, 누군가 우리 웹사이트의 "/" url에 있다면 
          우리는 Home component 를 보여준다. */}
      </Router>
    </Route>
  );
}
export default Attendance;
