
module.exports = function(app,data)
 {
	
	app.use('/support',function(req,res){

		
		res.render('support.ejs',{data:data});
	});

	app.use('/about-us',function(req,res){
		
		res.render('about.ejs',{data:data});
		
	});

	app.use('/blog',function(req,res){
		res.render('blog.ejs',{data:data});
		
	});

	app.use('/contact-us',function(req,res){
		
		res.render('contact.ejs',{data:data});
		
	});

	app.use('/',function(req,res){

		
		res.render('index.ejs');
	});

}