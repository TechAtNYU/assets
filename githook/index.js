var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , jsonParser = bodyParser.json()
  , exec = require('child_process').exec
  , sh = require('execSync').run;

var directoryForGitHook = "/root/services"
  , restartCommand = "forever restartall";

app.post('/githook', jsonParser, function (req, res) {
  // This to make sure the request comes from Github
  if('before' in req.body) {
    sh("cd " + directoryForGitHook + " && git pull -u origin master");
    sh("cd " + directoryForGitHook + " && " + restartCommand);
    res.send('Complete!');
  }
});

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
});
