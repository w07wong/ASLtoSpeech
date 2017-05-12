var http = require('http');

var result = "";

var options = {
  host: 'stormy-tor-35371.herokuapp.com',
  port: 3000,
  path: '',
  method: 'POST'
};

var var http = require('http');

var result = "";

var options = {
  host: 'stormy-tor-35371.herokuapp.com',
  port: 3000,
  path: '',
  method: 'POST'
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
    //result = chunk.toString();
  });
});
req.end();
req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
    //result = chunk.toString();
  });
});
req.end();
