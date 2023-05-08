import { useState, useEffect } from "react";
import moment from "moment-timezone";

export default function DubaiTime() {
  const [dubaiDate, setDubaiDate] = useState(null);
  const [dubaiTime, setDubaiTime] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDubaiDate(moment().tz("Asia/Dubai").format("dddd, MMMM Do YYYY"));
      setDubaiTime(moment().tz("Asia/Dubai").format("LTS"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-between" id="dubai">
      <div className="CityAndDate">
        <h2 className="text-3xl text-indigo-600">Dubai</h2>
        <div className="opacity-70">{dubaiDate}</div>
      </div>
      <div className="flex text-4xl pr-5 mt-3">
        <div className="text-left min-w-[150px]">
          {dubaiTime?.split(" ")[0]}
        </div>
        <div className="text-sm text-right">{dubaiTime?.split(" ")[1]}</div>
      </div>
    </div>
  );
}
