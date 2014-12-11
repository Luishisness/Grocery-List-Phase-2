/* jshint undef: true, unused: true */


var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
//var db = require('./db');
var List = mongoose.model('List');
var Item = mongoose.model('Item');
var newUser = mongoose.model('newUser');

var currentUser = mongoose.model('currentUser');



///////////////////////////////////////////////////////
////////////////////////////////////////////////
//////////////////////////////////////////////////
///////////////////////////////////////////////////

/* signup  page. list of grocery lists */
router.get('/signup', function(req, res) {
  		res.render('signup', { title: 'Shoppy Shoperson' });
});


router.post('/signup', function(req, res){

	//store the user input to our monogo database for authentication 
	// through the login page
  	new newUser({
		name: req.url.name,
		userName: req.url.userName,
		userPassword: req.url.userPassword
	//before saving I need to make sure the newUser credentials are not already assigned to another user
	}).save(function(err, newUser){
		//After logging in the user is directed to the login page 
		//for authentication to verify their user name and password 
		//against the database (grocerydb)
		res.redirect('/login');
	});
});

 //login page
router.get('/login', function(req, res) {
		res.render('login',{ title: 'Shoppy Shoperson' });
});

router.post('/login', function(req, res) {
	//get user name and password 
	var userNAME=document.getElementById("_Username");
	var userPASSWORD=document.getElementById("_Password");

	//find user name and password in database for a match to users input
	// if input matches redirect to /lists else redirect back to login to try again. 
	newUsers.find({userName: userNAME, userPassword:userPASSWORD}, function(err, newUsers, count){
		//if the record was not found force the user back to the login page
		//for authentication (try again)
		if (err) return console.error(err); res.render('/login');
		//if the record was found redirect the user to their list page 
		if (!err) return  res.redirect('/list');

	});
});

//end edits here

/* GET list page. list of grocery lists*/
router.get('/list', function(req, res) {
List.find(function(err,name,count){
  res.render('list', { List: name, title: 'Shoppy Shoperson' });
  });
});

/* GET list/create  page. list of grocery lists */
router.get('/list/create', function(req, res) {
  res.render('create', { title: 'Shoppy Shoperson' });
});

//Post new list/create  page. list of grocery lists 
router.post('/list/create', function(req, res){
console.log(req.body.name);
  	new List({
		name: req.body.name,
		createdBy : req.body.createdBy
	}).save(function(err, list, count){
		res.redirect('/list');
	});
});

router.get('/list/:slug', function(req, res) {
	var current = req.params.slug;
	List.findOne({slug: current}, function(err, list, count){
			res.render('items', {title: list.name,items: list.items});
	});
});

router.post('/list/:slug', function(req, res){
	req.body.slug = req.params.slug;

	var newItem = new Item({
		name: req.body.name,
		quantity: req.body.quantity,
		checked: false
	});

	List.findOneAndUpdate({slug: req.body.slug}, {$push:{items:newItem}}, function(err, list, count){
		res.redirect('/list/'+req.body.slug);
	});
});


module.exports = router;
