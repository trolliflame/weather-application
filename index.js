const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
  res.send('Weather App is running!');
});

app.get('/weather', async (req, res) => {
  try {
    const city = req.query.city;
    if (!city) {
      return res.status(400).send('City is required');
    }

    const apiKey = process.env.APP_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await axios.get(url);

    res.json(response.data);
  } catch (error) {
    // Handle city not found error
    if (error.response && error.response.status === 404) {
      return res.status(404).send('City not found');
    }

    console.error(error);
    res.status(500).send('Error occurred while fetching weather data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
