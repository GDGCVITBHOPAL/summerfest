import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css";
const TimeBox = ({ children }) => {
  return <div className={styles.timeBox}>{children}</div>;
};
const Timer = ({ targetTime }) => {
  const targetCountdownTime = new Date(targetTime).getTime();
  const getSeconds = () => {
    return parseInt((targetCountdownTime - new Date().getTime()) / 1000);
  };
  const [countDown, setCountDown] = useState(getSeconds());

  useEffect(() => {
    setInterval(() => {
      setCountDown(getSeconds());
    }, 1000);
  }, []);

  const secondsString = () => {
    if (countDown % 60 < 10) return "0" + (countDown % 60);
    return countDown % 60;
  };
  const minutesString = () => {
    const minutes = parseInt(countDown / 60) % 60;
    if (minutes < 10) return "0" + minutes;
    return minutes;
  };

  const hoursString = () => {
    const hours = parseInt(countDown / 3600) % 24;
    if (hours < 10) return "0" + hours;
    return hours;
  };

  const daysString = () => {
    const days = parseInt(countDown / (3600 * 24));
    if (days < 10) return "0" + days;
    return days;
  };
  return (
    <div className={styles.container}>
      <TimeBox>
        {daysString()}
        <span>Days</span>
      </TimeBox>
      <TimeBox>
        {hoursString()}
        <span>Hours</span>
      </TimeBox>
      <TimeBox>
        {minutesString()}
        <span>Minutes</span>
      </TimeBox>
      <TimeBox>
        {secondsString()}
        <span>Seconds</span>
      </TimeBox>
    </div>
  );
};

export default Timer;
