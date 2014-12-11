Project Description:

Adding More Features to GROCERY LIST

This project goal is to allow users access to their stored grocery lists. I want to 
include Bootstrap grid layout to give my application a professional appearance that has 
a good user feel to it. The user will need to provide authentication to access thier 
grocery lists. 

Requirments:

I will be adding more schemas to my db.js file. I plan to implement a sign in schema,
user schema, and more if neccessary as the project progresses.

User Stories:

I want to login into my account with a password and username

I want to see my grocery lists

I want to update my grocery and add grocery lists 

I want the option of signing out of my account (this user story would require the newUser schema to have a flag to indicate signed in or out)

Modules:

(2 points) Use responsive design to adapt your site to phone and tablet layouts (points cannot be used in conjunction with using a CSS framework)
done

(1 point) Integrate visual effects
… By using CSS 3 transitions or a JavaScript library like JQuery
Implement at least 3 effects (fade in/out, wiggle, etc.)
done

(1 point) Integrate JSHint into your workflow
done

(1 point) Using pre-built Express project templates
done

Flaws:
 My sign up page and my login page are not grabbing the user input. Specifically my sign up page is only grabbing the list[] portion of my 
 schema and storing that into my database. My plan was to, at the sign up page store the user information,
 name, username, and password, into mongodb; only if the userName was not taken. After the user provided personal information they are redirected to 
 the login page to authenticate their username and password they provided . Upon their password and username matching what was 
 previously stored into the database, the user would then be redirected to the list their personal list page. This authentication portion of my project
 is only partially complete due to errors. 
 
 
 
 
 Overview
Create a web application using Express and MongoDB.


Project Requirements
Use Express and MongoDB (or other database)
Have at least 5 route handers
Have at least 4 Mongoose Schemas (or other database abstraction library/module)
Have at least 2 forms:
Minimally, one of the forms must submit data using JavaScript (ajax)
Ensure that server side validation occurs
Additionally, validation errors should be propagated back to the front end
Use external CSS files to style your site
Use external JavaScript files for client-side JavaScript
Do not allow user generated content to be displayed directly (allow the default handlebars behavior that converts HTML entities)
Additional Requirements, Your Choice
Choose at least 7 points worth of these following topics (research and implementation)

(2 points) Model view controller, laying out your project to conform with MVC architecture
See Web Development With Node & Express
Or express examples
(2 points) Unit testing with JavaScript
Jasmine
Mocha
Any others found through research
(3 points) Automated functional testing for all of your routes using any of the following:
PhantomJS - headless browser testing
Selenium
Any others found through research
(2 points) Configuration management
nconf
Node convict
Any others found through research
(2 points) Use a CSS preprocesser
Sass
Less
Myth
(2 points) Concatenation and minification of CSS and JavaScript files
(1 point) Use grunt, gulp, or even make (!) to automate any of the following … must be used in combination with one or more of the other requirements, such as:
Automated minification and concatenation of JavaScript and CSS files
Automated compiling of CSS preprocessing language
Running your unit or functional tests
(1 point) Integrate JSHint into your workflow
(1 point) Using pre-built Express project templates
(3 points) Integrate user authentication
Minimally, implement sign up and registration
Or implement sign in with provider, such as FB Connect, Google, etc.
(3 points) Use a different database and database abstraction layer (!)
(2 points) Perform client side form validation using a JavaScript library
(2 points) Use a CSS framework throughout your site, use a reasonable of customization of the framework (don't just use stock Bootstrap):
Bootstrap
Foundation
(1 point) Use a server-side JavaScript library or module that we did not cover in class (not including any from other requirements) - 1 point per library, maximum of 2
(1 point) Use a client-side JavaScript library or module that we did not cover in class (not including any from other requirements) - 1 point per library, maximum of 2
(2 points) Use responsive design to adapt your site to phone and tablet layouts (points cannot be used in conjunction with using a CSS framework)
(2 points) Use an external API
(1 point) Integrate visual effects
… By using CSS 3 transitions or a JavaScript library like JQuery
Implement at least 3 effects (fade in/out, wiggle, etc.)
(2 points) Use a client side templating language!

Milestones
11/24 - Requirements / Specifications and Data Model
Documentation
Submit electronically through a supplied GitHub repository
Write everything up in your README.md
Drop the images into your repository (either under a separate branch or in a folder called documentation)
Link to it based on this SO article
A one-paragraph description of your project
Requirements
Sample documents (JSON / JavaScript literal objects will be fine, or your actualy Schemas) that you will store in your database, and a description of what each document represents
Enumerate any references from one document to another
Wireframes (like this one)
a great article on wireframes
some possible tools
Hand-drawn
Balsamiq
Google drawings
Omnigraffle
Adobe tools such Photoshop (psds), Illustrator (ai) etc.
A Site Map (see examples)
One of the following to represent what your application will actually do:
A list of user stories (simply a list of sentences in the form of as a <type of user>, I want <some goal> so that <some reason>)
A list/spreadsheet of use cases (see the end of this article)
A Use Case Diagram
Which modules / concept will you research?
List of research topics
A brief description of concept (3 or 4 sentence each)
What is it?
Any theoretical underpinnings worth mentioning?
Why use it?
List of possible candidate modules or solutions
Code
A skeleton express app
Start populating your package.json with required modules
Stub a few routes
A 1st draft mongoose schema

12/1 - Prototype With Some Implemented Functionality
2 or more forms and their corresponding route handlers
Demonstrate that at least a couple of route handlers can read and write from MongoDB
Proof of concepts for research topics (have some work done for at least 4 out of your 7 points worth of research topics)

12/8 - Finished Project

Potential Projects
Convert the grocery list so that it is multi-user and uses ajax for its forms
A project portfolio site
Create a one-player game with a computer AI - allow logins, saved high scores, saved games
Maybe something like Cookie Clicker …
or a Battleship clone
Or… whatever you can come up with!