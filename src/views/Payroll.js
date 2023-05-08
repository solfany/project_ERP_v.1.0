import Employee from "components/Employee-group/Employee";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Payrolls() {
  return (
    <>
      <Route>
        <Router>
          {/* 라우터를 만들어주고  */}
          <div className="content">
            <Employee />
          </div>

          {/* 그 안에 라우트를 만들고, 누군가 우리 웹사이트의 "/" url에 있다면 
          우리는 Home component 를 보여준다. */}
        </Router>
      </Route>
    </>
  );
}

export default Payrolls;
