const exp = require("constants");
const express = require("express"),
path = require("path"),
bodyParser = require("body-parser"),
cors = require("cors"),
mongoose = require("mongoose"),
config = require('./config/DB');
const userRoutes = require("./routes/userRoutes");


mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    ()=>{console.log('Database is connect')},
    err=>{ console.log('Can not connect to the databse' +err)}
);

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRoutes)

const port = process.env.PORT || 4000;
const server = app.listen(port, function(){
    console.log(' Listening on port ' + port)
})

       