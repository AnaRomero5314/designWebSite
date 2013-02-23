/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , url = require('url')
  , request = require('request');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

/* Rutas */
app.get('/', function(req,res){
	res.render("index");
});
app.get('/about', function(req,res){
  res.render("about");
});
app.get('/service', function(req,res){
  res.render("service");
});
app.get('/portafolio', function(req,res){
  res.render("portafolio");
});
app.get('/contacto', function(req,res){
  res.render("contacto");
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


