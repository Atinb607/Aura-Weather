const express = require('express');
const { getWeatherData } = require('../services/weatherService');
const router = express.Router();

router.get('/:city', async (req, res) => {
  const { city } = req.params;
  try {
    const weather = await getWeatherData(city);
    res.json(weather);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

module.exports = router;
