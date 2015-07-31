module.exports = function(){
  
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

 var usuario = new Schema({ 	
 	nome:  String,
 	login: String,
 	senha: String,
 	email: String 
  });

 return mongoose.model('usuarios',usuario);   
};


