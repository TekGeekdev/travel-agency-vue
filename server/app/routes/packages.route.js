module.exports = (app) => {
  const packages = require('../controllers/packages.controller');
  const router = require('express').Router();

  router.get('/', packages.findAll);
  router.post('/', packages.create);
  router.get('/:id', packages.findOne);
  router.put('/:id', packages.update);
  router.delete('/:id', packages.delete);

  app.use('/api/packages', router);
};
