var express = require('express');
var app = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var url = require('url');

app.get("/*", function(req, res){
  if(req.hostname == 'services.tnyu.org'){
    apiProxy.web(req, res, { target: '' });
  } else if (req.hostname == 'status.tnyu.org'){
    apiProxy.web(req, res, { target: '' });
  } else if (req.hostname == 'calendar.techatnyu.org'){
    apiProxy.web(req, res, { target: '' });
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(res.statusCode);
    res.write('N/A');
    res.end();
  }
});

var server = app.listen(process.env.port, function () {
  var host = server.address().address;
  var port = process.env.port;
  console.log('Example app listening at http://%s:%s', host, port)
})
