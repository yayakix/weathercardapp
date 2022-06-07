function WeatherData(props) {
  return (
    <>
      <p>
        <span>conditions:{props.conditions}</span>
      </p>
      <p>
        <span>time:{props.time}</span>
      </p>
    </>
  );
}

export default WeatherData;
