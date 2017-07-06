var bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	mongoose = require('mongoose'),
	express = require('express'),
	app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', function(req,res){
	res.redirect('/index');
})

app.get('/index', function(req,res){
	res.render('index');
})

app.get('/contact', function(req,res){
	res.render('contact');
})


app.get('/about', function(req,res){
	res.render('about');
})

app.get('/post', function(req,res){
	res.render('post');
})







app.get('*', function(req,res){
	res.send('Error 404');
})


app.listen(3000, function(){
	console.log("Server is running!");
})