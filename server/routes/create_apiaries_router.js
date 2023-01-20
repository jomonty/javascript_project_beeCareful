const express = require('express');
const { ObjectId } = require('mongodb');
const createColoniesRouter = require('./create_colonies_router');
const { getApiaries, createApiary, updateApiary, deleteApiary } = require('../db/repo/apiaries_queries');

const createApiariesRouter = function (db) {
    
  const router = express.Router({ mergeParams: true });

  // Apiaries - GET - index
  router.get('/', (req, res) => {
    getApiaries(db)
      .then(dbRes => {
        res.status(200);
        res.json(dbRes);
      })
      .catch(error => {
        res.status(500);
        res.json({ status: 500, error: error});
      })
  });

  // Apiaries - GET - show
  router.get('/:api_id', (req, res) => {
    const api_id = ObjectId(req.params.api_id);
    getApiaries(db, api_id)
      .then(dbRes => {
        res.status(200);
        res.json(dbRes);
      })
      .catch(error => {
        res.status(500);
        res.json({ status: 500, error: error });
      })
  });

  // Apiaries - POST - create
  router.post('/', (req, res) => {
    const apiary = req.body;
    createApiary(db, apiary)
      .then(dbRes => {
        res.status(200);
        res.json(dbRes);
      })
      .catch(error => {
        res.status(500);
        res.json({ status: 500, error: error });
      })
  });

  // Apiaries - PUT - update
  router.put('/:api_id', (req, res) => {
    const api_id = ObjectId(req.params.api_id);
    const api_body = req.body;
    updateApiary(db, api_id, api_body)
      .then(dbRes => {
        res.status(200);
        res.json(dbRes);
      })
      .catch(error => {
        res.status(500);
        res.json({ status: 500, error: error });
      })
  });

  // Apiaries - DELETE - delete
  router.delete('/:api_id', (req, res) => {
    const api_id = ObjectId(req.params.api_id);
    deleteApiary(db, api_id)
      .then(() => {
        res.status(200);
        res.json({ status: 200, body: "Delete cascaded"});
      })
      .catch(error => {
        res.status(500);
        res.json({ status: 500, error: error });
      })
  });

  const coloniesRouter = createColoniesRouter(db);
  router.use('/:api_id/colonies', coloniesRouter);

  return router;
}

module.exports = createApiariesRouter;