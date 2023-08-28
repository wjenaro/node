const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8000;
const URL = "https://v2.jokeapi.dev/joke/Any";

// set the view engine to ejs
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));
let response; 

app.get('/', async (req, res) => {
    try {
        response = await axios.get(URL);
        res.render("index", { 'data': response.data }); // Sending the actual response data
    } catch (error) {
        console.error(error);
        res.render("index", { 'data': null }); // Handling error case
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
