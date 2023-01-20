const express = require('express');
const { ObjectId } = require('mongodb');
const createInspectionsRouter = require('./create_inspection_router');
const { getColonies, createColony, updateColony, deleteColony } = require('../db/repo/colonies_queries');

const createColoniesRouter = function (db) {
    
    const router = express.Router({ mergeParams: true });

    // Colonies - GET - index
    router.get('/', (req, res) => {
        const api_id = req.params.api_id;
        res.json(`COLONIES - GET index - api_id:${api_id}`);
    });

    // Colonies - GET - show
    router.get('/:col_id', (req, res) => {
        const api_id = req.params.api_id;
        const col_id = req.params.col_id;
        res.json(`COLONIES - GET show - api_id:${api_id} - col_id:${col_id}`);
    });

    // Colonies - POST - create
    router.post('/', (req, res) => {
        const api_id = req.params.api_id;
        res.json(`COLONIES - POST - api_id:${api_id}`);
    });

    // Colonies - PUT - update
    router.put('/:col_id', (req, res) => {
        const api_id = req.params.api_id;
        const col_id = req.params.col_id;
        res.json(`COLONIES - PUT - api_id:${api_id} - col_id:${col_id}`);
    });

    // Colonies - DELETE - delete
    router.delete('/:col_id', (req, res) => {
        const api_id = req.params.api_id;
        const col_id = req.params.col_id;
        res.json(`COLONIES - DELETE - api_id:${api_id} - col_id:${col_id}`);
    });

    const inspectionsRouter = createInspectionsRouter(db);
    router.use('/:col_id/inspections', inspectionsRouter);

    return router;
}

module.exports = createColoniesRouter;