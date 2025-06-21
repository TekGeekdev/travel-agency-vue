const db = require('../models');
const Packages = db.packages;

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
      res.status(500).send({
        message: "Impossible d'insérer la donnée",
      });
    });
};
