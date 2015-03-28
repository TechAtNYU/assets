// targetURL is removed for safety.

var http = require('http'),
    fs             = require('fs'),
    path           = require('path'),
    httpProxy = require('http-proxy'),
    https = require('https'),
    apiProxy = httpProxy.createProxyServer();

http.createServer(function (req, res) {
  var targetURL = '';
  if (req.url.indexOf("v1.0") > -1){
    targetURL = '';
  } else if(req.url.indexOf("v2") > -1) {
    targetURL = '';
  } else {
    targetURL = '';
  }
  apiProxy.web(req, res, { target: targetURL });
}).listen(process.env.port);

httpProxy.createServer({
  target: {
    host: process.env.host,
    port: process.env.port
  },
  ssl: {
    key: fs.readFileSync(path.resolve(__dirname, process.env.KeyDir), 'utf8'),
    cert: fs.readFileSync(path.resolve(__dirname, process.env.CrtDir), 'utf8')
  }
}).listen(443);
