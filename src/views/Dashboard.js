import React, { useEffect, useState } from 'react';
import initialEvents from '../components/Calendar/events';
import '../components/CalendarModal/modal.css';
import RunModal from '../components/CalendarModal/RunModal';
import Calendar from '../components/Calendar/Calendar';
import { useSelector } from 'react-redux';
import { message } from 'antd';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Dashboard() {
  const [events, setEvents] = useState(initialEvents);

// //////로그인 정보 없으면 로그인화면으로 밀어버리는 코드 /////// //
  const init = useSelector((state) => state.init);
  const userObj = useSelector((state) => state.userObj);
  const history = useHistory();
  useEffect(() => {
    if (init && userObj) {
      // 처음 렌더링할 거 있으면 넣는 곳
    } else {
      message.error('로그인 정보가 없습니다. 다시 로그인 해주세요.')
      history.push('/admin/MainLogin');
    }
  }, [init, userObj, history]);
////////////////////////////////////////////////////////////////////


  return (
    <div className="content">
    {init && userObj &&
      <div className="card" style={{ padding: '0 10px' }}>
        <div className="calendarHead">
          <h2 className="calendarTitle">근무일정 관리</h2>
          <div className="calendarBtnWrapper">
            <RunModal events={events} setEvents={setEvents}></RunModal>
          </div>
        </div>
        <Calendar events={events} setEvents={setEvents} />
        </div>
        }
      </div>
    
  );
}

export default Dashboard;
