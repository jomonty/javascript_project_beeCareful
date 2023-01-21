const express = require('express');
const { ObjectId } = require('mongodb');
const { getInspections, createInspection, updateInspection, deleteInspection } = require('../db/repo/inspections_queries');

const createInspectionsRouter = function (db) {
    
	const router = express.Router({ mergeParams: true });

	// Inspections - GET - index
	router.get('/', (req, res) => {
		const col_id = ObjectId(req.params.col_id);
		getInspections(db, col_id)
			.then(dbRes => {
				res.status(200);
				res.json(dbRes);
			})
			.catch(error => {
				db.status(500);
				res.json({ status: 500, error: error });
			})
	});

	// Inspections - GET - show
	router.get('/:ins_id', (req, res) => {
		const col_id = ObjectId(req.params.col_id);
		const ins_id = ObjectId(req.params.ins_id);
		getInspections(db, col_id, ins_id)
			.then(dbRes => {
				res.status(200);
				res.json(dbRes);
			})
			.catch(error => {
				res.status(500);
				res.json({ status: 500, error: error });
			})
	});

	// Inspections - POST - create
	router.post('/', (req, res) => {
		const col_id = ObjectId(req.params.col_id);
		const ins_body = req.body;
		createInspection(db, col_id, ins_body)
			.then(dbRes => {
				res.status(200);
				res.json(dbRes)
			})
			.catch(error => {
				res.status(500);
				res.json({ status: 500, error: error });
			})
	});

	// Inspections - PUT - update
	router.put('/:ins_id', (req, res) => {
		const col_id = ObjectId(req.params.col_id);
		const ins_id = ObjectId(req.params.ins_id);
		const ins_body = req.body;
		updateInspection(db, col_id, ins_id, ins_body)
			.then(dbRes => {
				res.status(200);
				res.json(dbRes);
			})
	});
	
	// Inspections - DELETE - delete
	router.delete('/:ins_id', (req, res) => {
		const ins_id = ObjectId(req.params.ins_id);
		deleteInspection(db, ins_id)
			.then(dbRes => {
				res.status(200);
				res.json({ status: 200, body: "Deleted"});
			})
			.catch(error => {
				res.status(500);
				res.json({ status: 500, error: error });
			})
	});

	return router;
}

module.exports = createInspectionsRouter;