const express = require('express');
var bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const todoRoutes = require('./routes/todo');
const userRoutes = require('./routes/user');


const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use('/todos', todoRoutes);
app.use('/users', userRoutes);

//error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
    },
  });
});

const url = process.env.MONGODB_URL.replace('<db_password>', process.env.MONGODB_PASSWORD);

mongoose.connect(url).then(() => {
  console.log('Connected to MongoDB');

  app.listen(port, () => {
    console.log(`Server is running on  https://localhost:${port}`);
  });
}).catch((err) => {
  console.log('Error connecting to MongoDB', err);
});
