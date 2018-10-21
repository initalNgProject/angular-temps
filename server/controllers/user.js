const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/dev');

exports.auth = function(req,res) {
 const { email,password } = req.body;
 if(!password || !email) {
  return res.status(422).send({errors: [{title:'data missing', detail: 'provide email and password'}]});
}
User.findOne({email}, function(err,user){
  if(err) {
    return res.status(422).send({errors: [{title: 'Data missing',detail:'Provide email and password!'}]});
  }
if(!user) {
 return res.status(422).send({errors: [{title: 'Invalid email',detail:'user with email alraday exist'}]});
}
if(user.ishasSamePassword(password)){
  const token = jwt.sign({
    userId: user.id,
    username: user.username
  }, config.SECRET, { expiresIn: '1h' });
 return res.json(token);
} // return jwt token
else {
  return res.status(422).send({errors: [{title: 'wrong data!',detail:'wrong email and password'}]});
}
});
}
exports.register = function(req,res) {

  const { username,email,password,passwordConfirmation } = req.body;
  if(!password || !email) {
    return res.status(422).send({errors: [{title:'data missing', detail: 'provide email and password'}]});
  }
  if(password !== passwordConfirmation) {
    return res.status(422).send({errors: [{title: 'Invalid password',detail:'Password is not a same sa confirmation PASSWORD'}]});
  }
 User.findOne({email}, function(err,existingUser){
   if(err) {
     return res.status(422).send({'mongoose':'handle mongoose errors in next lecture'});
   }
 if(existingUser) {
  return res.status(422).send({errors: [{title: 'Invalid email',detail:'user with email alraday exist'}]});
 }
 const user = new User({
   username,
   email,
   password,
 });
 user.save(function(err){
   if(err) {
    return res.status(422).send({'mongoose':'handle mongoose errors in next lecture'});
   }
   return res.json({'registered': true});
 });
 });
}
//  res.json({username,email,password,passwordConfirmation});

exports.authMiddleware = function(req,res,next) {
  const token = req.headers.authorization;
  if(token) {
    const user = parseToken(token);
    User.findById(user.userId, function(err,user){
      if(err){
        return res.status(422).send({'mongoose':'handle mongoose errors in next lecture'});
      }
      if(user){
        res.locals.user = user;
        next();
      } else {
        return res.status(422).send({errors: [{title: 'not authorized',detail:'you need to login  to get access'}]});
      }

    })
  }

}

function parseToken(token){
  return jwt.verify(token.split('')[1],config.SECRET);
}
