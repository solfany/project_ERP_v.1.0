import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Userlsit from "../components/Userlist-group/Userlist.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import { message } from "antd";
// detail import

function Attendance() {
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
