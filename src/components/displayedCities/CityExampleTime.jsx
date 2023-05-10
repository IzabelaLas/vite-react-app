import moment from "moment-timezone";


export default function CityExampleTime({ cityExamples }) {
  return (
    <>
      {cityExamples.map((cityExample) => {
        const date = moment(cityExample.currentTimestamp)
          .tz(cityExample.timezone)
          .format("dddd, MMMM Do YYYY");

        const time = moment(cityExample.currentTimestamp)
          .tz(cityExample.timezone)
          .format("LTS");

        return (
          <div
            key={cityExample.cityLabel}
            className="flex justify-between p-3 ml-12 mt-3 sm:p-0 sm:ml-2 sm:mt-12"
          >
            <div>
              <h2 className="text-3xl text-emerald-600 sm:text-2xl">
                {cityExample.cityLabel}
              </h2>
              <div className="opacity-70 sm:text-sm">{date}</div>
            </div>
            <div className="flex text-4xl pr-5 mt-3 ">
              <div className="text-left min-w-[150px] text-amber-500 sm:text-3xl sm:min-w-[120px]">
                {time?.split(" ")[0]}
              </div>
              <div className="text-base text-right mr-4 text-yellow-500 sm:mr-2">
                {time?.split(" ")[1]}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}