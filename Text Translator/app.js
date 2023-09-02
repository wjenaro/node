const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 8000;

const axios = require('axios');
app.use(bodyParser.urlencoded({ extended: false }));
const languagesOptions = {
  method: 'GET',
  url: 'https://text-translator2.p.rapidapi.com/getLanguages',
  headers: {
    'X-RapidAPI-Key': '0352aa3da4mshb32335ff3e3b2d1p115501jsnbf6bd3b33f48',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  }
};

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  try {
    const response = await axios.request(languagesOptions);
    res.render('index', { lg: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

app.post('/translate', async (req, res) => {
  try {
    const encodedParams = new URLSearchParams();
    encodedParams.set('source_language', req.body.source_language);
    encodedParams.set('target_language', req.body.target_language);
    encodedParams.set('text', req.body.text);

    const translateOptions = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '0352aa3da4mshb32335ff3e3b2d1p115501jsnbf6bd3b33f48',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      data: encodedParams
    };

    const translationResponse = await axios.request(translateOptions);
    res.render('index', { lg: req.body, translation: translationResponse.data });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

app.listen(PORT, () => {
  console.log(`Server at port ${PORT}`);
});
