import { useState } from "react";
import "./App.css";
import { getWeather } from "./api/weather";

function App() {
  const [coordinates, setCoordinates] = useState({
    latitude: 23.0,
    longitude: 95.0,
  });
  const [weatherInfo, setWeatherInfo] = useState({
    time: [],
    temperature_2m: [],
  });

  function locationSuccessfullyFetched(position) {
    setCoordinates(position.coords);
    getWeather(position.coords.latitude, position.coords.longitude)
      .then((response) => {
        console.log("Weather info received", response.data);
        setWeatherInfo(response.data.hourly);
      })
      .catch(() => {
        console.error("Weather info not received.");
      });
  }

  function locationNotFetched() {
    getWeather(23.0, 95.0)
      .then((response) => {
        console.log("Weather info received", response.data);
        setWeatherInfo(response.data.hourly);
      })
      .catch(() => {
        console.error("Weather info not received.");
      });
  }

  return (
    <>
      <h1>Welcome to our weather application.</h1>
      <h3>
        Your coordinates are: {coordinates.latitude} ; {coordinates.longitude}
      </h3>
      <button
        onClick={() => {
          window.navigator.geolocation.getCurrentPosition(
            locationSuccessfullyFetched,
            locationNotFetched
          );
        }}
      >
        Get Weather
      </button>
      <p>Length: {weatherInfo.time.length}</p>

      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>Date & Time</td>
            <td>Temperature</td>
          </tr>
          {weatherInfo.time.map((el, index) => {
            return (
              <tr>
                <td>{new Date(el).toLocaleString()}</td>
                <td>{weatherInfo.temperature_2m[index]} °C</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
