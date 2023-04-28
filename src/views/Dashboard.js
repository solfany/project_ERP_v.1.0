import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
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
        <Calendar
          isWhiteContent={isWhiteContent}
          events={events}
          setEvents={setEvents}
        />
        <div className="calendarHead">
          <RunModal events={events} setEvents={setEvents}></RunModal>
          <Button
            color="success"
            size="sm"
            checked={isWhiteContent}
            onClick={() => {
              setIsWhiteContent((prevIsWhiteContent) => !prevIsWhiteContent);
            }}
          >
            색깔놀이 하기
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
