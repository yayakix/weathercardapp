import WeatherData from "./WeatherData";
const WeatherCard = ({ conditions, img, time}) => {
    
        
    
    
  return (
    <div class="weather">
      <img src={img} alt="" />
    
      <WeatherData time={time} conditions={conditions} />
    </div>
  );

};
    



export default WeatherCard;
