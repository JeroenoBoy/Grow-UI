//
const cors = require('cors');
const express = require('express');
const app = express();

// //dependencies
// const path = require('path');
// const logger = require('morgan');

/**
 * dependencies
 */

//app.use(logger('dev'));
app.use(cors());
app.use(express.json({ limit: '1kb' }));

/**
 * Routers
 */

app.use('/', express.static('www/public'));
app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));
// app.use('/admin', require('./client/routes/admin'));

module.exports = app;
