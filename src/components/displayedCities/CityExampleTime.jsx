import moment from "moment-timezone";

export default function CityExampleTime({
  cityLabel,
  timezone,
  currentTimestamp,
}) {
  const date = moment(new Date(currentTimestamp))
    .tz(timezone)
    .format("dddd, MMMM Do YYYY");

  const time = moment(new Date(currentTimestamp)).tz(timezone).format("LTS");

  return (
    <div className="flex justify-between p-3 ml-12 mt-3">
      <div className="CityAndDate">
        <h2 className="text-3xl text-indigo-600">{cityLabel}</h2>
        <div className="opacity-70">{date}</div>
      </div>
      <div className="flex text-4xl pr-5 mt-3">
        <div className="text-left min-w-[150px]">{time?.split(" ")[0]}</div>
        <div className="text-sm text-right mr-4">{time?.split(" ")[1]}</div>
      </div>
    </div>
  );
}
