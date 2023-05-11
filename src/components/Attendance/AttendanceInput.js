import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Clock from './Clock';
import CheckButton from './CheckButton';

function AttendanceInput() {
  const [attendanceStatus, setAttendanceStatus] = useState('');
  const [time, setTime] = useState(moment().format('HH:mm'));

  useEffect(() => {
    const currentTime = moment();
    if (currentTime.hours() >= 13) {
      setAttendanceStatus('결근');
    } else if (currentTime.hours() >= 9) {
      setAttendanceStatus('지각');
    } else {
      setAttendanceStatus('출근');
    }
  }, [time]);

  console.log(attendanceStatus);

  return (
    <div className="attendContainer">
      <Clock time={time} setTime={setTime} />
      <span
        className="attStatus"
        style={
          attendanceStatus === '출근' ? { color: 'blue' } : { color: 'red' }
        }
      >
        {attendanceStatus}
      </span>
      <div className="blue_circle">
        <CheckButton />
      </div>
    </div>
  );
}

export default AttendanceInput;
