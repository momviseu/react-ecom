const express = require('express');
const ConnectDB = require('./config/db');
// const {readdirSync} = require('fs');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const port = process.env.PORT;
const authRoutes = require("./routes/authRoute");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");


ConnectDB();


//middelwares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);



// // console.log(readdirSync("./routes"))
// readdirSync("./routes").map((file)=>app.use("/api/category", require("./routes/"+file)));
// readdirSync("./routes").map((file)=>app.use("/api/auth", require("./routes/"+file)));
// readdirSync("./routes").map((file)=>app.use("/api/product", require("./routes/"+file)));



app.listen(port, console.log("running server on port " + port));

app.use('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
  })
  
  app.use('/about', (req, res) => {
    res.send('This is my about route..... ')
  })

  module.exports = app;
