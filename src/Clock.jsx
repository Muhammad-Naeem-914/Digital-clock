import { useEffect, useState } from "react";
import "./Clock.css";
function Clock({ color }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div>
      <h1 className="clock" style={{ color: color }}>
        {time}
      </h1>
    </div>
  );
}

export default Clock;
