var auth = require('../middleware/auth');
var db = require('../models/db'),
    Trail = db.Trail;


function index(req, res) {
  Trail
    .find({})

    .exec(function(err, trails){
      if (err || !trails || !trails.length) {
        return res.status(404).send({message: 'Trails not found.'});
      }
      res.send(trails);
    });
}

function create(req, res){
  var new_trail = new Trail(req.body);
  new_trail.save(function(err, new_trail){
    res.send(new_trail);
  });
}

function show(req, res){
  Trail
    .findById(req.params.id)

    .exec(function(err, found_trail){
      if (err || !found_trail) {
        return res.status(404).send({message: 'Trail not found.'});
      }

      res.send(found_trail);
    });
}

function update(req, res){
  var query = {
    _id: req.params.id
  };

  Trail
    .findOneAndUpdate(query, req.body)
    .exec(function(err, trail){
      if (err || !trail) {
        console.log(trail);
        return res.status(404).send({messsage: 'Failed to update trail.'});
      }
      res.status(204).send();
    });
}

function destroy(req, res){
  var query = {
    _id: req.params.id
  };


  Trail
    .findOneAndRemove(query)
    .exec(function(err, trail){
      if (err || !trail) {
        return res.status(404).send({messsage: 'Failed to delete trail.'});
      }
      res.status(204).send(query);
    });
}

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
};
