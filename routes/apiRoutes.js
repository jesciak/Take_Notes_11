
const fs= require('fs');
const util = require('util');
const path= require('path');
const router= require('express').Router();

const readFromFile= util.promisify(fs.readFile);
const writeToFile= util.promisify(fs.writeFile);

const readAndAppend= (content,file)=> {
    fs.readFile(file, 'utf8', (err,data)=>{
        if(err) {
            console.log(err);
        }else{
            const parsedData= JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        
        };
    });



// const api = require('')
//GET  Route for note
router.get('/notes', (req,res)=>{
 readFromFile('./db/db.json').then((data)=>res.json(JSON.parse(data)));
    });


//POST new note
router.post('/notes,', (req, res)=>{
    console.log(req);
    console.log(req.body);
    const { title, text} =req.body;
if (req.body){
    const newNote ={
        title,
        text,
    };
    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully!`);
}else{
    res.error(`Error in adding note`);
}
});
}
module.exports= router;