var express = require('express');

var app = express();

app.use(express.static(__dirname + '/../app'))

app.listen(8000, function() {
	console.log('im running');
});

module.exports = app;