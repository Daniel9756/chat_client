

const express = require('express');
const app = express();
var cors = require('cors')
var bodyParser = require('body-parser');
const usersRoutes = require('./routes/users')

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.use(cors())
app.use(express.json())
require('dotenv').config()
// connect to Database
// connection()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Type, Authorization, *");
    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods",
        "PUT, POST, DELETE, PATCH, GET");
        return res.status(200).json({});
    }
    next();
});


// app.use("/lecturedetail", lectureDetailRoutes)



app.use("/users", usersRoutes)





app.get('/', (req, res)=>{
    res.send("We are all welcome here")
})




module.exports = app;
