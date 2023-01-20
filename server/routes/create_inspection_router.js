const express = require('express');
const { ObjectId } = require('mongodb');
const { getInspections, createInspection, updateInspection, deleteInspection } = require('../db/repo/inspections_queries');

const createInspectionsRouter = function (db) {
    
    const router = express.Router({ mergeParams: true });

    // Inspections - GET - index
    router.get('/', (req, res) => {
        const api_id = req.params.api_id;
        const col_id = req.params.col_id;
        res.json(`INSPECTIONS - GET index - api_id:${api_id} - col_id:${col_id}`);
    });

    // Inspections - GET - show
    router.get('/:ins_id', (req, res) => {
        const api_id = req.params.api_id;
        const col_id = req.params.col_id;
        const ins_id = req.params.ins_id;
        res.json(`INSPECTIONS - GET show - api_id:${api_id} - col_id:${col_id} - ins_id:${ins_id}`);
    });

    // Inspections - POST - create
    router.post('/', (req, res) => {
        const api_id = req.params.api_id;
        const col_id = req.params.col_id;
        res.json(`INSPECTIONS - POST - api_id:${api_id} - col_id:${col_id}`);
    });

    // Inspections - PUT - update
    router.put('/:ins_id', (req, res) => {
        const api_id = req.params.api_id;
        const col_id = req.params.col_id;
        const ins_id = req.params.ins_id;
        res.json(`INSPECTIONS - PUT - api_id:${api_id} - col_id:${col_id} - ins_id:${ins_id}`);
    });
    
    // Inspections - DELETE - delete
    router.delete('/:ins_id', (req, res) => {
        const api_id = req.params.api_id;
        const col_id = req.params.col_id;
        const ins_id = req.params.ins_id;
        res.json(`INSPECTIONS - DELETE - api_id:${api_id} - col_id:${col_id} - ins_id:${ins_id}`);
    })

    return router;
}

module.exports = createInspectionsRouter;