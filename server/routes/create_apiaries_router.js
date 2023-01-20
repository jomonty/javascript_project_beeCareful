const express = require('express');
const { ObjectId } = require('mongodb');
const createColoniesRouter = require('./create_colonies_router');

const createApiariesRouter = function (db) {
    
    const router = express.Router({ mergeParams: true });

    // Apiaries - GET - index
    router.get('/', (req, res) => {
        res.json('APIARIES - GET index');
    })
    // Apiaries - GET - show
    router.get('/:api_id', (req, res) => {
        const api_id = req.params.api_id;
        res.json(`APIARIES - GET show - api_id:${api_id}`);
    })
    // Apiaries - POST - create
    router.post('/', (req, res) => {
        res.json('APIARIES - POST');
    })
    // Apiaries - PUT - update
    router.put('/:api_id', (req, res) => {
        const api_id = req.params.api_id;
        res.json(`APIARIES - PUT - api_id:${api_id}`);
    })
    // Apiaries - DELETE - delete
    router.delete('/:api_id', (req, res) => {
        const api_id = req.params.api_id;
        res.json(`APIARIES - DELETE - api_id:${api_id}`);
    })

    const coloniesRouter = createColoniesRouter(db);
    router.use('/:api_id/colonies', coloniesRouter);

    return router;
}

module.exports = createApiariesRouter;