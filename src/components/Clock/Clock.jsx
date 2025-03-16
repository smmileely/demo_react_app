import { useEffect, useState } from "react";
import moment from "moment";

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container">
      <h3 className="time">
        {moment(time).format("MMMM Do YYYY, h:mm:ss a")}.
      </h3>
    </div>
  );
}
