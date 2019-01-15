const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const logger = require('morgan');

var usersRouter = require('./server/users/routes/users');

var app = express();

// Express configuration
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/users', usersRouter);
app.use('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

module.exports = app;