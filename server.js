const express = require('express');
const app = express();
const db= require('./db');

const bodyParser= require('body-parser');
app.use(bodyParser.json());  //req.body


//import the router files
const personRoutes = require('./routes/personRoutes');
//use the routers
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes')
app.use('/menu',menuRoutes);

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})