import express from "express";
import morgan from "morgan";

const app = express();
const port = 8000;

app.use(morgan("tiny"));
app.get('/', function (req, res) {
    res.send('hello, world!')
  })

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});