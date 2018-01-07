var express = require('express');

var router = express.Router();
var Burger = require('../models').burger;

router.get('/', (req, res) => {
	Burger.findAll({}).then(data => {
		res.render('index', {burgers: data});
	});
});

router.get('/api/burgers', (req, res) => {
	Burger.findAll({}).then(data => {
		res.status(200).json(data);
	});
});

router.post('/api/burgers', (req, res) => {
	Burger.create({
		burger_name: req.body.burger_name,
		devoured: req.body.devoured
	}).then(result => {
		res.status(201).json({id: result.id});
	});
});

router.put('/api/burgers/:id', (req, res) => {
	Burger.update({
		devoured: req.body.devoured
	}, {
		where: {
			id: req.params.id
		}
	}).then(result => {
		if (result.changedRows == 0) {
			return res.status(404).end();
		}
		else {
			res.status(200).send();
		}
	});
});

module.exports = router;