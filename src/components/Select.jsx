export default function Select(props) {
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
      <option value="Europe/Warsaw">Select a city...</option>
      <option value="Europe/Paris">Paris</option>
      <option value="America/Los_Angeles">Los angeles</option>
      <option value="Asia/Singapore">Singapore</option>
    </select>
  );
}
