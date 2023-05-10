import CityExampleTime from "@components/displayedCities/CityExampleTime";
import Select from "@components/Select";
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

  const cityExamples = [
  { cityLabel: timezone.replace("_", " ").split("/")[1], timezone: timezone, currentTimestamp: currentTimestamp },
   { cityLabel: "Vancouver", timezone: "America/Vancouver", currentTimestamp: currentTimestamp },
   { cityLabel: "Dubai", timezone: "Asia/Dubai", currentTimestamp: currentTimestamp },
];


  return (
    <div>
      <Select value={timezone} onChange={handleTimezoneChange} />

    <CityExampleTime cityExamples={cityExamples} />
 </div>
  );
}
