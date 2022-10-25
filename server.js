const express= require("express");
const fs= require("fs");

const apiRoutes= require('./routes/apiRoutes');
const htmlRoutes=require('./routes/htmlRoutes')

const PORT = process.env.PORT || 8888;

const app= express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// //GET HTML notes
// app.get()


// //GET HTML index
// app.get()

// //GET API Route
// app.get("/api/notes", function(req,res){
//     res.json(no)
// }
// )

// //POST API Route
// app.post()

app.listen(PORT, function(){
    console.log("Now Listening");
});