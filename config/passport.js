const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user');
const config = require('../config/database');

// Authentication Token
module.exports = function(passport){

	let opts = {};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
	opts.secretOrKey = config.secret;

	console.log("here");

	passport.use(new JwtStrategy(opts, (jwt_payload, done) => {

		User.getUserById(jwt_payload._doc._id, (err, user) => {
			if(err){
				return done(err, false);
			}

			if(user){ // found
				return done(null, user);
			} else { // not found
				return done(null, false);
			}
		});
	}));
}