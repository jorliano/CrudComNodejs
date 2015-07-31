module.exports = function(app){
  var Usuario = app.models.usuarios;

  var usuarioController = {
  	 index: function(req,res){
  	 	Usuario.find(function(err,data){
  	 		if(err){
  	 			console.log('Erro ao listar dados');
  	 		}
  	 		res.render('usuario/usuarios',{lista: data});
  	 	});        
  	 },
  	 cadastro: function(req,res){  	       
  	 	res.render('usuario/cadastro');  	 	  	 	
  	 },  	 
  	 salvar: function(req,res){  	   	 	
         
         var model = new Usuario(req.body);

         model.save(function(err){
         	if(err){
         		console.log(err);
         	}
         	res.redirect('usuario/usuarios');
         });
  	 },
  	 editar: function(req,res){
  	 	Usuario.findById(req.params.id,function(err,data){
  	 		if(err){
  	 			console.log('Erro ao listar dados');
  	 		}else{
  	 			res.render('usuario/edita',{value : data});
  	 		}
  	 		
  	 	})
  	 },
  	 atualizar: function(req,res){
  	 	Usuario.findById(req.params.id,function(err,data){
  	 		if(err){
  	 			console.log('Erro ao listar dados');
  	 		}else{
  	 			var model = data;
  	 			model.nome = req.body.nome;
  	 			model.email = req.body.email;
  	 			model.login = req.body.login;
  	 			model.senha = req.body.senha;

  	 			model.save(function(err){
  	 				if(err){
  	 					console.log(err)
  	 				}else{
  	 					res.redirect('usuario/usuarios');
  	 				}
  	 			});  	 			
  	 		}
  	 		
  	 	})
  	 },
  	 mostrar: function(req,res){
  	 	Usuario.findById(req.params.id,function(err,data){
  	 		if(err){
  	 			console.log('Erro ao listar dados');
  	 		}else{
  	 			res.render('usuario/mostrar',{value : data});
  	 		}
  	 		
  	 	})
  	 },
  	 deletar: function(req,res){
  	 	Usuario.remove({_id: req.params.id},function(err,data){
  	 		if(err){
  	 			console.log('Erro ao deletar dados');
  	 		}else{  	 			
  	 		 res.redirect('/usuario/usuarios');  	 		 			
  	 		}
  	 		
  	 	});
  	 }
  };
  return usuarioController;
};