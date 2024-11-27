const axios = require('axios');

const getWeatherData = async (city) => {
  const API_KEY = process.env.WEATHER_API_KEY;
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
  
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric' // Celsius
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching weather data: ${error.message}`);
    throw new Error('Could not fetch weather data');
  }
};

module.exports = { getWeatherData };
