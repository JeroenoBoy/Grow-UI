//
const route = require('express').Router();

route.get('/', (req, res) => {
	res.sendFile(__dirname + '../../../www/public/index.html');
});

module.exports = route;
