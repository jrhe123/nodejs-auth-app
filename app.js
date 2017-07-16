// 1. Require
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
// DB settings
const config = require('./config/database');


// 2. Express Settings
const app = express();
const users = require('./routes/users');
const port = 3000;	// Port number
app.use(cors());	// CORS - Cross-origin resource sharing
app.use(express.static(path.join(__dirname, 'public')));	// Set Static Folder (localhost:3000 => index.html)
// Body Parser Middleware
app.use(bodyParser.json());		
// Passport Middleware (Password-JWT)
app.use(passport.initialize());	
app.use(passport.session());	
require('./config/passport')(passport);


// 3. Mongoose Settings
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
	console.log('Connected DB: ' + config.database);
});
mongoose.connection.on('error', (err) => {
	console.log('Database error: ' + err);
});


// 4. APIs
// 4.1 User Controller
app.use('/users', users);

app.get('/', (req, res) => {
	res.send("Invalid Endpoint");
});

app.listen(port, () => {
	console.log("Server listening on port " + port);
});