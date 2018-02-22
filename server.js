const express = require('express');
const app = express();
// const logger = require('morgan');
const auth = require('./client/src/middleware/auth');
const cors = require('cors');
const controllers = require('./client/src/controllers');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// app.get('/api/trails/seattle', (req, res) => {
//   let seattleTrails = [
//   {
//     id: 99991,
//     trail: "Discovery Park",
//     image: "https://78.media.tumblr.com/be2104a5763be403e512418ff6e4de46/tumblr_oiekyiZo8x1r3mgtho1_1280.jpg",
//   },
//   {
//     id: 99992,
//     trail: "Magnuson Park",
//     image: "http://www.seattle.gov/images/Departments/ParksAndRecreation/Parks/Magnuson/MagnusonPark2.jpg"
//   },
//   {
//     id: 99993,
//     trail: "Carkeek Park",
//     image: "http://www.seattle.gov/images/Departments/ParksAndRecreation/Parks/Magnuson/MagnusonPark2.jpg"
//   },
//   {
//     id: 99994,
//     trail: "Seward Park"
//   },
//   {
//     id: 99995,
//     trail: "Washington Arboretum"
//   },
//   {
//     id: 99996,
//     trail: "Woodland Park"
//   }
//   ];
//   res.json(seattleTrails);
// })

// app.get('/api/trails/greaterSeattle', (req, res) => {
//   let greaterSeattleTrails = [
//   {
//     id: 88881,
//     trail: "Saint Edward State Park",
//   },
//   {
//     id: 88882,
//     trail: "Coal Creek Park"
//   },
//   {
//     id: 88883,
//     trail: "Mount Si Trail"
//   },
//   {
//     id: 88884,
//     trail: "Little Si Trail"
//   },
//   {
//     id: 88885,
//     trail: "Bare Mountain"
//   },
//   {
//     id: 88886,
//     trail: "Mailbox Peak"
//   }
//   ];
//   res.json(greaterSeattleTrails);
// })

// app.listen(3333);
// console.log('Listening on localhost:3333');

// ROUTES
app.get('/api', controllers.api.index);

// Auth Routes
var usersCtrl = controllers.users;
app.post('/auth/signup', usersCtrl.signup);
app.post('/auth/login', usersCtrl.login);
app.get('/api/me', auth.ensureAuthenticated, usersCtrl.showCurrentUser);
app.put('/api/me', auth.ensureAuthenticated, usersCtrl.updateCurrentUser);

//Adding favorite trail to users profile
app.put('/api/me/trails/:id', auth.ensureAuthenticated, usersCtrl.putFavCurrentUser);

//API Endpoints

var trailsCtrl = controllers.trails;
app.get('/api/trails', trailsCtrl.index);
app.post('/api/trails', trailsCtrl.create);
app.get('/api/trails/:id', trailsCtrl.show);
app.put('/api/trails/:id', trailsCtrl.update);
app.delete('/api/trails/:id', trailsCtrl.destroy);

// CATCH All Routes
// app.get([
//   '/',
//   '/signup',
//   '/login',
//   '/logout',
//   '/admin',
//   '/profile',
//   '/trails*'
// ], function (req, res) {
//   res.sendFile(__dirname + '/views/index.html');
// });


const port = process.env.PORT || 4000;
// startup our app at https://localhost:4000
app.listen(port);
console.log('magic happening on port ' + port);
