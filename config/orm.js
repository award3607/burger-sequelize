var connection = require('../config/connection.js');

//zips two arrays into object, arr1=keys, arr2=values
function zipArrsToObj(arr1, arr2) {
	let obj = {};
	if (arr1.length !== arr2.length) {
		console.log('Arrays must be of same length')
		return obj;
	}
	for (var i = 0; i < arr1.length; i++) {
		obj[arr1[i]] = arr2[i];
	}
	return obj;
}

var orm = {
	selectAll: function(tableName, callback) {
		let queryStr = 'SELECT * FROM ??';
		connection.query(queryStr, [tableName], (err, result) => {
			if (err) throw err;
			callback(result);
		});
	},
	insertOne: function(tableName, cols, vals, callback) {
		let queryStr = 'INSERT INTO ?? SET ?';
		let colsVals = zipArrsToObj(cols, vals);
		connection.query(queryStr, [tableName, colsVals], (err, result) => {
			if (err) throw err;
			callback(result);
		});
	},
	updateOne: function(tableName, cols, vals, primaryKeyVal, callback) {
		let queryStr = 'UPDATE ?? SET ? WHERE id = ?';
		let colsVals = zipArrsToObj(cols, vals);
		connection.query(queryStr, [tableName, colsVals, primaryKeyVal], (err, result) => {
			if (err) throw err;
			callback(result);
		});
	}
}

module.exports = orm;