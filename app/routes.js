
module.exports = function(app)
 {
	
	app.use('/support',function(req,res){

		
		res.render('support.ejs');
	});

	app.use('/about-us',function(req,res){
		
		res.render('about.ejs');
		
	});

	app.use('/blog',function(req,res){
		res.render('blog.ejs');
		
	});

	app.use('/contact-us',function(req,res){
		
		res.render('contact.ejs');
		
	});

	app.use('/',function(req,res){

		
		res.render('index.ejs');
	});

}