const db = require("../models");

// Defining methods for the restaurantsController
module.exports = {
    findAll: function (req, res) {
        db.Restaurant
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Restaurant
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        const bodyRestaurant = req.body;

        const newRestaurant = {
            name: bodyRestaurant.name,
            address: bodyRestaurant.address
        };
        
        db.Restaurant
            .create(newRestaurant)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        const bodyRestaurant = req.body;

        const updateRestaurant = {
            name: bodyRestaurant.name,
            address: bodyRestaurant.address
        };

        db.Restaurant
            .findByIdAndUpdate(req.params.id, updateRestaurant)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Restaurant
            .findById(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
