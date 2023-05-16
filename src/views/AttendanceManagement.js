import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import AttendanceInput from './../components/Attendance/AttendanceInput';
import AttendCalendar from 'components/Attendance/AttendCalendar';
import { Switch, Route } from 'react-router-dom';
import './../components/Attendance/Attendance.css';
import { useSelector } from 'react-redux';
import { message } from 'antd';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const tabTitle = [
  {
    tabname: '출결입력',
  },
  {
    tabname: '출결기록',
  },
];

function AttendanceManagement() {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabObj, setTabObj] = useState(tabTitle[tabIndex]);

  const init = useSelector((state) => state.init);
  const userObj = useSelector((state) => state.userObj);
  const history = useHistory();
  useEffect(() => {
    if (init && userObj) {
      history.push('/admin/attendanceManagement/출결입력');
    } else {
      message.error('로그인 정보가 없습니다. 다시 로그인 해주세요.')
      history.push('/admin/MainLogin');
    }
  }, [init, userObj, history]);



  useEffect(() => {
    setTabObj(tabTitle[tabIndex]);
  }, [tabIndex]);

  function handleBtnClick(e) {
    setTabIndex(parseInt(e.target.id));
    history.push(
      `/admin/attendanceManagement/${tabTitle[
        parseInt(e.target.id)
      ].tabname.toLowerCase()}`
    );
  }

  const btnLabels = tabTitle.map((obj) => obj.tabname);

  return (
    <div className="content">
      {init && userObj && 
      <div className="card">
        <div className="tabContainer">
          <div className="navWrapper">
            <Nav
              btnLabels={btnLabels}
              tabIndex={tabIndex}
              handleBtnClick={handleBtnClick}
            />
          </div>
          <div
            className="tabcontent"
            style={{
              minHeight: '600px',
            }}
          >
            <Switch>
              <Route
                path="/admin/attendanceManagement/출결입력"
                render={() => <AttendanceInput />}
              />
              <Route
                path="/admin/attendanceManagement/출결기록"
                render={() => <AttendCalendar />}
              />
            </Switch>
          </div>
        </div>
      </div>
      }
    </div>
  );
}

export default AttendanceManagement;

// --------------------------------------------------------------------------------------
function Nav({ btnLabels, tabIndex, handleBtnClick }) {
  return (
    <nav className="tab">
      {btnLabels.map((label, i) => {
        return (
          <Button
            key={label}
            id={i}
            tabname={label}
            tabIndex={tabIndex}
            handleBtnClick={handleBtnClick}
          />
        );
      })}
    </nav>
  );
}

function Button({ tabname, id, tabIndex, handleBtnClick }) {
  return (
    <button
      className={id === tabIndex ? 'tablinks active' : 'tablinks'}
      id={id}
      onClick={(e) => handleBtnClick(e)}
    >
      {tabname}
    </button>
  );
}
