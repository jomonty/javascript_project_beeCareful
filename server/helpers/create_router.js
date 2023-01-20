const express = require('express');
const { ObjectId } = require('mongodb');
const createApiariesRouter  = require('../routes/create_apiaries_router');

const createRouter = function (db) {
    
    const router = express.Router({ mergeParams: true });

    const apiariesRouter = createApiariesRouter(db);
    router.use('/apiaries', apiariesRouter)

    return router;
}

module.exports = createRouter;