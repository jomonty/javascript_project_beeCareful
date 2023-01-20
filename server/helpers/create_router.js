const express = require('express');
const { ObjectID } = require('mongodb');

const createRouter = function (db) {
    
    const router = express.Router();

    // Collections
    // const apiariesCollection = db.collection(apiaries);
    // const coloniesCollection = db.collection(colonies);
    // const inspectionsCollection = db.collection(inspections);

    // Apiaries - GET - index
    router.get('/apiaries', (req, res) => {
        res.json('APIARIES - GET index');
    })
    // Apiaries - GET - show
    router.get('/apiaries/:api_id', (req, res) => {
        const api_id = req.params.api_id;
        res.json(`APIARIES - GET show - api_id:${api_id}`);
    })
    // Apiaries - POST - create
    router.post('/apiaries', (req, res) => {
        res.json('APIARIES - POST');
    })
    // Apiaries - PUT - update
    router.put('/apiaries/:api_id', (req, res) => {
        const api_id = req.params.api_id;
        res.json(`APIARIES - PUT - api_id:${api_id}`);
    })
    // Apiaries - DELETE - delete
    router.delete('/apiaries/:api_id', (req, res) => {
        const api_id = req.params.api_id;
        res.json(`APIARIES - DELETE - api_id:${api_id}`);
    })


    // Colonies - GET - index
    router.get('/apiaries/:api_id/colonies', (req, res) => {
        const api_id = req.params.api_id;
        res.json(`COLONIES - GET index - api_id:${api_id}`);
    })
    // Colonies - GET - show
    router.get('/apiaries/:api_id/colonies/:col_id', (req, res) => {
        const api_id = req.params.api_id;
        const col_id = req.params.col_id;
        res.json(`COLONIES - GET show - api_id:${api_id} - col_id:${col_id}`);
    })
    // Colonies - POST - create
    router.post('/apiaries/:api_id/colonies', (req, res) => {
        const api_id = req.params.api_id;
        res.json(`COLONIES - POST - api_id:${api_id}`);
    })
    // Colonies - PUT - update
    router.put('/apiaries/:api_id/colonies/:col_id', (req, res) => {
        const api_id = req.params.api_id;
        const col_id = req.params.col_id;
        res.json(`COLONIES - PUT - api_id:${api_id} - col_id:${col_id}`);
    })
    // Colonies - DELETE - delete
    router.delete('/apiaries/:api_id/colonies/:col_id', (req, res) => {
        const api_id = req.params.api_id;
        const col_id = req.params.col_id;
        res.json(`COLONIES - DELETE - api_id:${api_id} - col_id:${col_id}`);
    })


    // Inspections - GET - index
    router.get('/apiaries/:api_id/colonies/:col_id/inspections', (req, res) => {
        const api_id = req.params.api_id;
        const col_id = req.params.col_id;
        res.json(`INSPECTIONS - GET index - api_id:${api_id} - col_id:${col_id}`);
    })
    // Inspections - GET - show
    router.get('/apiaries/:api_id/colonies/:col_id/inspections/:ins_id', (req, res) => {
        const api_id = req.params.api_id;
        const col_id = req.params.col_id;
        const ins_id = req.params.ins_id;
        res.json(`INSPECTIONS - GET show - api_id:${api_id} - col_id:${col_id} - ins_id:${ins_id}`);
    })
    // Inspections - POST - create
    router.post('/apiaries/:api_id/colonies/:col_id/inspections', (req, res) => {
        const api_id = req.params.api_id;
        const col_id = req.params.col_id;
        res.json(`INSPECTIONS - POST - api_id:${api_id} - col_id:${col_id}`);
    })
    // Inspections - PUT - update
    router.put('/apiaries/:api_id/colonies/:col_id/inspections/:ins_id', (req, res) => {
        const api_id = req.params.api_id;
        const col_id = req.params.col_id;
        const ins_id = req.params.ins_id;
        res.json(`INSPECTIONS - PUT - api_id:${api_id} - col_id:${col_id} - ins_id:${ins_id}`);
    })
    // Inspections - DELETE - delete
    router.delete('/apiaries/:api_id/colonies/:col_id/inspections/:ins_id', (req, res) => {
        const api_id = req.params.api_id;
        const col_id = req.params.col_id;
        const ins_id = req.params.ins_id;
        res.json(`INSPECTIONS - DELETE - api_id:${api_id} - col_id:${col_id} - ins_id:${ins_id}`);
    })

    return router;
}

module.exports = createRouter;