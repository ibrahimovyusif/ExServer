var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/people', function(req,res){
	var people = [
	{
		first_name: "John",
		age: 34,
		gender: "male"
	},
	{
		first_name: "jane",
		age: 34,
		gender: "female"
	},
	{
		first_name: "elovset",
		age: 34,
		gender: "male"
	}
	];
	res.json(people);
})

app.get('/download', function(req,res){
	res.download(path.join(__dirname, '/download/pdf-sample.pdf'));
});

app.get('/about', function(req,res){
	res.redirect('/about.html');
});

app.post('/subscribe', function(req,res){
	var name = req.body.name;
	var email = req.body.email;
	console.log(name + ' has subscribed with ' + email);
});

app.listen(3000, function(){
	console.log('server started on port 3000');
});