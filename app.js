const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const logger = require('morgan');

var indexRouter = require('./server/index/routes/index');
var usersRouter = require('./server/users/routes/users');

var app = express();

// Express configuration
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));


// We link the routes for the API endpoints
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;