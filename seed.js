var db = require("./client/src/models/db");

var user_list = [
  {
    email: "admin1@gmail.com",
    password: "123",
    displayName: "Admin Account",
    admin: true
  },
  {
    email: "user1@mgail.com",
    password: "123",
    displayName: "user",
    admin: false
  }

];

var trail_list = [
  {
    trailName: "Discovery Park",
    image: "https://78.media.tumblr.com/be2104a5763be403e512418ff6e4de46/tumblr_oiekyiZo8x1r3mgtho1_1280.jpg",
    address: "Seattle, WA",
    description: "This short trail provides a great way to see the cliffs near Magnolia offers views of the Olympic Mountains.",
    dogFriendly: true,
    trailLength: 2.7,
    difficulty: "Moderate",
    trailSurface: "unpaved",
    trailRating: "",
    trailPending: true,
  },
  {
    trailName: "Magnuson Park",
    image: "http://www.seattle.gov/images/Departments/ParksAndRecreation/Parks/Magnuson/MagnusonPark2.jpg",
    address: "Seattle, WA",
    description: "This short trail provides a great way to Lake Washington",
    dogFriendly: true,
    trailLength: 1.4,
    difficulty: "Easy",
    trailSurface: "paved",
    trailRating: "",
    trailPending: false,
  },
  {
    trailName: "Carkeek Park",
    image: "http://www.seattle.gov/images/Departments/ParksAndRecreation/Parks/Magnuson/MagnusonPark2.jpg",
    address: "Seattle, WA",
    description: "Random trails in an interesting beach park",
    dogFriendly: false,
    trailLength: 2.8,
    difficulty: "Moderate",
    trailSurface: "unpaved",
    trailRating: "",
    trailPending: true,
  }
];

db.User.remove({}, function(){
  db.Trail.remove({}, function(){
    db.User.create(user_list, function(err, user){
      console.log('users',user);
      if (err || !user) { return console.log(err); }
      db.Trail.create(trail_list, function(err, trails){
          if (err) { return console.log(err); }
          console.log("Created", trails.length, "trails" + trails);
          process.exit();
        }
      );
    });
  });
});