var orm = require('../config/orm.js');

var burger = {
	all: function(callback) {
		orm.selectAll('burgers', result => {
			callback(result);
		});
	},
	create: function(cols, vals, callback) {
		orm.insertOne('burgers', cols, vals, result => {
			callback(result);
		});
	},
	update: function(cols, vals, id, callback) {
		orm.updateOne('burgers', cols, vals, id, result => {
			callback(result);
		});
	}
}

module.exports = burger;