var express = require('express');

var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', (req, res) => {
	burger.all(data => {
		res.render('index', {burgers: data});
	});
});

router.get('/api/burgers', (req, res) => {
	burger.all(data => {
		res.status(200).json(data);
	});
});

router.post('/api/burgers', (req, res) => {
	burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], result => {
		res.status(201).json({id: result.insertId});
	});
});

router.put('/api/burgers/:id', (req, res) => {
	burger.update(['devoured'], [req.body.devoured], req.params.id, result => {
		if (result.changedRows == 0) {
			return res.status(404).end();
		}
		else {
			res.status(200).send();
		}
	});
});

module.exports = router;