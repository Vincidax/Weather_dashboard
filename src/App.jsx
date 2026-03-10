import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { getWeatherByCity } from "./services/weatherApi";
import Footer from "./components/Footer";

function App() {
  const [defaultCitiesWeather, setDefaultCitiesWeather] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const defaultCities = ["Kigali", "New York", "London", "Shanghai"];

  // Fetch weather for default cities (on first load)
  const fetchDefaultCities = async () => {
    try {
      setLoading(true);

      const results = await Promise.all(
        defaultCities.map((city) => getWeatherByCity(city)),
      );

      setDefaultCitiesWeather(results);
    } catch (err) {
      setError("Failed to load default cities weather.");
    } finally {
      setLoading(false);
    }
  };

  // Search for a new city
  const searchWeather = async (city) => {
    if (!city) return;

    try {
      setLoading(true);
      setError("");
      const data = await getWeatherByCity(city);

      // Set search result and clear default cities
      setSearchResult(data);
      setDefaultCitiesWeather([]);
    } catch (err) {
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDefaultCities();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-200 px-4">
      <Header />

      <SearchBar onSearch={searchWeather} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {/* Display default cities if no search, else display search result */}
      {searchResult ? (
        <div className="mt-8 max-w-md mx-auto">
          <WeatherCard data={searchResult} />
        </div>
      ) : (
        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {defaultCitiesWeather.map((weather) => (
            <WeatherCard key={weather.id} data={weather} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
