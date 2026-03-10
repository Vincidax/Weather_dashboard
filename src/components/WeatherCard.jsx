const WeatherCard = ({ data }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-6 text-center w-full max-w-md">
      <h2 className="text-xl font-bold">{data.name}</h2>

      <p className="text-4xl font-semibold mt-2">
        {Math.round(data.main.temp)}°C
      </p>

      <p className="capitalize mt-2">{data.weather[0].description}</p>

      <div className="mt-4 text-sm">
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind Speed: {data.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
