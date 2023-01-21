const express = require('express');
const { ObjectId } = require('mongodb');
const createInspectionsRouter = require('./create_inspection_router');
const { getColonies, createColony, updateColony, deleteColony } = require('../db/repo/colonies_queries');

const createColoniesRouter = function (db) {
    
  const router = express.Router({ mergeParams: true });

  // Colonies - GET - index
  router.get('/', (req, res) => {
    const api_id = ObjectId(req.params.api_id);
    getColonies(db, parent_id=api_id)
      .then(dbRes => {
        res.status(200);
        res.json(dbRes);
      })
      .catch(error => {
        res.status(500);
        res.json({ status: 500, error: error });
      })
  });

  // Colonies - GET - show
  router.get('/:col_id', (req, res) => {
    const api_id = ObjectId(req.params.api_id);
    const col_id = ObjectId(req.params.col_id);
    getColonies(db, parent_id=api_id, id=col_id)
      .then(dbRes => {
        res.status(200);
        res.json(dbRes)
      })
      .catch(error => {
        res.status(500);
        res.json({ status: 500, error: error });
      })
  });

  // Colonies - POST - create
  router.post('/', (req, res) => {
    const api_id = ObjectId(req.params.api_id);
    const col_body = req.body;
    createColony(db, api_id, col_body)
      .then(dbRes => {
        res.status(200);
        res.json(dbRes);
      })
      .catch(error => {
        res.status(500);
        res.json({ status: 500, error: error });
      })
  });

  // Colonies - PUT - update
  router.put('/:col_id', (req, res) => {
    const api_id = ObjectId(req.params.api_id);
    const col_id = ObjectId(req.params.col_id);
    const col_body = req.body;
    updateColony(db, api_id, col_id, col_body)
      .then(dbRes => {
        res.status(200);
        res.json(dbRes);
      })
      .catch(error => {
        res.status(500);
        res.json({ status: 500, error: error });
      })
  });

  // Colonies - DELETE - delete
  router.delete('/:col_id', (req, res) => {
    const col_id = ObjectId(req.params.col_id);
    deleteColony(db, col_id)
      .then(dbRes => {
        res.status(200);
        res.json({ status: 200, body: "Delete cascaded"});
      })
      .catch(error => {
        res.status(500);
        res.json({ status: 500, error: error });
      })
  });

  const inspectionsRouter = createInspectionsRouter(db);
  router.use('/:col_id/inspections', inspectionsRouter);

  return router;
}

module.exports = createColoniesRouter;