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
