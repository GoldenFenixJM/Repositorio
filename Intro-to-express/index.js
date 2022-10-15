//importing necessary libraries
const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');
const {router} = require('./routes');





//Create express app
const app = express();
const apiPort = process.env.Api_PORT|| 3003;

app.use (bodyParser.urlencoded({extended: true}));
app.use (cors());
app.use (bodyParser.json());
app.use('/api', router);

app.listen(apiport, () => console.log(`Server running on port ${apiport}`));




 