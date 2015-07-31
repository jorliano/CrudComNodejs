
module.exports = function(app){
   var usuario =  app.controllers.usuarios;
   app.get('/usuario/usuarios',usuario.index); 
   app.get('/usuario/cadastro',usuario.cadastro);    
   app.post('/usuario/usuarios',usuario.salvar);
   app.get('/usuario/edita/:id',usuario.editar);
   app.put('/usuario/edita/:id',usuario.atualizar);
   app.get('/usuario/mostrar/:id',usuario.mostrar);
   app.delete('/usuario/mostrar/:id',usuario.deletar);
};