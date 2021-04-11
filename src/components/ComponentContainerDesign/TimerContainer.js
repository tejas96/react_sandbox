import React, { useState, useEffect } from "react";
import TimerComponent from "./TimerComponent";

const TimerCOntainer = (props) => {
  const [time, setTime] = useState(new Date());
  const updateTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    setInterval(updateTime, 1000);
  }, []);

  const extractTime = (date) => {
    return {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    };
  };
  return <TimerComponent {...extractTime(time)} />;
};

export default TimerCOntainer;
