import CityExampleTime from "./CityExampleTime.jsx";
import Select from "../Select";
import { useState, useEffect } from "react";

export default function CitiesDisplayed() {
  const [timezone, setTimezone] = useState("Europe/Warsaw");
  const handleTimezoneChange = (timezone) => {
    setTimezone(timezone);
  };

  const [currentTimestamp, setCurrentTimeStamp] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTimeStamp(Date.now());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Select value={timezone} onChange={handleTimezoneChange} />

      <CityExampleTime
        cityLabel={timezone.replace("_", " ").split("/")[1]}
        timezone={timezone}
        currentTimestamp={currentTimestamp}
      />
      <CityExampleTime
        cityLabel="Vancouver"
        timezone="America/Vancouver"
        currentTimestamp={currentTimestamp}
      />
      <CityExampleTime
        cityLabel="Dubai"
        timezone="Asia/Dubai"
        currentTimestamp={currentTimestamp}
      />
    </div>
  );
}
