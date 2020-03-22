//
const route = require('express').Router();

route.post('/findKahoot', (req, res) => {
	setTimeout(() => {
		console.log(req.body);
		if (typeof req.body.pin != 'number')
			res.status(400).send({ msg: 'INVALID_PIN' });
		else if (typeof req.body.name != 'string')
			res.status(400).send({ msg: 'INVALID_NAME' });
		else if (typeof req.body.name.length > 20)
			res.status(400).send({ msg: 'INVALID_NAME' });
		else res.status(202).send({ msg: 'SUCCES' });
	}, 2000 + Math.random() * 2000);
});

module.exports = route;
