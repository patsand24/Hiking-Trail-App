var auth = require('../middleware/auth');
var db = require('../models/db'),
    User = db.User;

function login(req, res) {
  User.findOne({ email: req.body.email}, '+password', function (err, user) {
    if (!user) {
      return res.status(401).send({ message: 'Invalid email or password.' });
    }

    user.comparePassword(req.body.password, function (err, isMatch) {
      if (!isMatch) {
        return res.status(401).send({ message: 'Invalid email or password.' });
      }
      res.send({ token: auth.createJWT(user) });
      console.log('normal users controller', user);
    });
  });
}

function signup(req, res) {
  User.findOne({ email: req.body.email }, function (err, existingUser) {
    if (existingUser) {
      return res.status(409).send({ message: 'Email is already taken.' });
    }
    var user = new User({
      displayName: req.body.displayName,
      email: req.body.email,
      password: req.body.password
    });
    console.log('new user created', user.admin);
    user.save(function (err, result) {
      if (err) {
        res.status(500).send({ message: err.message });
      }
      res.send({ token: auth.createJWT(result) });
    });
  });
}

function updateCurrentUser(req, res) {
  User.findById(req.user_id, function (err, user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found.' });
    }
    user.displayName = req.body.displayName || user.displayName;
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.avatar = req.body.avatar || user.avatar;
    user.save(function(err, result) {
      res.send({ token: auth.createJWT(result) });
    });
  });
}

function showCurrentUser (req, res) {
  User.findById(req.user_id)
    .populate('trails')
    .exec(function (err, user) {
      res.send(user);
  });
}

function putFavCurrentUser (req, res){
  User.findById(req.user_id, function (err, user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found.' });
    }
    // if (!user.trails.includes(req.params)){
    // if (user.trails.indexOf(req.params) == -1){
      console.log('check like', req.params);
      user.trails.push(req.params.id);
  //  }
    console.log('the trail id',req.params);
    console.log("user liked this id", user.trails);
    user.save(function(err, result){
      console.log('this is whats in result', result);
      res.send({ token: auth.createJWT(result) });
    });
  });
}

module.exports = {
  signup: signup,
  login: login,
  updateCurrentUser: updateCurrentUser,
  showCurrentUser: showCurrentUser,
  putFavCurrentUser: putFavCurrentUser
};