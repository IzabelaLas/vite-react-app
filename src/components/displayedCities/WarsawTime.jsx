import { useState, useEffect } from "react";
import moment from "moment-timezone";
import Select from "../Select";

export default function WarsawTime() {
  const [timezone, setTimezone] = useState("Europe/Warsaw");
  const [cityDate, setCityDate] = useState(null);
  const [cityTime, setCityTime] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCityDate(moment().tz(timezone).format("dddd, MMMM Do YYYY"));
      setCityTime(moment().tz(timezone).format("LTS"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timezone]);

  const handleTimezoneChange = (timezone) => {
    setTimezone(timezone);
  };

  return (
    <>
      <Select value={timezone} onChange={handleTimezoneChange} />
      <div id="firstCityDisplayed">
        <div className="citiesDisplayed" id="warsaw">
          <div className="CityAndDate">
            <h2 className="city">{timezone.replace("_", " ").split("/")[1]}</h2>
            <div className="date">{cityDate}</div>
          </div>
          <div className="time d-flex">
            <div>{cityTime?.split(" ")[0]}</div>
            <div className="timeAmPM">{cityTime?.split(" ")[1]}</div>
          </div>
        </div>
      </div>
    </>
  );
}
