module.exports = (app) => {
  const packages = require('../controllers/packages.controller');
  const router = require('express').Router();

  router.get('/', packages.findAll);
  router.post('/', packages.create);
  router.get('/:id', packages.findOne);

  app.use('/api/packages', router);
};
