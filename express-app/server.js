var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();
const uri = process.env.MONGODB_URI; 
const mongoose = require('mongoose');
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: false } };



// Establish Mongoose Connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });




var contactRouter = require('./routes/Contacts');
var reviewRouter = require('./routes/Reviews');
var userRouter = require('./routes/User')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend URL
  methods: ['GET', 'POST'], // Allow only certain methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));



//app.use('/', indexRouter);
app.use('/api/Contacts', contactRouter);
app.use('/api/Reviews', reviewRouter);
app.use('/api/User', userRouter);

module.exports = app;


