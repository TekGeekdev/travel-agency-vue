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

exports.findOne = (req, res) => {
  const id = req.params.id;
  Packages.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: "Erreur serveur lors de l'appel",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Packages.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Forfait mise à jour',
        });
      } else {
        res.send({
          message: 'Forfait introuvable',
        });
      }
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

exports.delete = (req, res) => {
  const id = req.params.id;
  Packages.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Forfait supprimer',
        });
      } else {
        res.send({
          message: 'Forfait introuvable',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Adieu Marcos merci pour ta patience, à qui je vais poser mes questions',
      });
    });
};
