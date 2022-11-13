//reading and writing files
const fs = require('fs');

const router = require('express').Router();
const util = require('util');

//store note data to the local database
let data = require('../db/db.json');

//assign a unique id to note using uuid npm package
const { v4: uuidv4 } = require('uuid');
const path = require('path');

//GET all notes
router.get('/notes', (req, res) => {
    console.log({ data });
    res.json(data);
       if ((err)=>res.status(500).json(err));
});
//POST new note
router.post('/notes', (req, res) => {
    //the new note posted will be assigned a unique id using uuid
    let newNote = { ...req.body, id: uuidv4() };
    console.log(newNote);
    console.log(req.body);
    data.unshift(newNote);
    if ((err)=>res.status(500).json(err));

    fs.writeFile(path.join(__dirname, '../db/db.json'),
        JSON.stringify(data),
        function (err) {
            if (err) {
                res.status(404).json({ error: err });
            }
            res.json(data);
        }
    );
});
//delete notes
router.delete('/notes/:id', (req, res) => {
    data = data.filter((dataEl) => dataEl.id !== req.params.id);
    fs.writeFile(path.join(__dirname, '../db/db.json'),
        JSON.stringify(data),
        function (err) {
            if (err) {
                res.status(404).json({ error: err });
            }
            res.json(data);
        }
    );
});
module.exports = router;