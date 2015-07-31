
/**
 * Module dependencies.
 */

var express = require('express')
var load = require('express-load');
var mongoose = require('mongoose');

var app =  express();

//Banco Mongodb
mongoose.connect('mongodb://localhost/crud_nodejs',function(err){
  if(err){
    console.log("Erro ao se conectar com o banco"+err);
  }else{
    console.log("Conexao feita com sucesso");
  }
});

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.logger('dev'));
  app.use(express.bodyParser());  
  app.use(express.json()); 
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


load('models').then('controllers').then('routes').into(app);

app.listen(3000, function(){
  console.log("Servidor rodando na porta 3000");
});
