var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    httpProxy = require('http-proxy'),
    https = require('https'),
    express = require('express'),
    app = express();

var apiProxy = httpProxy.createProxyServer();

http.createServer(function (req, res) {
  var targetURL = '';
  console.log(req.url);
  if (req.url.indexOf("v1.0") > -1){
    targetURL = '';
  } else {
    targetURL = '';
  }
  apiProxy.web(req, res, {
    target: targetURL,
    xfwd: true
  });
}).listen(3000);

app.get('*', function (req, res) {
  res.redirect('https://api.tnyu.org' + req.url)
})
var server = app.listen(8080, '0.0.0.0');

httpProxy.createServer({
  target: {
    host: 'localhost',
    port: 3000
  },
  xfwd: true,
  ssl: {
    key: fs.readFileSync(path.resolve(__dirname, ''), 'utf8'),
    cert: fs.readFileSync(path.resolve(__dirname, ''), 'utf8')
  },
  secure: true
}).listen(443);
