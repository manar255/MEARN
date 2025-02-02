const express = require('express');
var bodyParser = require('body-parser')
const cors = require('cors');

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

app.listen(port, () => {
  console.log(`Server is running on  https://localhost:${port}`);
});