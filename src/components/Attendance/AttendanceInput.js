import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Clock from './Clock';
import { message } from 'antd';
import Checkbtn from './Checkbtn';

function AttendanceInput() {
  const [attendanceStatus, setAttendanceStatus] = useState('');
  const [time, setTime] = useState(moment().format('HH:mm'));
  const [IsChecked, setIsChecked] = useState(false);

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
  const handleSubmit = (event) => {
    event.preventDefault();
    // 서버로 출결 상태 전송
    console.log(`출결 상태 ${attendanceStatus} 전송`);
  };

  return (
    <div className="attendContainer">
      <Clock time={time} setTime={setTime} />
      {attendanceStatus}
      <div className={IsChecked ? 'blue_circle' : 'white_circle'}>
        <div className="checkboxContainer">
          <Checkbtn IsChecked={IsChecked} setIsChecked={setIsChecked} />
        </div>
        {/* <span className="attendBtn">{IsChecked ? '출근' : '퇴근'}</span> */}
      </div>
    </div>
  );
}

export default AttendanceInput;
