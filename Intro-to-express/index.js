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

app.get('/get-movies', async (req, res) => {
  try {
    const moviesDb=await db.collection('movies').get();
    console.log('moviesDb', moviesDb);
    const resp= moviesDb.docs.map(doc=>doc.data());
    res.send({
      resp
    });
  } catch (error) {
    res.send(error);
  }
});


app.get ('/get-movie/:id', async (req, res) => {
  try{
    
    const {params: {id}}=req;
    const moviesDb=db.collection('movies').doc(id);
    const {_fieldsProto: {time, author, name, rating}}=await moviesDb.get()
    
res.send({
      status: 200,
      time: time.stringValue,
      author: author.stringValue,
      name: name.stringValue,
      rating: rating.integerValue

    })
    const response = await moviesDb.get();
  }catch(error){
    res.send(error);
  }
})
//delete
app.delete ('/delete-movie/:id', async (req, res) => {
  try{
    const {params: {id}}=req;
    const moviesDb=db.collection('movies').doc(id);
    await moviesDb.delete();
    res.send({
      status: 200});
  }catch (error) {
    res.send(error);
  }
});

app.put ('/update-movie', async (req, res) => {

  try {    
    const {body: movie}=req;
    const {id, time, author, name, rating}=movie;
    const moviesDb=db.collection('movies').doc (id);
    const resp=await moviesDb.update({
      name,
      time,
      author,
      rating
    });
    res.send({
      status: 200,
      id,
    })
  } catch (error) {
    res.send(error);
  }
});


//Get-movies


//Tell app to listen for new calls and sleep when none are coming
app.listen(apiport, () => console.log(`Server running on port ${apiport}`));



 