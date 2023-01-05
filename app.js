require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const flash = require('connect-flash');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var laporanRouter = require('./routes/laporan');

var router = require('./routes')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

// app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use(router);

// catch 404 and forward to error handler
app.use((err, req, res, next) =>{
  console.log(err);
  return res.status(500).json({
      status: false,
      message: err.message
  });
})


module.exports = app;
