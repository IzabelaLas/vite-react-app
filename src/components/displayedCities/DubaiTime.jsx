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
    <div id="firstCityDisplayed">
      <div className="citiesDisplayed" id="dubai">
        <div className="CityAndDate">
          <h2 className="city">Dubai</h2>
          <div className="date">{dubaiDate}</div>
        </div>
        <div className="time d-flex">
          <div>{dubaiTime?.split(" ")[0]}</div>
          <div className="timeAmPM">{dubaiTime?.split(" ")[1]}</div>
        </div>
      </div>
    </div>
  );
}
