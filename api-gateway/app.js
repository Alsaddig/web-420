/*

============================================
; Title:  app.js
; Author: Alsaddig Ibrahim
; Date:   October 19 2019

; Description: part of api-gateway
;===========================================
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var apiCatalog = require('./routes/api-catalog');

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var bodyParser = require('body-parser');

var app = express();

/**
 * Database connection
 * 
*/

var mongoDB = 'mongodb+srv://admin:admin@api-gateway-1piyt.mongodb.net/test?retryWrites=true&w=majority)';
mongoose.connect(mongoDB, {
  useUnifiedTopology: true, useNewUrlParser: true, promiseLibrary: require('bluebird')
}).then(() => console.log('connection successful'))
.catch((err) => console.error(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/api', apiCatalog);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;