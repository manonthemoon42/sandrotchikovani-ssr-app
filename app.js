const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const logger = require('morgan');

var app = express();

// Express configuration
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

module.exports = app;