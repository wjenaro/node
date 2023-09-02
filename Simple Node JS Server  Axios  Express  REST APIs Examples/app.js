const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8000; // Allow using the environment's port or 8000 as default

const rapidAPIHeaders = {
  'X-RapidAPI-Key': '0352aa3da4mshb32335ff3e3b2d1p115501jsnbf6bd3b33f48',
  'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
};

const rapidAPIConfig = {
  baseURL: 'https://api-football-beta.p.rapidapi.com',
  headers: rapidAPIHeaders,
  params: { league: '39',
  season: '2019'}
};

const apiClient = axios.create(rapidAPIConfig);
// set the view engine to ejs
app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get('/', async (req, res) => {
  try {
    const response = await apiClient.get('/teams');
    console.log(response.data);
   
    res.render('index', {epl: response.data});
   /*  if (Array.isArray(response.data)) {
        res.render('index', { 'epl': response.data });
      } else {
        console.error('API response is not an array:', response.data);
        res.render('index', {epl: response.data});
      } */
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
