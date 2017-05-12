var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var text = ""

app.get('/', function (req, res) {
    res.send(text)
})

app.post('/', function (req, res) {
    text = req.body.signText
    res.send('Posted')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})