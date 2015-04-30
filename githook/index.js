'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var sh = require('execSync').run;

var directoryForGitHook = '/root/services';
var restartCommand = 'forever restartall';

app.post('/githook', jsonParser, function(req, res) {
	// This to make sure the request comes from Github
	if ('before' in req.body) {
		sh('cd ' + directoryForGitHook + ' && git pull -u origin master');
		sh('cd ' + directoryForGitHook + ' && ' + restartCommand);
		res.send('Complete!');
	}
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});
