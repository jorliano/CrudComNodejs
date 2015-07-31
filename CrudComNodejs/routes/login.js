
module.exports = function(app){
   var login =  app.controllers.login;
   app.get('/',login.index);  
   app.post('/entrar', login.logar);
   app.get('/sair', login.sair);
};