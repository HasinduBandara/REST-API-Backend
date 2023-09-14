const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require ("dotenv").config();

//middleware
app.use(cors());
app.use(bodyParser.json());


//models
require('./model/Donation');
//Routes
const DonationRoute = require("./routes/HomeRoute");
app.use("/home", HomeRoute);



//Database Connection
const PORT = process.env.PORT || 8000;
const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
});
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("Mongodb Connection Success !😊") ;
})
app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)  
})