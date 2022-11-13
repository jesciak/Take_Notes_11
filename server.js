const express = require("express");
const fs = require("fs");
const app = express();
// require api and html routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')

//assign port
const PORT = process.env.PORT || 8888;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, function () {
    console.log(`Now Listening on PORT: ${PORT}`);
});