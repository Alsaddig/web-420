//import user schema
var User = require('../models/user');

//Register a new user when POSTed
exports.user_register = (req, res) => {
  res.send("NOT IMPLEMENTED: User registration POST");
}

//verify the token when GET issued
exports.user_token = (req, res) => {
  res.send('NOT IMPLEMENTED: User token lookup GET');
}