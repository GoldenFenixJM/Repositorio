const FS = require('../firebase');
const {db}=FS;
const createMovie=async (req, res) => {
    

        try {    
          const {body: movie}=req;
          const moviesDb=db.collection('movies');
          const {_path:{segments}}=await moviesDb.add(movie);
          const [id]=segments;
          res.send(segments[1]);
        } catch (error) {
          res.send(error);
        }
      };

const getMovie=async (req, res) => {
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
    }

const deleteMovie=async (req, res) => {
    try{
        const {params: {id}}=req;
        const moviesDb=db.collection('movies').doc(id);
        await moviesDb.delete();
        res.send({
          status: 200});
      }catch (error) {
        res.send(error);
      }
    }

    const updateMovie=async (req, res) => {
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
        }

        const getMovies=async (req, res) => {
            try {
                const moviesDb=await db.collection('movies').get();
                console.resp ('moviesDb', moviesDb);
                const resp= moviesDb.docs.map(doc=>doc.data());
                res.send({
                    resp
                });
                } catch (error) {
                res.send(error);
                }
            }



module.exports={
    createMovie,
    getMovies,
    getMovie,
    deleteMovie,
    updateMovie
}




          
      

