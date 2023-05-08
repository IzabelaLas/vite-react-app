import { useState, useEffect } from "react";
import moment from "moment-timezone";

export default function VancouverTime() {
  const [vancouverDate, setVancouverDate] = useState(null);
  const [vancouverTime, setVancouverime] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVancouverDate(
        moment().tz("America/Vancouver").format("dddd, MMMM Do YYYY")
      );
      setVancouverime(moment().tz("America/Vancouver").format("LTS"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-between" id="warsaw">
      <div className="CityAndDate">
        <h2 className="text-3xl text-indigo-600">Vancouver</h2>
        <div className="opacity-70">{vancouverDate}</div>
      </div>
      <div className="flex text-4xl pr-5 mt-3">
        <div className="text-left min-w-[150px]">
          {vancouverTime?.split(" ")[0]}
        </div>
        <div className="text-sm text-right">{vancouverTime?.split(" ")[1]}</div>
      </div>
    </div>
  );
}
