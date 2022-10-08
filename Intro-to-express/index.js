//importing necessary libraries
const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');

var firebase = require("firebase-admin");

var serviceAccount = require("./key.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});

//Create db and a collection within the db
const db= firebase.firestore();
const moviesDB = db.collection('movies');


//Create express app
const app = express();
const apiport = 3003;

//setting up express app
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(BodyParser.json());
//creating endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post ('/create', async (req, res) => {

  try {    
    const {body: movie}=req;
    const moviesDb=db.collection('movies');
    const {_path:{segments}}=await moviesDb.add(movie);
    const [id]=segments;
    res.send(segments[1]);
  } catch (error) {
    res.send(error);
  }
});


app.listen(apiport, () => console.log(`Server running on port ${apiport}`));

 