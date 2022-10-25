
const router= require('express').Router();
const api = require('')
//GET  Route for note
router.get('/notes',  (req,res)=>{
    let noteData=notes;
   res.json(noteData);
}
);

//POST new note
router.post('/notes,', (req, res)=>{
    console.log(req);
    console.log(req.body);
    const newNote =req.body;
if (req.body){
    
}
    res.status(200)
   }
}

app.listen(PORT, function(){
    console.log("Now Listening");
});

