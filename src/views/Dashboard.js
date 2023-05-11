import React, { useState } from 'react';
import initialEvents from '../components/Calendar/events';
import '../components/CalendarModal/modal.css';
import RunModal from '../components/CalendarModal/RunModal';
import Calendar from '../components/Calendar/Calendar';

function Dashboard() {
  const [events, setEvents] = useState(initialEvents);

  return (
    <div className="content">
      <div className="card" style={{ padding: '0 10px' }}>
        <div className="calendarHead">
          <h2 className="calendarTitle">근무일정 관리</h2>
          <div className="calendarBtnWrapper">
            <RunModal events={events} setEvents={setEvents}></RunModal>
          </div>
        </div>
        <Calendar events={events} setEvents={setEvents} />
      </div>
    </div>
  );
}

export default Dashboard;
