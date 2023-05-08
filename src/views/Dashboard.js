import React, { useState } from 'react';
import CustomButton from 'components/Button/CustomButton';
import initialEvents from '../components/Calendar/events';
import '../components/CalendarModal/modal.css';
import RunModal from '../components/CalendarModal/RunModal';
import Calendar from '../components/Calendar/Calendar';

function Dashboard() {
  const [isWhiteContent, setIsWhiteContent] = useState(true);
  const [events, setEvents] = useState(initialEvents);

  return (
    <div className="content">
      <div className="card" style={{ padding: '0 10px' }}>
        <div className="calendarHead">
          <div className="contentTitle">근무일정 관리</div>
          <div className="calendarBtnWrapper">
            <RunModal events={events} setEvents={setEvents}></RunModal>
            <div>
              <CustomButton
                type="button"
                className="blue"
                checked={isWhiteContent}
                onClick={() => {
                  setIsWhiteContent(
                    (prevIsWhiteContent) => !prevIsWhiteContent
                  );
                }}
                text="색깔놀이하기"
              />
            </div>
          </div>
        </div>
        <Calendar
          isWhiteContent={isWhiteContent}
          events={events}
          setEvents={setEvents}
        />
      </div>
    </div>
  );
}

export default Dashboard;
