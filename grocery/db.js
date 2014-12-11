/* jshint undef: true, unused: true */


var mongoose = require('mongoose'),
	URLSlugs = require('mongoose-url-slugs');
	

// my schema goes here!

var Item = new mongoose.Schema({
	name: String,
	quantity: Number,
	checked: Boolean
	
});

var List = new mongoose.Schema({
	name: String,
	createdBy: String,
	items: [Item] //name, quantity, checked 
});

//login schema: new user
var newUser = new mongoose.Schema({
	name: String,
	userName: String,
	userPassword: String,
	userList: [List] //Link new user to their lists
});

//login schema: current user
var currentUser = new mongoose.Schema({
	userName: String,
	userPassword: String,
});

List.plugin(URLSlugs('name'));

mongoose.model('List', List);
mongoose.model('Item', Item);
mongoose.model('newUser', newUser);
mongoose.model('currentUser', currentUser);

mongoose.connect('mongodb://localhost/grocerydb');

