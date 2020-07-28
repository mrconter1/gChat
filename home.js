var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/home', function (req, res) {
	res.sendFile(__dirname  + '/index.html');
})

app.post('/interact/', function (req, res) {
	
	var prompt = req.body.prompt;
	
	var headers = {
		'content-type': 'application/json',
		'Authorization': 'Bearer ',
	};
	
	var data = '{"prompt": "' + prompt + '", "max_tokens": 50, "temperature": 0.5}';
	
	var options = {
		url: 'https://api.openai.com/v1/engines/davinci/completions',
		method: 'POST',
		headers: headers,
		body: data
	};
	
	const request = require('request');
	request(options, function (error, response, body) {
		var response = body;
		res.send(response);
	});

})

var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port
})
