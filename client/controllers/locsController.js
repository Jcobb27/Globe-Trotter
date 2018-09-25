const db = require("../../Model");

// Defining methods for the locsController
module.exports = {
  findAll: function(req, res) {
    db.Location
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Location
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Location
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Location
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Location
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    findStates: function(req, res) {
    db.Location
      .find().distinct('USstate')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findCountries: function(req, res) {
    db.Location
      .find().distinct('country')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
