import data from "./data";
import WeatherCard from "./components/WeatherCard";

function App() {
  const weathercards = data.map((ele, index) => {
    return (
      <WeatherCard
        key={index}
        {...ele}
      />
    )
  })
  return (
    <div className="App">
      <h1>WeatherIcons App</h1>
      <section>{weathercards}</section>
    </div>
  );
}

export default App;
