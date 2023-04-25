const express = require('express');
const ConnectDB = require('./config/db');
const app = express();
const cors = require('cors');
const path = require('path');
const fileURLToPath = require('url');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const port = process.env.PORT;
const authRoutes = require("./routes/authRoute");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");


ConnectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middelwares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, './client/build')))

//routes
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);

//rest api
app.use('*', function(req,res){
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});




app.listen(port, console.log("running server on port " + port));

app.use('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
  })
  



