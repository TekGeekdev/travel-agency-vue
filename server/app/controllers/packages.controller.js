const db = require('../models');
const Packages = db.packages;
const { ValidationError } = require('sequelize');

exports.findAll = (req, res) => {
  Packages.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Une erreur c'est produite",
      });
    });
};

exports.create = (req, res) => {
  Packages.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      if (error instanceof ValidationError) {
        const errors = {};
        error.errors.forEach((e) => {
          errors[e.path] = e.message;
        });
        return res.status(400).send({ errors });
      }

      res.status(500).send({
        message: "Erreur serveur lors de l'insertion",
      });
    });
};
