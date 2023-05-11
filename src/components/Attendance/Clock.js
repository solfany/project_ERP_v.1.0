import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './Attendance.css';

const Clock = ({ time, setTime }) => {
  const [seconds, setSeconds] = useState(moment().format('ss'));

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setTime(moment().format('HH:mm'));
      setSeconds(moment().format('ss'));
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  return (
    <div className="container">
      <section className="clock-container">
        <time className="time">{time}</time>
        <time className="seconds">{seconds}</time>
      </section>
    </div>
  );
};

export default Clock;
