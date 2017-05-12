'use strict';
var Alexa = require('alexa-sdk');
var http = require('http');
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

var result = null;

var options = {
  host: 'stormy-tor-35371.herokuapp.com',
  port: 80,
  path: '',
  method: 'GET'
};


exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    var req = http.request(options, function(res) {
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
        result = chunk;
        alexa.execute();
      });
    });
    req.end();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetText');
    },
    'SpeakTextIntent': function () {
        this.emit('GetText');
    },
    'GetText': function () {
        if (result === null || result === "" || result === undefined) {
            this.emit(':tell', "result was null");
        } else {
            this.emit(':tell', result);
        }
    },
    'AMAZON.HelpIntent': function () {
    },
    'AMAZON.CancelIntent': function () {
    },
    'AMAZON.StopIntent': function () {
    }
};
 