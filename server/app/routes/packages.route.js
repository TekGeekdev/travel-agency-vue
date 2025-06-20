module.exports = (app) => {
  const packages = require('../controllers/packages.controller');
  const router = require('express').Router();

  router.get('/', packages.findAll);

  app.use('/api/packages', router);
};
