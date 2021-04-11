const TimerComponent = (props) => {
  const [hours, minutes, seconds] = [
    props.hours,
    props.minutes,
    props.seconds
  ].map((item) => {
    return item < 10 ? "0" + item : item;
  });

  return (
    <h1>
      {hours} : {minutes} : {seconds}
    </h1>
  );
};

export default TimerComponent;
