import Axios from "axios";

export const getWeather = (latitude, longitude) => {
  return Axios.get("https://api.open-meteo.com/v1/forecast", {
    params: {
      latitude,
      longitude,
      hourly: "temperature_2m",
    },
  });
};
