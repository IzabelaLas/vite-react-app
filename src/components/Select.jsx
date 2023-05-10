export default function Select(props) {
  const cities = [
    { name: "Select a city...", timezone: "Europe/Warsaw" },
    { name: "Paris", timezone: "Europe/Paris" },
    { name: "Los Angeles", timezone: "America/Los_Angeles" },
    { name: "Singapore", timezone: "Asia/Singapore" },
  ];

  const handleTimezoneChange = (event) => {
    const timezone = event.target.value;
    props.onChange(timezone);
  };

  return (
    <select
      id="citySelect"
      className="block m-auto w-9/12 p-2 text-sm rounded-md opacity-80 bg-amber-100"
      value={props.value}
      onChange={handleTimezoneChange}
    >
      {cities.map((city, index) => (
        <option key={index} value={city.timezone}>
          {city.name}
        </option>
      ))}
    </select>
  );
}
