//
const route = require('express').Router();
const parser = require('../parser.js');
const dataHandler = require('../../API/dataHandler');

route.get('/parseData', (req, res) => {
	res.send(parser());
});

route.get('/time', (req, res) => {
	res.send(`${dataHandler.data.time}`);
});

module.exports = route;
