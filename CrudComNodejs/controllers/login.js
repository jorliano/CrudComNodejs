module.exports = function(app){
  var Usuario = app.models.usuarios;

  var loginController = {
  	 index: function(req,res){
        res.render('home/index');
  	 },
  	 logar: function(req,res){
       var login = req.body.login,
           senha = req.body.senha;

       Usuario.findOne(login).exec(function(err,user){
  	 		if(user){
          
          console.log('Login: '+login+' Senha : '+senha);
          res.redirect('/home');
  	 					
  	 		}else{
  	 			res.redirect('/');     
  	 		}
  	 		
  	 	})



      /* if(nome == 'jorliano' && senha == 'leandro'){     	        	
       	 res.redirect('/home');
       }
       else{       	 
       	 console.log('Nome: '+nome+' Senha : '+senha);
         res.redirect('/');
       } */   
  	 },
  	 sair: function(req,res){
         res.session.destroy;
         res.redirect('/');
  	 }
  };
  return loginController;
};