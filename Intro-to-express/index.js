//importing necessary libraries
const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const apiport = 3003;

app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(BodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(apiport, () => console.log(`Server running on port ${apiport}`));
 